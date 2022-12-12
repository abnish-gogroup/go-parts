import React from 'react';
import '../../../stylesheets/thankYou.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function ThankYouOrder() {

  const goToOrderOverview = () => {
    window.history.pushState({}, '', './order-overview');
    window.location.reload();
  }

  // const handleViewSpecificOrder = () => {
  //   console.log('specific order')
  // }

  return (
    <div className='main_container_thank_you'>
      <div className="thank_you_card">
        <div className="thank_order_text">
          <FontAwesomeIcon icon={faCircleCheck} className='icon_check' />
          <div className="thank_you_text ts_18">VIELEN DANK FÜR IHRE BESTELLUNG</div>
          <div className="grey_txt fs_16">BESTELLUNG #91210</div>
        </div>
        <div className="order_delivery">
          <div className="display_flex">
            <div className="grey_txt fs_16">
              Arriving
            </div>
            <div className="theme_color fs_14">
              Tuesday, 28 June
            </div>
          </div>

          <div className="display_flex">
            <div className="grey_txt fs_16">Your Order will be delivered to</div>
            <div className='fs_14'>Güntzelstrasse 18, Gilzem, Rheinland-Pfalz(RP), 54298</div>
          </div>
        </div>
        <div>
          <div className="thank_you_text fos_18 pd_bottom">Order Summary</div>
          <div className='hz_line'></div>
          <div className='fs_16 pd_top'>4 Teile von 2 Lieferanten</div>
          <div className="supplier_details fs_14">
            <div className="supp_desc">
              <div className="grey_txt w_200">Efa Autowelt<span className='flr'>(2 Teile)</span></div>
              <div>€ 412</div>
            </div>
            <div className="supp_desc">
              <div className="grey_txt w_200">OTS<span className='flr'>(2 Teile)</span></div>
              <div>€ 400</div>
            </div>

            <div className='hz_line'></div>
            <div className="supp_desc">
              <div></div>
              <div>Delivery <span className='pdl_40'> € 35</span></div>
            </div>
            <div className="supp_desc">
              <div></div>
              <div>Order Total<span className='pdl_40'>€ 2035</span></div>
            </div>
          </div>
          <div className='hz_line'></div>
          <div className='disp_flex'>
            <div className="view_order_details pd_20 fs_14 mr_40" onClick={goToOrderOverview}>
              View Order Details
            </div>
            {/* <div className="view_order_details pd_20 fs_14" onClick={handleViewSpecificOrder}>
              View Specific Order
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouOrder;
