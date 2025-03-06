import { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Message, MessageRecord, MessageTable } from '../types';


type ContextProviderProps = {
    children: React.ReactNode;
};

type MessageContextType = {
    messages: MessageRecord;
    pendingMessages: Message[];
    dispatchMessages: React.Dispatch<Message>;
    isMessageResponded: (phoneNumber: string) => void;
    isMessageOnCalendar: (date: Date) => void;
};

export const MessageContext = createContext({} as MessageContextType);

export const MessageProvider = ({ children }: ContextProviderProps) => {
    const [lastMessageId, setLastMessageId] = useState(0);
    const [messageTimeTable, setMessageTimeTable] = useState<MessageTable>({});
    const [pendingMessages, setPendingMessages] = useState<Message[]>([]);

    //====================================================================
    /** Clears message if it is on the calendar and responded to */
    const clearMessage = (id: number) => {
        if (messages[id].responded && messages[id].onCalendar) {
            messages[id].message.cleared = true;
            updatePendingMessages(messages);
        };
    };

    /**Creates a table hashed by time (hours) of message arrays */
    const createMessageTimeTable = (messages: MessageRecord) => {
        const table = {} as MessageTable;
        Object.values(messages)
            .filter((ms) => !ms.message.cleared)
            .forEach((ms) => {
                const messageTime = ms.message.date.getHours();
                if (messageTime in table) 
                    table[messageTime] = [ms.message, ...table[messageTime]]
                        .sort((m1,m2) => m1.date.getHours() - m2.date.getHours());
                else 
                    table[messageTime] = [ms.message];
            });
        return table; 
    };

    const updatePendingMessages = (messages: MessageRecord) => {
        setPendingMessages(
            Object.values(messages)
                .filter(ms => !ms.message.cleared)
                .map(ms => ms.message)
        );
    };

    //========================================================================
    //Dispatch
    function messageTableReducer(prev: MessageRecord, newMessage: Message) {
        prev[lastMessageId] = {message: newMessage, responded: false, onCalendar: false};
        setLastMessageId(id => id+1);
        updatePendingMessages(prev);
        return prev;
    };
    const [messages, dispatchMessages] = useReducer(
        messageTableReducer, {
            ...Object.fromEntries(
                Array.from({length: 0}, (_, n) => ([n, {   
                    message:{
                        message:'aaaaaaaa',
                        author:'me',
                        phoneNumber:'971-380-6774',
                        cleared:false,
                        date: new Date(),
                        messageTime: new Date()
                    },
                    responded: false,
                    onCalendar: false
            }]))
            )
        } as MessageRecord
    );

    //====================================================================
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new Worker(new URL('../messageWorker/MessageWorker', import.meta.url), {type: 'module'});
        workerRef.current.onmessage = (e) => dispatchMessages(e.data.message);
        return () => workerRef.current?.terminate();
    }, []);

    useEffect(() => {
        workerRef.current?.postMessage({});
        const interval = setInterval(() => {
            workerRef.current?.postMessage({});
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    //====================================================================
    /**Updates message state when you respond to the correct number */
    const isMessageResponded = (phoneNumber: string) => {
        Object.entries(messages).forEach(([id, ms]) => {
            if (phoneNumber === ms.message.phoneNumber) {
                ms.responded = true;
            }
            clearMessage(Number(id));
        });
    };

    /**Updates message state when you put the right time on the calendar */
    const isMessageOnCalendar = (date: Date) => {
        Object.entries(messages).forEach(([id, ms]) => {
            if (date.getHours() === ms.message.date.getHours())
                ms.onCalendar = true;
            clearMessage(Number(id));
        });  
    };

    //====================================================================
    return (
        <MessageContext.Provider
            value={{
                messages,
                pendingMessages,
                dispatchMessages,
                isMessageResponded,
                isMessageOnCalendar
            }}
        >
            {children}
        </MessageContext.Provider>
    );
};

//====================================================================
export function useMessages() {
    const context = useContext(MessageContext);
    return context;
}
