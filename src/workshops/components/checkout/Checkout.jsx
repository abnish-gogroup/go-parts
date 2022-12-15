import React from 'react';
import '../../../stylesheets/checkout.scss';
import SupplierDetails1 from './SupplierDetails1';
import SupplierDetails2 from './SupplerDetails2';
import TopContainer from './TopContainer';

function Checkout(props) {
  const { expanded } = props;
  const goToThankYouPage = () => {
    window.history.pushState({}, '', '/thank-you-order');
    window.location.reload();
  }

  return (
    <div className={expanded ? 'main_container_checkout pd_240' : 'main_container_checkout pd_140'}>
      <TopContainer goToThankYouPage={goToThankYouPage} />
      <SupplierDetails1 supplierName='Nora Zentrum Wolfsburg' supplierAddress='Nora Zentrum Wolfsburg Wolfsburg, Niedersachsen , 3844405361 2041810' supplierEmail='bestellung@atr-erfurt.de' radioBtnName='supp1_delivery' radioBtnTime='time1' />
      <SupplierDetails2 supplierName='Brass Teilevertriebs gmBh' supplierAddress='Gotthardstrasse 99 Erfurt, Freistaat Thüringen(TH), 99017 02692 76 51 12' supplierEmail='email@supplier.com' radioBtnName='supp2_delivery' radioBtnTime='time2' />
    </div>
  )
}

export default Checkout;
