import React, { useState } from 'react';
import '../../../stylesheets/partsChecker.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import PartsResultTable from './PartsResultTable';

function PartsChecker() { 
  const [showResultTable, setShowResultTable] = useState(false);
  const handleCheckAllParts=()=>{
    setShowResultTable(!showResultTable);
    // window.history.pushState({}, '', '/parts-checker');
    // window.location.reload();
  }

  return (
    <div className="parts_checker_result_cont">
      <div className="parts_checker_text fs_30"> Parts Checker</div>
      <div className="parts_checker_card">
        <div className="parts_name fw_600 ls_7">Frontschaden - Stosßfänger vorne</div>
        <div className="parts_c_desc">
          <div className="parts_c_model">
            <div className='fs_12'>Model: <span className="model_name">E 350 CDI </span></div>
            <div className='fs_12'>Kunde: <span className="cust_name">Philip Janßen </span></div>
            <div className='fs_12'>Nummernschild:<span className="number_plate_c">F-TC 154</span></div>
          </div>
          <div className="parts_c_date">
            <div className='fs_12'>Start Datum: <span className="start_date">29.09.2022</span></div>
            <div className='fs_12'>Fertigstellung: <span className="end_date_c">14.10.2022</span></div>
            <div className='fs_12'>Auftragsnummer: <input className='order_input' /></div>
          </div>
        </div>
        <div className="file_readable_data">
          <div className="file_name fs_14"><FontAwesomeIcon icon={faFile} className='pdr_10' />estimate.pdf</div>
          <div className="cb_262626 fw_600 fs_14">Identifizierte FIN: <span className="clr_8692A6 pdl_10 fw_400">TMBJY16Y264555064</span></div>
          <div className="cb_262626 fw_600 fs_14">Identifizierte Marke: <span className="clr_8692A6 pdl_10 fw_400 fs_14">SKODA</span></div>
          <div className="oe_numbers_cont"><span className='cb_262626 fw_600 pdr_10 fs_14'>OE Nummern:</span>
            <div>6Y0807221E</div>
            <div>6Y0853661 739</div>
            <div>6Y0853668B</div>
            <div>6Y0853678GRU</div>
            <div>1U0853621C MEL</div>
          </div>
        </div>
      </div>
      { showResultTable ? '' : 
      <div className='tar mrgrt'><button className='check_all_parts' onClick={handleCheckAllParts}>Alle Teile überprüfen</button></div>}
       { showResultTable ? <PartsResultTable /> : '' } 
    </div>
  )
}

export default PartsChecker;
