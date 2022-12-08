import React from 'react';
import '../../stylesheets/commonStyles.scss';
import '../../stylesheets/login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

function Login() {
  let url = '/all-jobs';
  const handleSignin = (e) => {
    e.preventDefault();
    window.history && window.history.pushState({}, '', url);
    window.location.reload();
  };

  const goToRegistrationPage = () => {
    window.history && window.history.pushState({}, '', '/registration');
    window.location.reload();
  };

  const goToForgotPassword = () => {
    window.history.pushState({}, '', '/forgot-password');
    window.location.reload();
  };

  return (
    <div className='main_container_login'>
      <div className='txt_c padt_85 dfx'>
        <img
          src='https://d3brnpc5nhvc9v.cloudfront.net/site/static-images/goparts-logo.png'
          className='logo_size mr_10'
        />
        <span className='theme_clr fs_30 ls_1'>Werkstätten</span>
      </div>
      <div className='sign_in_cont fs_30 pdt_50'>
        <div className='signin_txt cb_262626'>Sign In</div>
        <small className='signin_desc'>
          For the purpose of ordering car parts, your details are required
        </small>
      </div>
      <div className='section'>
        <form className='registration_form cb_262626 fs_14'>
          <div className='dreg_flex'>
            <label className='form_label fs_16 fw_500'>Email Address</label>
            <input className='input_box' placeholder='Enter Email Address' />
          </div>
          <div className='dreg_flex fs_16 fw_500'>
            <label className='form_label'>Password</label>
            <input className='input_box' placeholder='Enter Password' />
          </div>
          <small
            className='forgot_password cp fs_12 theme_clr'
            onClick={goToForgotPassword}
          >
            Forgot Password?
          </small>
          <div className='mt-5'>
            <button
              className='btn btn-primary cp'
              onClick={(e) => handleSignin(e)}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className='l_line'>
          <small className='orr'>or</small>
        </div>
        <button className='google_btn'>
          <img
            src='https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg'
            className='google_logo'
            alt='google_logo'
          />
          <span>Login with Google</span>
        </button>
        <div className='new_user pdb_50'>
          <span className='mr_10'>New to GoParts Insurance?</span>
          <span className='cp theme_clr' onClick={goToRegistrationPage}>
            Create an account?
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
