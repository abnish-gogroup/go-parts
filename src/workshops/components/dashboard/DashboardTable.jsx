import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../../stylesheets/dashboardDropdown.scss';
import '../../../stylesheets/dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowDownUpAcrossLine, faSearch } from '@fortawesome/free-solid-svg-icons';
import DashboardTableCard from './DashboardTableCard';

export default function DashboardTable(props) {
  const { jobId, partName, model, numberPlate, numberOfParts, completion, name, title } = props;

  // useEffect(() => {
	// 	$(document).ready(function () {
	// 		$('.accordion-list-jobs > li > .answerDD').hide();
	// 		// $(this).addClass("active").find(".answerDD").slideDown();
	// 		$('.accordion-list-jobs > li').click(function () {
	// 			if ($(this).hasClass("active")) {
	// 				$(this).removeClass("active").find(".answerDD").slideUp();
	// 			} else {
	// 				$(".accordion-list-jobs > li.active").removeClass("active").slideUp();
	// 				$(this).addClass("active").find(".answerDD").slideDown();
	// 			}
  //       $(".accordion-list-jobs > li.active .answerDD").slideUp();
	// 			return false;
	// 		});
	// 	});
	// }, [])

  useEffect(()=>{
    $(document).ready(function(){
      $('li.accordion_list .answerDD').slideUp();
       $(document).on('click','li.accordion_list #dbAngleDown',function(e){
         e.preventDefault();
         const thddis = $(this);
         $('li.accordion_list dbAngleDown').removeClass('active');
         thddis.addClass('active');
         $('li.accordion_list dbAngleDown').parent().find('.answerDD').slideUp();
         thddis.parent().find('.answerDD').slideDown();
       });
    });
  },[])

  // useEffect(() => {
  //   $(document).ready(function () {
  //     $('.accordion-list-jobs > li > .answerDD').hide();
  //     // $(this).addClass("active").find(".answerDD").slideDown();
  //     $('#angleDown').on('click', function () {
  //       if ($('.accordion-list-jobs > li').hasClass("active")) {
  //         $('.accordion-list-jobs > li').removeClass("active").find(".answerDD").slideUp();
  //         // console.log('$(this) in if', this);
  //       } else {
  //         $("#angleDown .active li > .answerDD").slideUp();
  //         $("#angleDown .active").removeClass("active");
  //         $('.accordion-list-jobs > li').addClass("active").find(".answerDD").slideDown();
  //         // console.log('$(this) in else', this);
  //       }
  //       return true;
  //     });
  //   });
  // }, [])

  return (
    <>
      <ul className="accordion-list-jobs">
        <li className='accordion_list'>
          <div className='dashboard_table_head'>
            <div className='w_5'></div>
            <div className='w_7'>ID</div>
            <div className='w_25'>JOB</div>
            <div className='w_17'>Marke / MODEL</div>
            <div className='w_14'>NUMMERNSCHILD</div>
            <div className='w_15'>Anzahl der Teile</div>
            <div className='w_15'>Fertigstellung</div>
          </div>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='dbAngleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_7'>24122</div>
              <div className='w_25'>Front Schaden - Stoßstange </div>
              <div className='w_17'>Porsche / Macan S</div>
              <div className='w_14'>A-PO 1499</div>
              <div className='w_15'>5</div>
              <div className='w_15'>12/10/22</div>
            </div>
          </div>
          <div className="answerDD">
            <DashboardTableCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
            <DashboardTableCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
          </div>
        </li>
      </ul>

      <ul className="accordion-list-jobs">
        <li className='accordion_list'>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle">
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_7'>24592</div>
              <div className='w_25'>Schaden an der Hinterachse</div>
              <div className='w_17'>VW/T-Roc</div>
              <div className='w_14'>S-EA 1334</div>
              <div className='w_15'>4</div>
              <div className='w_15'>15/10/22</div>
            </div>
            <div className="answerDD">
              <DashboardTableCard
                jobId='24592'
                jobs='Schaden an der Hinterachse'
                model='VW/T-Roc'
                licencePlateId='S-EA 1334'
                noOfParts='4'
                completionDate='15/10/2022'
              />
              <DashboardTableCard
                jobId='24592'
                jobs='Schaden an der Hinterachse'
                model='VW/T-Roc'
                licencePlateId='S-EA 1334'
                noOfParts='4'
                completionDate='15/10/2022'
              />
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}
