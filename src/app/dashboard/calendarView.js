'use client'
import moment from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

const CalendarView = ({ events }) => {
    const [view, setView] = useState('month');

    const handleSelectEvent = (event) => {
        alert(event.title);
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 355 }}
                onSelectEvent={handleSelectEvent}
                view={view}
                onView={(newView) => setView(newView)}
            />
        </div>
    );
};

export default CalendarView;
