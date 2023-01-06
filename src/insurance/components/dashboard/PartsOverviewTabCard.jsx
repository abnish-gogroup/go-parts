import React, { useEffect } from 'react';
import '../../../stylesheets/partsOverviewTab.scss';
import PartsOverviewDescTab from './PartsOverviewDescTab';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

function PartsOverviewTabCard() {

  useEffect(() => { 
    $(document).ready(function () {
      $('.accordion-list-parts-overview-tab > li > .parts_ovr_answer').hide();
      $('.accordion-list-parts-overview-tab > li').on('click', function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".parts_ovr_answer").slideUp();
        } else {
          $(".accordion-list-parts-overview-tab > li.active .parts_ovr_answer").slideUp();
          $(".accordion-list-parts-overview-tab > li.active").removeClass("active");
          $(this).addClass("active").find(".parts_ovr_answer").slideDown();
        }
        return false;
      });
    });
  }, [])

  return (
    <div>
      <ul className="accordion-list-parts-overview-tab">
        <li>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_20'>Angebote</div>
              <div className='w_20'>10/06/22 12:30</div>
              <div className='w_25 pdl_10'>2 Tage</div>
              <div className='w_20'></div>
              <div className='w_17'>€500,20</div>
              <div className='w_17'></div>
            </div>
          </div>
          {/* <div className="parts_ovr_answer">
          <PartsOverviewDescTab />
          </div> */}
        </li>

        <li>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_20'>Angebote</div>
              <div className='w_20'>10/06/22 12:30</div>
              <div className='w_25 pdl_10'>2 Tage</div>
              <div className='w_20'></div>
              <div className='w_17'>€500,20</div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_ovr_answer pdl_10">
          <PartsOverviewDescTab />
          </div>
        </li>
        </ul>
     
    </div>
  )
}

export default PartsOverviewTabCard;
