import React from 'react';
import { useState } from 'react';
import { startOfMonth, endOfMonth, differenceInDays } from 'date-fns'
import '../styles/Calendar.scss';

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Calendar = () => {

  const [today, setToday] = useState(new Date());
  const startDate = startOfMonth(new Date());
  const endDate = endOfMonth(new Date());
  const numDays = (differenceInDays(endDate, startDate) + 1);

  return (
    <div className='calendar'>
      <div className="calendar_nav">
        <div className="calendar_cell skip">{'<<'}</div>
        <div className="calendar_cell skip">{'<'}</div>
        <div className='calendar_cell date'>October 2022</div>
        <div className="calendar_cell skip">{'>'}</div>
        <div className="calendar_cell skip">{'>>'}</div>
        {daysOfWeek.map((day) =>(
          <div key={day} className="calendar_cell dayName">{day}</div>
        ))}
        {
          Array.from({length: numDays}).map((_, index) => (
            <div key={index} className="calendar_cell">{index + 1}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Calendar