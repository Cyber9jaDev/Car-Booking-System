import '../../sass/team.scss';
import img1 from '../../assets/team1.jpg';
import img2 from '../../assets/team2.jpg';
import img3 from '../../assets/team3.jpg';
import img4 from '../../assets/team4.jpg';

const Team = () => {
  return (
    <section id='team'>
      <div className="container py-lg-5 py-3">
        
        <header>
          <h4 className="text-capitalize text-center mb-4">Our Drivers</h4>
        </header>

        <div className="row text-center">
          <figure className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="team-effect">
              <img src={img1} alt="img" className="img-fluid"/>
            </div>
            <figcaption>
              <h4>John Smith</h4>
              <p className="my-2">Taxi Driver</p>
              <a href='tel:08062128170'><i className="fas fa-phone" aria-hidden="true"></i>08062128170</a>
            </figcaption>
          </figure>
          <figure className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="team-effect">
              <img src={img2} alt="img" className="img-fluid" />
            </div>
            <figcaption>
              <h4>Laura Hill</h4>
              <p className="my-2">Taxi Driver</p>
              <a href='tel:08062128170'><i className="fas fa-phone" aria-hidden="true"></i>08062128170</a>
            </figcaption>
          </figure>
          <figure className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="team-effect">
              <img src={img3} alt="img" className="img-fluid" />
            </div>
            <figcaption>
              <h4>Smith Kevin</h4>
              <p className="my-2">Taxi Driver</p>
              <a href='tel:08062128170'><i className="fas fa-phone" aria-hidden="true"></i>08062128170</a>
            </figcaption>
          </figure>
          <figure className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="team-effect">
              <img src={img4} alt="img" className="img-fluid" />
            </div>
            <figcaption>
              <h4>Thomson Doe</h4>
              <p className="my-2">Taxi Driver</p>
              <a href='tel:08062128170'><i className="fas fa-phone" aria-hidden="true"></i>08062128170</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Team;