import React from 'react'

import '../styles/Calendar.scss';

const Calendar = () => {
  return (
    <div className='calendar'>
      <div className="calendar_nav">
        <div className="calendar_navBtn">{'<<'}</div>
        <div className="calendar_navBtn">{'<'}</div>
        <div className='calendar_navBtn date'>October 2022</div>
        <div className="calendar_navBtn">{'>'}</div>
        <div className="calendar_navBtn">{'>>'}</div>
        <div className="calendar_navBtn">{'MON'}</div>
        <div className="calendar_navBtn">{'TUE'}</div>
        <div className="calendar_navBtn">{'WED'}</div>
        <div className="calendar_navBtn">{'THU'}</div>
        <div className="calendar_navBtn">{'FRI'}</div>
        <div className="calendar_navBtn">{'SAT'}</div>
        <div className="calendar_navBtn">{'SUN'}</div>
      </div>
      

    </div>
  )
}

export default Calendar