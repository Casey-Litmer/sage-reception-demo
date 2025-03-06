import { createContext, useContext, useReducer, useState } from 'react';
import { CalendarEvent } from '../types';

type EventsContextProviderProps = {
    children: React.ReactNode;
};

type EventsContextType = {
    events: CalendarEvent[];
    dispatchEvents: React.Dispatch<CalendarEvent>;
};

export const EventsContext = createContext({} as EventsContextType);

export const EventsProvider = ({ children }: EventsContextProviderProps) => {

    const eventsReducer = (prev: CalendarEvent[], newEvent: CalendarEvent) => {
        return [newEvent, ...prev];
    };
    const [events, dispatchEvents] = useReducer(
        eventsReducer, [
        {
            title: 'Meeting',
            start: new Date(),
            end: new Date(),
        },
    ]);

    return (
        <EventsContext.Provider
            value={{
                events,
                dispatchEvents
            }}
        >
            {children}
        </EventsContext.Provider>
    );
};


export function useEvents() {
    const context = useContext(EventsContext);
    return context;
};