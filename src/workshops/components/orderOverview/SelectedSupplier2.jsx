import React, { useState } from 'react';
import '../../../stylesheets/checkout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import SelectedSupplierCard from './SelectedSupplierCard';

function SelectedSupplier2(props) {
  const { supplierName, supplierAddress, supplierEmail, radioBtnName, radioBtnTime } = props;
  const [startDate, setStartDate] = useState(null);
  return (
    <div className='supplier_cont'>
      <div className="supplier_card">
        <div className="supplier_txt">{supplierName}</div>
        <div className="address_details_cont_selected">
          <div className="w_330">
            <div className="col_262626">Contact</div>
            <div className="pt_10 fb_1">
              {supplierAddress}
              <br></br>
              <span className='supp_email'>{supplierEmail}</span>
            </div>
          </div>
          <div className="w_40">
            <div className="col_262626">
              Lieferung
            </div>
            <div className="pt_10">
              <div>So schnell wie möglich</div>
              <div><FontAwesomeIcon icon={faCheckDouble} className='theme_clr pdr_10' /> Bestellung vom Lieferanten bestätigt</div>
            </div>
          </div>
          <div className="col_262626 p_left fs_14 w_20">
            Comment to Supplier(Optional)
            <div className='clr_6e7178 fs_14 fw_400'>Vielen Dank im Voraus!</div>
          </div>
        </div>
      </div>
      <div className="supplier_card">
        <div className="table_card">
          <div className="supp_table_head d_flex pad_10">
            <div className="cell_part bg_tran">Teilenummer</div>
            <div className="cell_mfg bg_tran">Hersteller</div>
            <div className="cell_desc bg_tran">Beschreibung</div>
            <div className="cell_10 bg_tran">Teile-TYPE</div>
            <div className="cell_10 bg_tran">Lieferung</div>
            <div className="cell_8 bg_tran">Anzahl</div>
            <div className="cell_15 bg_tran">Werkstatt marge</div>
            <div className="cell_10 bg_tran">Marge %</div>
            <div className="cell_15 bg_tran">Liefer-Preis</div>
            <div className="cell_del_price bg_tran">Preis</div>
          </div>

          <SelectedSupplierCard
            partNo='4592-192-3'
            manufacturer='Hella'
            description='Frontscheinwerfer'
            partType='OES'
            delivery='2 Tage'
            qty='1'
            w_margin='€60'
            margin='20%'
            deliveryPrice='€0'
            totalPrice='€240' />

          <SelectedSupplierCard
            partNo='B2302941'
            manufacturer='Bosch'
            description='Kotflügel vorne rechts'
            partType='OES'
            delivery='2 Tage'
            qty='1'
            w_margin='€50'
            margin='20%'
            deliveryPrice='€0'
            totalPrice='€200' />
        </div>
      </div>
    </div>
  )
}

export default SelectedSupplier2;
