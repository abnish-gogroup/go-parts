import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import PartsSelectionCard from '../../../workshops/components/partsSelection/PartsSelectionCard';

function InvoiceDashboardTable(props) {
  const {  orderNo, caseNo, workshop, partDealer, currentStatus, process, date } = props;
  
  // useEffect(() => {
  //   $(document).ready(function () {
  //     $('.accordion-list-parts-selection > li > .parts_answer').hide();
  //     $('.accordion-list-parts-selection > li').on('click', function () {
  //       if ($(this).hasClass("active")) {
  //         $(this).removeClass("active").find(".parts_answer").slideUp();
  //       } else {
  //         $(".accordion-list-parts-selection > li.active .parts_answer").slideUp();
  //         $(".accordion-list-parts-selection > li.active").removeClass("active");
  //         $(this).addClass("active").find(".parts_answer").slideDown();
  //       }
  //       return false;
  //     });
  //   });
  // }, [])


  return ( 
    <>
    {/* <ul className="accordion-list-parts-selection"> */}
      {/* <li> */}
          <div className='job_row_cont h_50'>
            <div className='job_row_class pt_5'>
            <div className='w_5'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_15'>{orderNo}</div>
              <div className='w_15'>{caseNo} </div>
              <div className='w_17'>{workshop}</div>
              <div className='w_25'>{partDealer}</div>
              <div className='w_15'>{currentStatus}</div>
              <div className='w_17'>{process}</div>
              <div className='w_15'>{date}</div>
            </div>
          </div>
          {/* <div className="parts_answer">
            <PartsSelectionCard />
          </div> */}
          {/* </li> */}
          {/* </ul> */}
      </>
  )
}

export default InvoiceDashboardTable;
