import React, { useState } from 'react';
import '../stylesheets/header.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
// import NotificationsCart from '../common/NotificationsCart';


function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleShow = () => {
    setShowNotifications(true);
  }

  return (
    <div>
      <nav className='navbar navbar-fixed-top'>
        <div className='top_navbar'>
          <img src='https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/goparts-logo.png' className='logo' />
        </div>
        <div className='right_navbar'>
          <FontAwesomeIcon icon={faBell} onClick={handleShow}><span className='red_label'></span></FontAwesomeIcon>
          <span className='profile_class'>Welcome Tom</span>
          <select className='logout'>
            <option value='welcome'>Log out</option>
            <option value='profile'>profile</option>
            <option value='setting'>setting</option>
          </select>
        </div>
      </nav>
      {/* {showNotifications ? <NotificationsCart setShowNotifications={setShowNotifications} /> : ''} */}
      {/* <div className='top_border'>
      </div> */}
    </div>
  )
}

export default Header;