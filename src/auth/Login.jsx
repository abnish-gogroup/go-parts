import React from 'react';
import '../stylesheets/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

function Login() {
  let url = '/all-jobs';
  const handleSignin = (e) => {
    e.preventDefault();
    window.history && window.history.pushState({}, "", url);
    window.location.reload();
  }

  const goToRegistrationPage = () => {
    window.history && window.history.pushState({}, "", '/registration');
    window.location.reload();
  }

  const goToForgotPassword = () => {
    window.history.pushState({}, '', '/forgot-password');
    window.location.reload();
  }

  return (
    <div className="main_container_login">
      <nav className="navbar navbar-fixed-top">
        <div className="top_navbar">
          <img src="https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/goparts-logo.png" className="logo" />
        </div>
      </nav>
      <div className="top_border">
      </div>

      <div className="sign_in_text">
        <h3>Sign In to GoParts</h3>
        <small className="signin_desc">For the purpose of ordering car parts, your details are required</small>
      </div>
      <div className="section">
        <form className="registration_form">
          <div className='dreg_flex'>
            <label className='form_label'>Email Address<FontAwesomeIcon icon={faAsterisk} className='star_class' /></label>
            <input className='input_box' placeholder='Enter Email Address' />
          </div>
          <div className='dreg_flex'>
            <label className='form_label'>Password<FontAwesomeIcon icon={faAsterisk} className='star_class' /></label>
            <input className='input_box' placeholder="Enter Password" />
          </div>
          <small className='forgot_password' onClick={goToForgotPassword}>Forgot Password</small>
          <div className="mt-5">
            <button className="btn btn-primary" onClick={(e) => handleSignin(e)}>Sign In</button>
          </div>
        </form>
        <div className="l_line"><small className="orr">or</small></div>
        <button className="google_btn">
          <img src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg" className="google_logo" alt="google_logo" /> Login with Google
        </button>
        <div className='new_user'>
          <span style={{ marginRight: 10 }}>New to goParts?</span>
          <span style={{ color: '#1E8EA5', cursor: 'pointer' }} onClick={goToRegistrationPage}>Create an account</span>
        </div>
      </div>
    </div>
  )
}

export default Login;
