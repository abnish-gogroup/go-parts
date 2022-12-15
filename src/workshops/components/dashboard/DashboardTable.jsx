import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../../stylesheets/dashboardDropdown.scss';
import '../../../stylesheets/dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import DashboardTableCard from './DashboardTableCard';

export default function DashboardTable(props) {
  const { jobId, partName, model, numberPlate, numberOfParts, completion, name, title } = props;

  useEffect(() => {
    $(document).ready(function () {
      $('.accordion-list-dashboard > li > .dashboard_answer').hide();
      // $(this).addClass("active").find(".dashboard_answer").slideDown();
      $('.accordion-list-dashboard > li').on('click', function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".dashboard_answer").slideUp();
        } else {
          $(".accordion-list-dashboard > li.active .dashboard_answer").slideUp();
          $(".accordion-list-dashboard > li.active").removeClass("active");
          $(this).addClass("active").find(".dashboard_answer").slideDown();
        }
        return false;
      });
    });
  }, [])

  return ( 
    <>
    <div className='dashboard_table_head'>
            <div className='w_5'></div>
            <div className='w_10'>ID</div>
            <div className='w_25'>JOB</div>
            <div className='w_17'>Marke / MODEL</div>
            <div className='w_14'>NUMMERNSCHILD</div>
            <div className='w_15'>Anzahl der Teile</div>
            <div className='w_15'>Fertigstellung</div>
          </div>
      <ul className="accordion-list-dashboard mrl_30">
        <li>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle" id='dbAngleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_10'>24122 <FontAwesomeIcon icon={faPaperclip} className='pdl_10' /></div>
              <div className='w_25'>Front Schaden - Stoßstange </div>
              <div className='w_17'>Porsche / Macan S</div>
              <div className='w_14 clr_8692A6'>A-PO 1499</div>
              <div className='w_15 clr_8692A6'>5</div>
              <div className='w_15'>12/10/22</div>
            </div>
          </div>
          <div className="dashboard_answer">
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

        <li className='pdt_0'>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_5'>
                <div className="circle">
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
              </div>
              <div className='w_10'>24592 <FontAwesomeIcon icon={faPaperclip} className='pdl_10' /></div>
              <div className='w_25'>Schaden an der Hinterachse</div>
              <div className='w_17'>VW/T-Roc</div>
              <div className='w_14 clr_8692A6'>S-EA 1334</div>
              <div className='w_15 clr_8692A6'>4</div>
              <div className='w_15'>15/10/22</div>
            </div>
            <div className="dashboard_answer wm_10"> 
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
