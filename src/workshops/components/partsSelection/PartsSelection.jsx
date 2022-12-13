import React, { useEffect, useState } from 'react';
import '../../../stylesheets/partsSelection.scss';
import $ from 'jquery';
import PartsSelectionCard from './PartsSelectionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import PartsSelectionCardExpand from './PartsSelectionCardExpand';

function PartsSelection(){
  const [showProfileDD, setShowProfileDD] = useState(false);
 
  useEffect(() => {
    $(document).ready(function () {
      $('.accordion-list-parts-selection > li > .parts_answer').hide();
      // $(this).addClass("active").find(".parts_answer").slideDown();
      $('.accordion-list-parts-selection > li').on('click', function () {

        if ($(this).hasClass("active")) {
          $(this).removeClass("active").find(".parts_answer").slideUp();
          console.log('$(this) in if', this);
        } else {
          $(".accordion-list-parts-selection > li.active .parts_answer").slideUp();
          $(".accordion-list-parts-selection > li.active").removeClass("active");
          $(this).addClass("active").find(".parts_answer").slideDown();
          console.log('$(this) in else', this);
        }
        return false;
      });
    });
  }, [])

  const handleHideDD=()=>{
    setShowProfileDD(true);
  }

  return (
    <div className="main_parts_selection_cont">
  <div className="parts_selection_text_cont">
    <div className="parts_selection_text fs_30">Angebotsauswahl</div>
    <button className="parts_order_btn">Bestellen</button>
  </div>
  <div className="parts_selection_desc">
    <div className="parts_selection_desc_text">Front Schaden - Auffahrunfall</div>
    <div className="selected_parts_desc">
      <div className="selected_parts_model">
        <div className='fw_400'>Model: <span className="model_name">E 350 CDI </span></div>
        <div className='fw_400'>Kunde: <span  className="cust_name">Philip Janßen </span></div>
        <div className='fw_400'>Nummernschild:<span className="number_plate">F-TC 154</span></div>
      </div>
      <div className="parts_selection_date">
      <div className='fw_400'>Start Datum: <span className="start_date">29.09.2022</span></div>
      <div className='fw_400'>Fertigstellung:: <span className="end_date">14.10.2022</span></div>
    </div>
    <img src="http://static-assets-goparts.s3.amazonaws.com/static-images/Parts%20Selection/add-a-photo.png" className="placeholder_img" />
    </div>
  </div>
  <div className="part_number_details">
    <div className="part_no_head">
      <div className='w_5'></div>
      <div className='w_15'>Teilenummer</div>
      <div className='w_25'>Beschreibung</div>
      <div className='w_17'>Hersteller</div>
      <div className='w_20'>Vorgeschlagen Durch: </div>
      <div className='dropdown w_17'>
          <div className='dropbtn cp' onClick={handleHideDD}>Günstigster Preis <FontAwesomeIcon icon={faAngleDown} /></div>
          <div className={showProfileDD ? 'dropdown-content' : 'dn'} >
              <div className='ddc cp'>
              <FontAwesomeIcon icon={faCheck} /><span className='pdl_5'> Günstigster Preis</span>
              </div>
              <div className='ddc cp pdl_35'>
              Schnellste Lieferung
              </div>
              <div className='ddc cp pdl_35'>
              Bester Preis zur gewünschten Lieferung
              </div>
          </div>
        </div>
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
              <div className='w_15'>6Y0807221E</div>
              <div className='w_25'>Stoßstange Vorne</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer">
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
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
              <div className='w_15'>6Y0853661 739</div>
              <div className='w_25'>Blende Gitter Motorhaube</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer">
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
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
              <div className='w_15'>6Y0853668B</div>
              <div className='w_25'>Gitter Motorhaube</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer">
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
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
              <div className='w_15'>6Y0853678GRU</div>
              <div className='w_25'>Rahmen Gitter Motorhaube</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer">
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
            <PartsSelectionCard
              jobId='24122'
              jobs='Front Schaden - Stoßstange'
              model='Porsche / Macan S'
              licencePlateId='A-BC 1234'
              noOfParts='4'
              completionDate='12/10/2022'
            />
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
              <div className='w_15'>1U0853621C MEL</div>
              <div className='w_25'>Emblem</div>
              <div className='w_17 pdl_10'>Skoda</div>
              <div className='w_20'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_answer">
            <PartsSelectionCardExpand
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

  </div>
</div>
  )
}

export default PartsSelection;
