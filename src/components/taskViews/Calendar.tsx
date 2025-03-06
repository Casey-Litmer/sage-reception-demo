import React, { useState } from 'react';
import { Calendar, momentLocalizer, SlotInfo, View, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import { useEvents } from '../../contexts/EventsProvider';



const localizer = momentLocalizer(moment);


export default function CalendarComponent() {
    const [view, setView] = useState<View>(Views.WEEK);
    const [date, setDate] = useState(new Date());
    const {events, dispatchEvents} = useEvents();

    const handleSelectSlot = ({start, end}: SlotInfo) => {
        if (view !== Views.MONTH) {
            const title = prompt('Event Title:');
            if (title)
                dispatchEvents({title, start, end});
        };
    };

    return (
        <div className='CalendarWrapper'>
            <Calendar
                events={events}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                view={view}
                date={date}
                timeslots={1}
                onView={newView => setView(newView)}
                onNavigate={newDate => setDate(newDate)}
                onSelectSlot={handleSelectSlot}
                selectable
                showMultiDayTimes
            />

        </div>
    );
};
