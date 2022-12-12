import React from 'react';
import '../../../stylesheets/checkout.scss';
import SupplierDetails from './SupplierDetails';
import TopContainer from './TopContainer';

function Checkout() {

  const goToThankYouPage = () => {
    window.history.pushState({}, '', '/thank-you-order');
    window.location.reload();
  }

  return (
    <div className='main_container_checkout'>
      <TopContainer goToThankYouPage={goToThankYouPage} />
      <SupplierDetails supplierName='Supplier 1' supplierAddress='Nora Zentrum Wolfsburg Wolfsburg, Niedersachsen , 3844405361 2041810' supplierEmail='bestellung@atr-erfurt.de' radioBtnName='supp1_delivery' radioBtnTime='time1' />
      <SupplierDetails supplierName='Supplier 2' supplierAddress='Gotthardstrasse 99 Erfurt, Freistaat Thüringen(TH), 99017 02692 76 51 12' supplierEmail='email@supplier.com' radioBtnName='supp2_delivery' radioBtnTime='time2' />
    </div>
  )
}

export default Checkout;
