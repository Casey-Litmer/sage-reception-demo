import { createContext, useContext, useReducer} from 'react';
import { CalendarEvent } from '../types';
import { useMessages } from './MessageProvider';


type EventsContextProviderProps = {
    children: React.ReactNode;
};

type EventsContextType = {
    events: CalendarEvent[];
    dispatchEvents: React.Dispatch<CalendarEvent>;
};

export const EventsContext = createContext({} as EventsContextType);

export const CalendarEventsProvider = ({ children }: EventsContextProviderProps) => {
    const {isMessageOnCalendar} = useMessages();

    //====================================================================
    const eventsReducer = (prev: CalendarEvent[], newEvent: CalendarEvent) => {
        //In real life, it wouldn't check if the new event is added to the calendar
        //here.  That would be up to the microservices.  
        isMessageOnCalendar(newEvent.start);
        return [newEvent, ...prev];
    };
    const [events, dispatchEvents] = useReducer(eventsReducer, []);

    //====================================================================
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

//====================================================================
export function useCalendarEvents() {
    const context = useContext(EventsContext);
    return context;
};