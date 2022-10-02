import React from 'react';

import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="" alt="" className="logo" />
        <h1 className="appName">BeautyHub</h1>
        <ul>
            <li>Calendar</li>
            <li>Chat</li>
            <li>Users</li>
            <li>Settings</li>
            <li>Logout</li>
        </ul>
    </div>
  )
}

export default Navbar;