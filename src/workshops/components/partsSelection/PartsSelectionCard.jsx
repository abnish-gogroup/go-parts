import React, { useEffect } from 'react';
import '../../../stylesheets/dashboardDropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPaperclip, faBars } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

function PartsSelectionCard(props) {
  const { jobId, jobs, model, licencePlateId, completionDate, noOfParts } = props;

  useEffect(()=>{
    $(function () {
      $('.showChooseText4').show();
      $('.showChooseText5').hide();
  
      $("input[name=parts_2_selection]:radio").on('click', function (e) {
          if ($('input[name=parts_selection]:checked').val() === "rd_4") {
            e.stopPropagation();
            $('.showChooseText4').show();
            $('.showChooseText5').hide();
  
          } else if ($('input[name=parts_2_selection]:checked').val() === "rd_5") {
            e.stopPropagation();
            $('.showChooseText4').hide();
            $('.showChooseText5').show();
          }
      });
  });
  },[])

  return (
    <div className='parts_expand_cont'>
      <div className='parts_expand_cont_head'>
      <div className='w_5'></div>
        <div className='w_25'>Lieferant</div>
        <div className='w_14'>Lieferzeit</div>
        <div className='w_7'>Typ</div>
        <div className='w_7'>UVP</div>
        <div className='w_10'>Rabatt</div>
        <div className='w_10'>Angebot</div>
        <div className='w_12'>Lieferkosten</div>
        <div className='w_7'></div>
      </div>
      <div className='parts_bidding_desc'>
        <div className='w_5'></div>
        <div className='w_25'>NORA ZENTRUM Wolfsburg</div>
        <div className='w_14'>2 Tage</div>
        <div className='w_7'>OEM</div>
        <div className='w_7'>€12.25</div>
        <div className='w_10'>9%</div>
        <div className='w_10'>€11.2</div>
        <div className='w_12'>€0</div>
        <div className='w_5 radio_content'><input name='parts_2_selection' type='radio' value='rd_4' defaultChecked /><label className='pdl_10 showChooseText4'>Auswählen</label></div>
      </div>

      <div className='parts_bidding_desc'>
        <div className='w_5'></div>
        <div className='w_25'>Brass Gruppe</div>
        <div className='w_14'>2 Tag</div>
        <div className='w_7'>OEM</div>
        <div className='w_7'>€12.25</div>
        <div className='w_10'>15%</div>
        <div className='w_10'>€10.41</div>
        <div className='w_12'>€0</div>
        <div className='w_5 radio_content'><input name='parts_2_selection' type='radio'  value='rd_5' /><label className='pdl_10 showChooseText5'>Auswählen</label></div>
      </div>
    </div>
  )
}

export default PartsSelectionCard;
