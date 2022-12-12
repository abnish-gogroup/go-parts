import React from 'react';

function ReportAProblemBox() {

  return (
    <>
      <div className='order_no_cont'>
        <div className='order_no_text fs_30'>
          Bestellung # 91210
        </div>
        <div className='job_item_no fw_400 fs_14'>Job: Frontschaden -Stoßstange<span className='theme_clr'>(ID 301)</span></div>
      </div>
      <div className='report_a_prob_cont'>
        <div className='order_from_cont fs_14 fw_600'>
          <div>Bestellung vom</div>
          <div className=''>22 Juni</div>
        </div>
        <div className='eta_cont fw_600'>
          <div>ETA</div>
          <div className=''>24 Juni</div>
        </div>
        <div className='total_price_cont fw_600'>
          <div>Total Preis</div>
          <div className=''>€852</div>
        </div>
        <div className='delivery_addr_cont'>
          <div className='fw_600'>Lieferadresse:</div>
          <div className='fw_400'>Güntzelstrasse 18, Gilzem, Rheinland-Pfalz(RP), 54298</div>
        </div>
        <div className='report_a_prob_text'>
          Melde ein Problem
        </div>
      </div>
    </>
  )
}

export default ReportAProblemBox;
