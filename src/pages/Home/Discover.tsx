import discover_img from '../../public/PORTFOLIO-COMBINED.png';
import './discover.css'
 

const Discover = () => {
  return (
    <div className='discover_main'>
        <div className="discover_left_image">
            <img src={discover_img} alt="" />
            </div> 
        <div className="discover_right_content">
            <h2>Discover Our Work</h2>
            <p>Explore the innovative websites and web applications we've crafted for diverse clients, from temples and 
                schools to businesses and travel platforms. See how our expertise brings digital visions to life.</p>
                <button title='Portfolio'>View Portfolio </button>
                </div> 
    </div>
  )
}

export default Discover