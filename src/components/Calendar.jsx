import React from 'react'

import '../styles/Calendar.scss';

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Calendar = () => {
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
        <div className="calendar_cell">1</div>
        <div className="calendar_cell">2</div>
        <div className="calendar_cell">3</div>
        <div className="calendar_cell">4</div>
        <div className="calendar_cell">5</div>
        <div className="calendar_cell">6</div>
        <div className="calendar_cell">7</div>
        <div className="calendar_cell">8</div>
        <div className="calendar_cell">9</div>
        <div className="calendar_cell">10</div>
        <div className="calendar_cell">11</div>
        <div className="calendar_cell">12</div>
        <div className="calendar_cell">13</div>
        <div className="calendar_cell">14</div>
        <div className="calendar_cell">15</div>
        <div className="calendar_cell">16</div>
        <div className="calendar_cell">17</div>
        <div className="calendar_cell">18</div>
        <div className="calendar_cell">19</div>
        <div className="calendar_cell">20</div>
        <div className="calendar_cell">21</div>
        <div className="calendar_cell">22</div>
        <div className="calendar_cell">23</div>
        <div className="calendar_cell">24</div>
        <div className="calendar_cell">25</div>
        <div className="calendar_cell">26</div>
        <div className="calendar_cell">27</div>
        <div className="calendar_cell">28</div>
        <div className="calendar_cell">29</div>
        <div className="calendar_cell">30</div>
        <div className="calendar_cell">31</div>
      </div>
    </div>
  )
}

export default Calendar