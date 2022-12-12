import React, { useState } from 'react';
import '../../../stylesheets/checkout.scss';
import DatePicker from 'react-datepicker';
import { addDays, subDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import SupplierDetailsCard from './SupplierDetailsCard';

function SupplierDetails(props) {
  const { supplierName, supplierAddress, supplierEmail, radioBtnName, radioBtnTime } = props;
  const [startDate, setStartDate] = useState(null);
  return (
    <div className='supplier_cont'>
      <div className="supplier_card">
        <div className="supplier_txt">{supplierName}</div>
        <div className="address_details_cont">
          <div className="w_330">
            <div className="col_262626">Contact</div>
            <div className="pt_10 fb_1">
              {supplierAddress}
              <br></br>
              <span className='supp_email'>{supplierEmail}</span>
            </div>
          </div>
          <div className="w_350">
            <div className="col_262626">
              Lieferung
            </div>
            <div className="pt_10">
              <div className='fs_12'>
                <input name={radioBtnName} type="radio" defaultChecked className='mr_5' />
                <label>ASAP</label>
              </div>
              <div className="delivery_on fs_12">
                <input name={radioBtnName} type="radio" className='mr_5' />
                <label>Delivery On</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className='date_class'
                  includeDateIntervals={[
                    { start: subDays(new Date(), 0), end: addDays(new Date(), 500) },
                  ]}
                  placeholderText='Select date'
                />
                {/* <input type="date" className="date" /> */}
                <span className="time_format">
                  <div>
                    <input name={radioBtnTime} type="radio" defaultChecked className='mr_5' />
                    <label>a.m</label>
                  </div>
                  <div>
                    <input name={radioBtnTime} type="radio" className='mr_5' /><label>p.m</label>
                  </div>
                </span>
              </div>
              <input name={radioBtnName} type="radio" className='mr_5 fs_12' /><label className='fs_12'>Refer to delivery instructions</label>
              <input type='text' className="delivery_inst mrg_left" />
            </div>
          </div>
          <div className="col_262626 p_left fs_14">
            Comment to Supplier(Optional)
            <input type='text' className="delivery_inst mt_5" />
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
            <div className="cell_10 bg_tran">Marge %</div>
            <div className="cell_15 bg_tran">Liefer-Preis</div>
            <div className="cell_del_price bg_tran">Preis</div>
          </div>

          <SupplierDetailsCard />
          <div className="table_data d_flex pad_10 fs_12">
            <div className="cell_part bg_tran col_grey">1001</div>
            <div className="cell_mfg bg_tran col_grey">VW</div>
            <div className="cell_desc bg_tran col_grey">Stoßstange Vorne</div>
            <div className="cell_10 bg_tran col_grey">OEM</div>
            <div className="cell_10 bg_tran col_grey">2 days</div>
            <div className="cell_8 bg_tran">1</div>
            <div className="cell_10 bg_tran">5%</div>
            <div className="cell_15 bg_tran">€5</div>
            <div className="cell_del_price bg_tran">€100</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierDetails;
