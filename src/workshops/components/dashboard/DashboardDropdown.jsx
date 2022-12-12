import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowDownUpAcrossLine, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../../stylesheets/dashboardDropdown.scss';
import DropdownCard from './DropdownCard';
import $ from 'jquery';

function DashboardDropdown() {
	const location = window.location.pathname;
	const [hideCompletedJob, setHideCompletedJob] = useState(false);
	useEffect(() => {
		$(document).ready(function () {
			$('.accordion-list-jobs > li > .answer1').hide();
			$(this).addClass("active").find(".answer1").slideDown();
			$('.accordion-list-jobs > li').click(function () {
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").find(".answer1").slideUp();
				} else {
					$(".accordion-list-jobs > li.active .answer1").slideUp();
					$(".accordion-list-jobs > li.active").removeClass("active");
					$(this).addClass("active").find(".answer1").slideDown();
				}
				return false;
			});
		});
	}, [])

	const goToCreateANewJob = () => {
		window.history.pushState({}, '', '/create-a-job');
		window.location.reload();
	}

	const handleChange = () => {
		console.log('all jobs....');
	}

	const handleSearch = () => {
		console.log('searching...');
	}

	const handleHideCompletedJob = () => {
		setHideCompletedJob(!hideCompletedJob);
	}

	return (
		<div className='main_container_all_jobs'>

			<ul className="accordion-list-jobs">
				<li>
					<div className='job_row_class'>
						<div className="circle" id='angleDown'>
							<FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
						</div>
						<div className='job_category'>
							24122
						</div>
						<div className='licence_plate'>Front Schaden - Stoßstange </div>
						<div className='completion_date'>Porsche / Macan S</div>
						<div>A-PO 1499</div>
						<div>5</div>
						<div>12/10/22</div>
					</div>
					<div className="answer1">
						<DropdownCard
							jobId='ID: 301'
							partName='Bumper Replacement'
							licencePlateId='A-BC 1234'
							noOfParts='4 Parts'
							completionDate='22 June'
							actionBtnText='Request Quotes'
							isViewBids={false}
						/>
						<DropdownCard
							jobId='ID: 302'
							partName='Rear axle damage'
							licencePlateId='D-RT 2232'
							noOfParts='2 Parts'
							completionDate='24 June'
							actionBtnText='Request Quotes'
							isViewBids={false}
						/>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default DashboardDropdown;
