import { Link } from 'react-router-dom';
import '../../sass/footer.scss';

const Footer = () => {
  return (
    <footer id='footer' className="py-sm-5 py-4 px-md-5 px-3">
			<div className="container pt-lg-5">
				<div className="row">
					<div className="col-lg-4 col-sm-6 mb-lg-0 mb-5 footer-grid text-left">
						<h3 className="mb-sm-5 mb-4 mt-sm-0 mt-4">About Company</h3>
						<p>Vestibulum vitae libero consectetur, orn areeros id, congue metus. Aliquam erat volutpat. Donec rhoncus
							risus vitae ullam corper pretium. Duis vitae nisl neque. Aliquam tincidunt, tellus quis hendrerit tincidunt
							congue metus. </p>
						<Link to="/about" className="about-link read">Know More <i className="fas fa-caret-right"></i></Link>
					</div>
					<div className="col-lg-4 col-sm-6 mb-lg-0 mb-5 footer-grid text-left">
						<h3 className="mb-sm-5 mb-4">Locate Us</h3>
						<ul className="footer-bottom-list">
							<li> <i className="fas fa-map-marker"></i> No 15, SAF City Building, Iyaolobe, Ekotedo Dugbe Ibadan, Nigeria</li>
							<li> <i className="fas fa-envelope"></i> <a href="mailto:ayodejioladapo15@gmail.com"> Email</a> </li>
							<li> <i className="fas fa-phone"></i> <a href="tel:+2348062128170">+2348062128170</a> </li>
							<li> <i className="fas fa-fax"></i> <a href="tel:+2347045161448">+2347045161448</a> </li>
							<li> <i className="fas fa-globe"></i> <a href="www.github.com/Dipsaint1">Dipsaint</a> </li>
							<li> <i className="fas fa-clock"></i> Office Time : 8:00 a.m - 5:00 p.m</li>
						</ul>
					</div>

					{/* <div className="col-lg-3 col-sm-6 mb-sm-0 mb-5 footer-grid-agileits-w3ls text-left">
						<div className="tech-btm">
							<h3 className="mb-sm-5 mb-4">Latest Posts</h3>
							<div className="blog-grids row mb-3">
								<div className="col-4 pr-0 blog-grid-left">
									<a href="#">
										<img src="images/blog1.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="col-8 blog-grid-right">

									<h5>
										<a href="#">Pellentesque dui, non felis. Maecenas male non felis </a>
									</h5>
									<div className="sub-meta">
										<span>
											<i className="far fa-clock"></i> 19 Apr, 2018</span>
									</div>
								</div>

							</div>
							<div className="blog-grids row mb-3">
								<div className="col-4 pr-0 blog-grid-left">
									<a href="#">
										<img src="images/blog2.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="col-8 blog-grid-right">

									<h5>
										<a href="#">Pellentesque dui, non felis. Maecenas male non felis </a>
									</h5>
									<div className="sub-meta">
										<span>
											<i className="far fa-clock"></i> 20 Apr, 2018</span>
									</div>
								</div>

							</div>
							<div className="blog-grids row">
								<div className="col-4 pr-0 blog-grid-left">
									<a href="#">
										<img src="images/blog3.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="col-8 blog-grid-right">

									<h5>
										<a href="#">Pellentesque dui, non felis. Maecenas male non felis </a>
									</h5>
									<div className="sub-meta">
										<span>
											<i className="far fa-clock"></i> 21 Apr, 2018</span>
									</div>
								</div>

							</div>
						</div>
					</div> */}
					<div className="col-lg-4 col-sm-6 footer-grid text-left">
						<h3 className="mb-sm-5 mb-4">Stay In Touch</h3>
						{/* <div className="subscribe-main text-left">
							<div className="subscribe-form">
								<form action="#" method="post" className="subscribe_form">
									<input className="form-control" type="email" placeholder="Enter Your Email..." required />
									<button type="submit" className="btn1 btn-primary submit"><i className="fas fa-paper-plane"
											aria-hidden="true"></i></button>
								</form>
							</div>
						</div> */}
						<div className="footer-social">
							<div>
								<ul>
									<li className="me-1">
										<a className="icon" href="#">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li className="me-1">
										<a className="icon" href="#">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li className="me-1">
										<a className="icon" href="#">
											<i className="fab fa-google-plus-g"></i>
										</a>
									</li>
									<li className="me-1">
										<a className="icon" href="#">
											<i className="fab fa-pinterest-p"></i>
										</a>
									</li>
									<li>
										<a className="icon" href="#">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</li>
								</ul>

							</div>
						</div>
					</div>
				</div>
				<div className="footer-cpy text-center pt-sm-5 mt-sm-5 mt-4 pt-3">
					<div className="copyright-bottom">
						<p>&trade; 2018 Taxi Cab, Built by
							<a className='ms-1' href="http://w3layouts.com/">Cyber9ja</a>
						</p>
						<p>&copy; All Rights Reserved | Design Source - <a className='ms-1' href="http://w3layouts.com/">w3layouts</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer