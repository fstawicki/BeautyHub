import React from 'react';
import { useState } from 'react';
import { startOfMonth, endOfMonth, differenceInDays, subMonths, addMonths } from 'date-fns'
import '../styles/Calendar.scss';
import { useEffect } from 'react';

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = () => {

  const [today, setToday] = useState(new Date());

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(startOfMonth(date));
  const [navDateMonth, setNavDateMonth] = useState(months[date.getMonth()]);
  const [navDateYear, setNavDateYear] = useState(date.getFullYear());
  const [endDate, setEndDate] = useState(endOfMonth(date));
  const [numDays, setNumDays] = useState((differenceInDays(endDate, startDate) + 1));

  const [prefixDays, setPrefixDays] = useState(startDate.getDay() - 1);
  // minus one adapts function for mon - sun calendar instead of sun - sat
  const [sufixDays, setSufixDays] = useState(7 - endDate.getDay());

  const goToPrevMonth = () => {
    setDate(subMonths(date, 1));
    setStartDate(startOfMonth(date));
    setNavDateMonth(months[date.getMonth()]);
    setNavDateYear(date.getFullYear());
    setEndDate(endOfMonth(date));
    setNumDays((differenceInDays(endDate, startDate) + 1));
    setPrefixDays(startDate.getDay() - 1);
    setSufixDays(7 - endDate.getDay());

    console.log(date)
    console.log(startDate)

  }

  const goToNextMonth = () => {
    setStartDate(addMonths(startDate,1));
    console.log(startDate)
  }

  console.log(date)
  return (
    <div className='calendar'>
      <div className="calendar_nav">
        <div className="calendar_cell skip">{''}</div>
        <div onClick={goToPrevMonth} className="calendar_cell skip">{'<'}</div>
        <div className='calendar_cell date'>{navDateMonth} {navDateYear}</div>
        <div onClick={goToNextMonth} className="calendar_cell skip">{'>'}</div>
        <div className="calendar_cell skip">{''}</div>

        {daysOfWeek.map((day) =>(
          <div key={day} className="calendar_cell dayName">{day}</div>
        ))}

        {Array.from({length: prefixDays}).map((_, index) => (
          <div key={index} className="calendar_cell" />
        ))}

        {Array.from({length: numDays}).map((_, index) => (
            <div key={index} className="calendar_cell">{index + 1}</div>
        ))}

        {Array.from({length: sufixDays}).map((_, index) => (
          <div key={index} className="calendar_cell" />
        ))}

      </div>
    </div>
  )
}

export default Calendar