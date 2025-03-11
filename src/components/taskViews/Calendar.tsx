import { useState } from 'react';
import { Calendar, momentLocalizer, SlotInfo, View, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import { useCalendarEvents } from '../../contexts/CalendarEventsProvider';
import { Button } from 'flowbite-react';
import ModalMenu from './ModalMenu';



const localizer = momentLocalizer(moment);


export default function CalendarComponent() {
    const [view, setView] = useState<View>(Views.WEEK);
    const [date, setDate] = useState(new Date());
    const [lastSlotClicked, setLastSlotClicked] = useState<SlotInfo | null>(null);
    const [newTitle, setNewTitle] = useState('');
    const {events, dispatchEvents} = useCalendarEvents();
    const [showModal, setShowModal] = useState(false);


    //========================================================================
    const handleSelectSlot = (data: SlotInfo) => {
        if (view !== Views.MONTH) {
            //For a more robust calendar setup, it would be better
            //to have some kind of event handler intead of tracking
            //individual states like this.
            setLastSlotClicked(data);
            setShowModal(true)
        };
    };
    const handleSubmit = () => {
        if (lastSlotClicked && newTitle)
        dispatchEvents({title: newTitle, start:lastSlotClicked.start, end: lastSlotClicked.end});
    };

    //========================================================================
    return (
    <>
        <div className='CalendarWrapper'>
            <Calendar
                events={events}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                formats={{timeGutterFormat: 'HH:mm'}}
                view={view}
                date={date}
                timeslots={1}
                step={60}
                onView={newView => setView(newView)}
                onNavigate={newDate => setDate(newDate)}
                onSelectSlot={handleSelectSlot}
                selectable
                showMultiDayTimes
            />
        </div>

        <ModalMenu show={showModal} style={{top: '60%', left: 'calc(50% - 9rem)'}}>
            <ModalMenu.Header>New Event</ModalMenu.Header>
            <ModalMenu.Body>
                Title:
                <input className='border-grey3 border ml-2'
                        onChange={(text) => setNewTitle(text.target.value)}
                />
            </ModalMenu.Body>
            <ModalMenu.Footer>
                <Button className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 
                   focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 
                     dark:focus:ring-green-900 items-center h-8 w-16 mx-4'
                    onClick={() => {
                        handleSubmit();
                        setShowModal(false);
                    }}>Enter</Button>
                <Button className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 
                   focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 
                     dark:focus:ring-red-900 items-center h-8 w-16 mx-4'
                    onClick={() => setShowModal(false)}     
                >Cancel</Button>
            </ModalMenu.Footer>
        </ModalMenu>
    </>
    );
};
