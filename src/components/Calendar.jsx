import React from 'react'
import Gabinet from './Gabinet'

import '../styles/Calendar.scss';

const Calendar = () => {
  return (
    <div className='calendar'>
      <h1 className="date">DATA</h1>
      <div className="gabinetsContainer">
        <Gabinet gabinetName={'Gabinet 1'} />
      </div>
    </div>
  )
}

export default Calendar