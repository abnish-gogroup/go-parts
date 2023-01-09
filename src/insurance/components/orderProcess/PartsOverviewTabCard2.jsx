import React from 'react';
import '../../../stylesheets/partsOverviewTab.scss';
import PartsOverviewDescTab from './PartsOverviewDescTab';

function PartsOverviewTabCard2(props) {
  const { offer, date, offerDetailsDataForScheinwerfer } = props;

  return (
    <div>
      <ul className="accordion-list-parts-overview-tab">
        <li>
          <div className='job_row_cont'>
            <div className='job_row_class'>
              <div className='w_20 fw_600'>{offer}</div>
              <div className='w_5'></div>
              <div className='w_20'>{date}</div>
              <div className='w_25 pdl_10'></div>
              <div className='w_20'></div>
              <div className='w_17'></div>
              <div className='w_17'></div>
            </div>
          </div>
          <div className="parts_ovr_answer pdl_10">
            <PartsOverviewDescTab
              descriptionData={offerDetailsDataForScheinwerfer}
            />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default PartsOverviewTabCard2;
