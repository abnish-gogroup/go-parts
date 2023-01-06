import React, { useEffect, useState } from 'react';
import '../../../stylesheets/partsSelection.scss';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import PartsOverviewTabCard from './ParrtsOverviewTabCard';

function PartsOrderOverviewTab(props){
  const { expanded } = props; 
  const [showProfileDD, setShowProfileDD] = useState(false);
 
  useEffect(() => { 
    $(document).ready(function () {
      // $('.accordion-list-parts-selection > li > .parts_answer').hide();
      $('.accordion-list-parts-selection > li').on('click', function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".parts_answer").slideUp();
        } else {
          $(".accordion-list-parts-selection > li.active .parts_answer").slideUp();
          $(".accordion-list-parts-selection > li.active").removeClass("active");
          $(this).addClass("active").find(".parts_answer").slideDown();
        }
        return false;
      });
    });
  }, [])

  const goToCheckoutPage =()=>{
    window.history.pushState({}, '', '/checkout');
    window.location.reload();
  }

  return (
    <div className={expanded ? "main_parts_selection_cont pd_240" : "main_parts_selection_cont pdt_20"}>
  <div className="part_number_details">
    <div className="part_no_head theme_bg">
      <div className='w_5'></div>
      <div className='w_5'>#</div>
      <div className='w_20'>TEILE</div>
      <div className='w_20'>DATUM</div>
      <div className='w_25'>LIEFERUNG</div>
      <div className='w_20'>UVP</div>
      <div className='w_17'>PREIS</div>
      <div className='w_17'>ANZAHL</div>
    </div>

    <ul className="accordion-list-parts-selection">
        <li>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_5'>
                <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/green_flag.png' />
              </div>
              <div className='w_20'>Stoßstange vorne</div>
              <div className='w_20'>12/06/22 12:15 </div>
              <div className='w_25 pdl_10'>2 Tage</div>
              <div className='w_20'></div>
              <div className='w_17'>€500,20</div>
              <div className='w_17'></div>
            </div>
          </div>
        </li>

        <li>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_5'>
                <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/green_flag.png' />
              </div>
              <div className='w_20'>Batterie</div>
              <div className='w_20'>12/06/22 12:15 </div>
              <div className='w_25 pdl_10'>2 Tage</div>
              <div className='w_20'></div>
              <div className='w_17'>€492,25</div>
              <div className='w_17'></div>
            </div>
          </div>
        </li>

        <li>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_5'>
                <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/red_flag.png' />
              </div>
              <div className='w_20'>Motorhaube</div>
              <div className='w_20'>10/06/22 12:15</div>
              <div className='w_25 pdl_10'>Hinweis: Lieferung zu lang</div>
              <div className='w_20'></div>
              <div className='w_17'>€510</div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer pdl_30">
            <PartsOverviewTabCard />
          </div>
        </li>

        <li>
          <div className='job_row_cont bdr_1'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_5'>
                <img src='http://static-assets-goparts.s3.amazonaws.com/static-images/green_flag.png' />
              </div>
              <div className='w_20'>LED-Scheinwerfer</div>
              <div className='w_20'>12/06/22 12:15</div>
              <div className='w_25 pdl_10'>2 Tage</div>
              <div className='w_20'></div>
              <div className='w_17'>€492,25</div>
              <div className='w_17'></div>
            </div>
          </div>
        </li>

      </ul>

  </div>
</div>
  )
}

export default PartsOrderOverviewTab;
