import './technology.css'
import arrow from '../../public/Arrow right.svg'

const Technology = () => {
  return (
    <div className="techno_main">
        <div className="techno_content" >
        <div className="techno_right">
        <h4>Our Technology</h4>
        {/* <span>- </span> */}
        <p>Specialized in Application Development, we deliver innovative solutions to overcome obsolete systems and processes currently in place.</p>
        </div>
        <div className="techno_left">
            <button>View More <img src={arrow} alt="" /> </button>
        </div>
        </div>
        <div className="lang_image">
            <img className="img-card" src="../../public/output.png" alt="" />
            <img className="img-card" src="../../public/flutter.jpg" alt="" />
            <img className="img-card" src="../../public/wordpress.png" alt="" />
            <img className="img-card" src="../../public/download.png" alt="" />
            <img className="img-card" src="../../public/node1.jpg" alt="" />
            <img className="img-card" src="../../public/PostgreSQL-logo.jpg" alt="" />
            <img className="img-card" src="../../public/mysql-logo-png-transparent-2048x1420.png" alt="" />
            <img className="img-card" src="../../public/download-2.png" alt="" />
            <img className="img-card" src="../../public/MariaDB.png" alt="" />
            <img className="img-card" src="../../public/Angular.png" alt="" />
            <img className="img-card" src="../../public/Android-Studio.png" alt="" />
            <img className="img-card" src="../../public/Java-Logo-2048x1280.png" alt="" />
            <img className="img-card" src="../../public/PHP.png" alt="" />
            <img className="img-card" src="../../public/oracle.png" alt="" />
            <img className="img-card" src="../../public/download-3.png" alt="" />
            <img className="img-card" src="../../public/react-native-logo.png" alt="" />
            <img className="img-card" src="../../public/asp.net_.jpg" alt="" />
            <img className="img-card" src="../../public/magento.png" alt="" />
            <img className="img-card" src="../../public/640px-ISO_C_Logo.svg.png" alt="" />
            <img className="img-card" src="../../public/REACT.png" alt="" />
        </div>
    </div>
  )
}

export default Technology