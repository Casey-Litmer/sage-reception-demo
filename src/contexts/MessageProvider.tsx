import { createContext, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Message, MessageRecord, MessageStatus, } from '../types';


type ContextProviderProps = {
    children: React.ReactNode;
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

type MessageContextType = {
    messages: MessageRecord;
    pendingMessages: MessageStatus[];
    dispatchMessages: React.Dispatch<Message>;
    isMessageResponded: (phoneNumber: string) => void;
    isMessageOnCalendar: (date: Date) => void;
};

export const MessageContext = createContext({} as MessageContextType);

export const MessageProvider = (props: ContextProviderProps) => {
    const {children, isRunning, setIsRunning} = props;
    const [lastMessageId, setLastMessageId] = useState(1);
    const [pendingMessages, setPendingMessages] = useState<MessageStatus[]>([]);

    //====================================================================
    /** Clears message if it is on the calendar and responded to */
    const clearMessage = (id: number) => {
        if (messages[id].responded && messages[id].onCalendar) {
            messages[id].message.cleared = true;
            updatePendingMessages(messages);
        };
    };

    /** Creates list of pending messages */
    const updatePendingMessages = (messages: MessageRecord) => {
        setPendingMessages(
            Object.values(messages)
                .filter(ms => !ms.message.cleared)
        );
    };
    
    //========================================================================
    //Dispatch
    function messageTableReducer(prev: MessageRecord, newMessage: Message) {
        prev[lastMessageId] = {
            message: newMessage, 
            responded: false, 
            onCalendar: false,
            remainingTime: newMessage.timeToRespond
        };
        setLastMessageId(id => id+1);
        updatePendingMessages(prev);
        return prev;
    };
    const [messages, dispatchMessages] = useReducer(
        messageTableReducer, {
            0: FIRST_MESSAGE(),
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

    useEffect(() => updatePendingMessages(messages), []);

    //====================================================================
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new Worker(new URL('../messageWorker/MessageWorker', import.meta.url), {type: 'module'});
        workerRef.current.onmessage = (e) => dispatchMessages(e.data.message);
        return () => workerRef.current?.terminate();
    }, []);

    //Start message loop
    useEffect(() => {
        workerRef.current?.postMessage({start: true});
    }, []);

    //====================================================================
    /** Creates timer to update remaining message times */
    useEffect(() => {
        const interval = setInterval(() => {
            if(isRunning) {
                Object.values(messages).forEach(ms => {
                    ms.remainingTime -= 1000;
                    if (ms.remainingTime <= 0) endGame();
                });
                updatePendingMessages(messages);
            };
        }, 1000);
        return () => {clearInterval(interval)};
    }, [isRunning]);

    /**YOU LOSE */
    const endGame = () => {
        setIsRunning(false);
        workerRef.current?.postMessage({stop:true});
    };
    
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
};


//====================================================================
const FIRST_MESSAGE = () => {
    const now = new Date();
    return {
        message: {
            message: `Hey it's Jeff Coleman!  I need you to write me a React demo using some of our dependenices!  \
                        I need it done today at ${now.getHours()}:00.`,
            author: 'Jeff Coleman',
            phoneNumber: '503-706-4442',
            date: now,
            messageTime: now,
            cleared: false,
            timeToRespond: 90000/20
        },
        responded: false,
        onCalendar: false,
        remainingTime: 90000/20
    } as MessageStatus;
};
