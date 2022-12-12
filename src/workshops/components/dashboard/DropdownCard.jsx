import React from 'react';
import '../../../stylesheets/dashboardDropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPaperclip, faBars } from '@fortawesome/free-solid-svg-icons';

function DropdownCard(props) {
  const { jobId, partName, licencePlateId, completionDate, noOfParts, actionBtnText, isViewBids, isFinished } = props;
  return (
    <div className='row row_class'>
      <div className='col-1'>
        {jobId}
      </div>
      <div className='col-4'>
        {partName} <FontAwesomeIcon icon={faBars} className='pd_l' /> <FontAwesomeIcon icon={faPaperclip} className='pd_l' />
      </div>
      <div className='col-2'>
        {licencePlateId}
      </div>
      <div className='col-1'>
        {noOfParts}
      </div>
      <div className='col-2'>
        {completionDate}
      </div>
      <div className='col-2 d_flex'>
        <button className={isFinished ? 'job_btn border' : 'job_btn'}>{actionBtnText}</button>
        {isViewBids ?
          <div className="circle">
            <FontAwesomeIcon icon={faAngleDown} className='angle_down_ico' />
          </div> : ''}
      </div>

    </div>
  )
}

export default DropdownCard;
