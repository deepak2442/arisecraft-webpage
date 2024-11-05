import './hero.css'

const hero = () => {
  return (
    <div className='hero'>
        <div className='image-div'>
        </div>
        <div className='hero-content'>
            <h1>Arisecraft Technologies</h1>
            <p>A Leading Software Company in Udupi, Karnataka, Recognized by MSME & DPIIT, Government of India</p>
            <div className='hero-button'>
                <button>Check Our Services <img src="../../public/right-arrow_10023673.png" alt="" /></button>
                <button>Get In Touch <img src="../../public/Arrow right.svg" alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default hero