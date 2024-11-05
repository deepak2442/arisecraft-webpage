import './footer.css'
import act_logo from '../../public/arise-removebg-preview-1.png'
import facebook from '../../public/icons8-facebook-48.png'
import twitter from '../../public/twitter.png'
import google from '../../public/google.svg'
import linkdin from '../../public/icons8-linkedin-48.png'


const footer = () => {
  return (
    <>
    <div className='main_footer'>
      <div className='left_img'>
      <div className='left_act_logo '>
        <img src={act_logo} alt="" />
        </div>
        <div className='left_logo_img'>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={google} alt="" />
          <img src={linkdin} alt="" />
        </div>
      
      </div>
      <div className='right_content rc1'>
        <ul>
          <li>Our Company</li>
          <li>Home Page</li>
          <li>About Us</li>
          <li>Services Page</li>
          <li>Contact Us Page</li>
        </ul>
      </div>
      <div className='right_content rc1' >
        <ul>
        <li>Our Services</li>
        <li>Web Application Development</li>
        <li>Mobile Application Development</li>
        <li>Other Services</li>
        </ul>
      </div>
      <div className='right_content '>
        <ul>
        <li>Contact Details</li>
        <li>Lobo Complex, Santhekatte</li>
        <li>Kallianpur, Udupi -576105</li>
        <li>+91 84310 51211</li>
        <li>reachus@arisecraft.com</li>
        </ul>
      </div>
    </div>
    <div></div>
    </>
  );
}

export default footer