import React, { useEffect } from 'react';
import DashboardDropdown from './DashboardDropdown';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowDownUpAcrossLine, faSearch } from '@fortawesome/free-solid-svg-icons';
import DropdownCard from './DropdownCard';

export default function DashboardTable() {

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

  return (
    <table className="table">
      <thead className='table_head_clr'>
        <tr>
          <th scope="col"></th>
          <th scope="col">id</th>
          <th scope="col">JOBS</th>
          <th scope="col">Marke / MODEL</th>
          <th scope="col">NUMMERNSCHILD</th>
          <th scope="col">Anzahl der Teile</th>
          <th scope="col">Fertigstellung</th>
        </tr>
      </thead>
      <tbody className='dashboard_t_body'>

        <tr>
          <ul className="accordion-list-jobs">
            <li>
              <div className='job_row_class'>
                <div className="circle" id='angleDown'>
                  <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
                </div>
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

          <td><div className='job_category'>24122</div></td>
          <td><div className='licence_plate'>Front Schaden - Stoßstange </div></td>
          <td><div className='completion_date'>Porsche / Macan S</div></td>
          <td><div>A-PO 1499</div></td>
          <td>5</td>
          <td>12/10/22</td>
        </tr>
        <tr>
          {/* <DashboardDropdown /> */}
        </tr>
      </tbody>
    </table>
  )
}
