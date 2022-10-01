import React from 'react'
import Gabinet from './Gabinet'

const Calendar = () => {
  return (
    <div className='calendar_main'>
      <h1 className="date">DATA</h1>
      <div className="gabinetsContainer">
        <Gabinet gabinetName={'Gabinet 1'} />
      </div>
    </div>
  )
}

export default Calendar