import React from 'react';
import { Calendar } from 'primereact/calendar';


function FormCalendar({
    id,
    placeholder,
    value,
    className,
    maxDate,
    showTime,
    showSeconds,
    onChange,
    hourFormat,
    disabled,
    locale,
    minDate,
    hideOnDateTimeSelect,
}) {
    return (
        <>
            <Calendar
                id={id}
                placeholder={placeholder}
                value={value}
                className={`form-control calendar-date col-lg-12 ${className}`}
                maxDate={maxDate}
                disabled={disabled}
                onChange={onChange}
                minDate={minDate}
                showTime={showTime}
                showSeconds={showSeconds}
                hourFormat={hourFormat}
                locale={locale}
                hideOnDateTimeSelect={hideOnDateTimeSelect}
            />
        </>
    );
}

export default FormCalendar;
