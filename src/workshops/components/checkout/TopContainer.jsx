import React from 'react';

function TopContainer(props) {

  return (
    <div className='checkout_top_cont'>
      <div className='checkout_txt'>
        Warenkorb
      </div>
      <div className='price_cont'>
        <div className='checkout_price'>
          Price<span className='price_value'>€2035</span>
        </div>
        <button className='checkout_order_btn fs_14' onClick={props.goToThankYouPage}>Teile Bestellen</button>
      </div>
    </div>
  )
}

export default TopContainer;
