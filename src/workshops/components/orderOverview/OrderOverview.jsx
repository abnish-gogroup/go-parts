import React from 'react';
import '../../../stylesheets/checkout.scss';
import SelectedSupplier1 from './SelectedSupplier1';
import SelectedSupplier2 from './SelectedSupplier2';
import ReportAProblemBox from './ReportAProblemBox';

function OrderOverview() {

  return (
    <div className='main_container_checkout'>
      <ReportAProblemBox />
      <SelectedSupplier1 supplierName='EFA Dresden' supplierAddress='Gotthardstrasse 99 Dresden, Sachsen, 01108 02692 76 51 12' supplierEmail='teile@efa-dresdem.de' />
      <SelectedSupplier2 supplierName='OTS Rodgau' supplierAddress='August Schanz Straße  12 Rodgau, Hessen , 60934 06112 76 51 12' supplierEmail='email@ots.de' />
    </div>
  )
}

export default OrderOverview;
