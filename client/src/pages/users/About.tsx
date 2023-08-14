// import '../../sass/about.scss';
// import img from '../../assets/robot-7.jpg';
// import robot from '../../assets/ai-intelligence.svg'

const About = () => {
  return (
    <main id='about' className='position-relative w-100'>
      {/* <img src={img} alt="about-background-img" /> */}

      <div className='container-fluid content d-flex flex-column justify-content-center align-items-center position-absolute w-100 top-0'>
        <h1 className='text-center'>About BusCity</h1>
        <p className='text-center'>We are passionate about AI and its potential to revolutionize industries.</p>
        <p className='text-center'>At Turbines AI, we leverage advanced algorithms and machine learning to develop innovative solutions.</p>
      </div>
        
      <section className='details'>
        <div className="container-lg">
          <div className="row">
            <div className="col-sm-12 col-lg-6  align-self-center d-flex flex-column">
              <h5 className='me-auto p-1'>About us</h5>
              <h2 className='my-3'>We Create The Most Realistic Artificial Intelligence</h2>
              <h6 className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fugiat consectetur, reiciendis voluptate a beatae repudiandae dolores, unde atque saepe optio maiores! Similique quo qui accusamus maxime quis est non.</h6>
              <ul className="row mt-3">
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Machine Learning</span>
                </li>
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Computer Vision</span>
                </li>
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Deep Learning</span>
                </li>
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Robotic Intelligence</span>
                </li>
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Artificial Intelligence</span>
                </li>
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Language Processing</span>
                </li>
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Neural Processing</span>
                </li>
                <li className="col-sm-6">
                  <i className="fa-solid fa-circle-check"></i>
                  <span className='ms-2'>Healthcare Facility</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-self-center">
              <div className="img-wrapper d-flex justify-content-center">
                {/* <img className='ai-image' src={robot} alt="robot-img" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;