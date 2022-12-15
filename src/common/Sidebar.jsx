import React, { useState } from 'react';
import '../stylesheets/sidebar.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDashboard, faGear, faList, faBell } from '@fortawesome/free-solid-svg-icons';
import Header from '../common/Header';

function Sidebar(props) {
	const { expanded, handleToggleSidebar } = props;

	const goToDashboard = () => {
		window.history.pushState({}, '', '/all-jobs');
		window.location.reload();
	}

	const goToCreateAJob = () => {
		window.history.pushState({}, '', '/create-a-job');
		window.location.reload();
	}

	const goToAllJob = () => {
		window.history.pushState({}, '', '/setting');
		window.location.reload();
	}

	const goToAllOrders = () => {
		window.history.pushState({}, '', '/all-orders');
		window.location.reload();
	}

	return (
		<div>
			<Header /> 
			<div className={expanded ? 'main_side_bar' : 'w_50'} id='main_side_bar'>
				<nav className='navbar navbar-default' role='navigation'>
					<div className='navbar-header'>
						<FontAwesomeIcon icon={faBars} className="icon" id='collapse_expand_btn' onClick={handleToggleSidebar} />
					</div>
					<div className='side-menu-container'>
						<ul className='nav navbar-nav'>
							<li className="menu-item" onClick={goToDashboard}><FontAwesomeIcon icon={faDashboard} className='icon' />Dashboard</li>
							<li className="menu-item" onClick={goToAllOrders}><FontAwesomeIcon icon={faList} className='icon' />Aufträge</li>
							<li className="menu-item" onClick={goToAllOrders}><FontAwesomeIcon icon={faGear} className='icon' /> Einstellungen</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Sidebar;
