import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { Message, MessageTable } from '../types';

type ContextProviderProps = {
    children: React.ReactNode;
};

type MessageContextType = {
    messages: Record<number, Message>;
    dispatchMessages: React.Dispatch<Message>;
    createMessageTimeTable: () => MessageTable;
    clearMessage: (id: number) => void;
};

export const MessageContext = createContext({} as MessageContextType);

export const MessageProvider = ({ children }: ContextProviderProps) => {

    const [lastMessageId, setLastMessageId] = useState(0);

    function messageTableReducer(prev: Record<number, Message>, newMessage: Message) {
        prev[lastMessageId] = newMessage;
        console.log(prev);
        setLastMessageId(id => id+1);
        return prev;
    };

    const [messages, dispatchMessages] = useReducer(
        messageTableReducer, {
            ...Object.fromEntries(
                Array.from({length: 10}, (_, n) => ([n, {
                    message:'aaaaaaaa',
                    author:'me',
                    cleared:false,
                    date: n
                }]))
            )
        } as Record<number, Message>
    );

    //====================================================================
    const clearMessage = (id: number) => {
        messages[id].cleared = true;
    }

    const createMessageTimeTable = () => {
        const table = {} as MessageTable;

        Object.values(messages)
            .filter((mes) => !mes.cleared)
            .forEach((mes) => {
                const messageTime = mes.date;

                if (messageTime in table) {
                    table[messageTime] = [mes, ...table[messageTime]]
                        .sort((m1,m2) => m1.date - m2.date);
                } else {
                    table[messageTime] = [mes];
                };
            });

        return table; 
    }

    //====================================================================
    return (
        <MessageContext.Provider
            value={{
                messages,
                dispatchMessages,
                createMessageTimeTable,
                clearMessage
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
