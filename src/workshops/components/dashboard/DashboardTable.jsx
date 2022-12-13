import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../../stylesheets/dashboardDropdown.scss';
import '../../../stylesheets/dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowDownUpAcrossLine, faSearch } from '@fortawesome/free-solid-svg-icons';
import DashboardTableCard from './DashboardTableCard';

export default function DashboardTable(props) {
  const { jobId, partName, model, numberPlate, numberOfParts, completion, name, title } = props;

  useEffect(() => {
    $(document).ready(function () {
      $('.accordion-list-jobs > li > .answer1').hide();
      // $(this).addClass("active").find(".answer1").slideDown();
      $('.accordion-list-jobs > li').on('click', function () {

        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".answer1").slideUp();
          console.log('$(this) in if', this);
        } else {
          $(".accordion-list-jobs > li.active .answer1").slideUp();
          $(".accordion-list-jobs > li.active").removeClass("active");
          $(this).addClass("active").find(".answer1").slideDown();
          console.log('$(this) in else', this);
        }
        return false;
      });
    });
  }, [])

  return (
    <>
      <ul className="accordion-list-jobs">
        <li>
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
                <div className="circle" id='angleDown'>
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
          <div className="answer1">
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
        <li>
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
            <div className="answer1">
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
