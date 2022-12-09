import React, { useState } from 'react';
import '../../stylesheets/createAJob.scss';
import Sidebar from '../../common/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


function CreateAJob() {
	const [isAltAddress, setIsAltAddress] = useState(false);
	const goToJobSearchPage = () => {
		window.history.pushState({}, '', '/jobs');
		window.location.reload();
	}

	const handleDeliveryChange=()=>{
		setIsAltAddress(!isAltAddress);
	}

	console.log("isalte", isAltAddress)

	return (
    <div>
      <div className='main_container_create_a_job'>
        <Sidebar />
        <div>
          <div className="job_title">
            <div className='title_text'>Create a New Job</div>
            <button className='save_btn' onClick={goToJobSearchPage}>Save</button>
          </div>
          <div className="create_job_section">
            <form className='row g-3 mb-5 customer_form'>
              <div className='col-12'>
                <label className='form-label'>Job Title</label>
                <input className='form-control' placeholder='Title' />
              </div>
              <div className='col-12'>
                <label className='form-label'>Customer Name</label>
                <input className='form-control' placeholder='Jon Doe' />
              </div>
              <div className='col-6'>
                <label className='form-label'>Brand</label>
                <input className='form-control' placeholder='Ford' />
              </div>
              <div className='col-6'>
                <label className='form-label'>Model</label>
                <input className='form-control' placeholder='Focus' />
              </div>
              <div className='col-6'>
                <label className='form-label'>VIN</label>
                <input className='form-control' placeholder='4Y1SL65848Z411439' />
              </div>
              <div className='col-6'>
                <label className='form-label'>Plate Number</label>
                <input type='email' className='form-control' placeholder='SEA 234' />
              </div>

              <div>
                <span>Insurance Coverage</span><br></br>
                {/* <div className='radio_item'> */}
                <input type='radio' value='Yes' name='insurance' className='radio_class_i' defaultChecked />
                <label className='radio_label_class'>Yes</label>
                <input type='radio' value='No' name='insurance' className='radio_class_i' />
                <label className='radio_label_class'>No</label>
                {/* </div> */}
              </div>

              <div className='col-6'>
                <label className='form-label'>Claim Number</label>
                <input className='form-control' placeholder='222633' />
              </div>
              <div className='col-6'>
                <label className='form-label'>Insurance Name</label>
                <input className='form-control' placeholder='Insurance Name' />
              </div>

              <div>
                <span>Fleet case</span><br></br>
                <input type='radio' value='Yes' name='fleet' className='radio_class_i' defaultChecked />
                <label className='radio_label_class'>Yes</label>
                <input type='radio' value='No' name='fleet' className='radio_class_i' />
                <label className='radio_label_class'>No</label>
              </div>

              <div className='col-6'>
                <label className='form-label'>Fleet Company Name</label>
                <input className='form-control' placeholder='Fleet Company Name' />
              </div><br></br>
              <div className='col-6'>

              </div>
              <div className='col-6'>
                <label className='form-label'><FontAwesomeIcon icon={faCalendar} /> Start Date</label>
                <input className='form-control' type='text' placeholder='March, 3' /></div>
              <div className='col-6'>
                <label className='form-label'><FontAwesomeIcon icon={faCalendar} />Completion Date</label>
                <input className='form-control' type='text' placeholder='March, 25' />
              </div>
              <span>Delivery Address</span><br></br>
              <div onChange={handleDeliveryChange}>
                <input type='radio' value='default' name='address' className='radio_class_i' defaultChecked />
                <label className='radio_label_class'>Default</label>
                <input type='radio' value='alternative_addr' name='address' className='radio_class_i' />
                <label className='radio_label_class'>Use Alternative Delivery Address</label>
              </div>
              {isAltAddress ? <textarea /> : ''}
            </form> 
          </div>
        </div>
      </div>
    </div>
	)
}

export default CreateAJob;