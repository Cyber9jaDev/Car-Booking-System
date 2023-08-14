import { FormEvent, useState } from 'react';
import '../../sass/contact.scss';
// import img from '../../assets/robot-5.jpg';
// import axios from 'axios';
// import Toast from '../../utils/Toast';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData ] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message:'',
  })
  
  // const { name, email, subject, message, number } = formData;

  const sendMessage = async (e:FormEvent) => {
    e.preventDefault();
    // if(!name || !email || !subject || !message || !number) {
    //   return Toast('error', 'Please fill all fields')
    // }

    // try {
    //   setStatus('pending');
    //   await axios.post('http://localhost:3030/contact', { name, email, number, subject, message });
    //   setStatus("successful");
    //   Toast('success', 'Message sent successfully');
    //   window.location.reload();
    // } catch (error) {
    //   Toast('failed', 'An error occurred, please try again');
    //   console.log(error);
    //   setStatus('rejected');
    // }
  }

  return (
    <section id='contact'>

      <div className='container-fluid content d-flex flex-column justify-content-center align-items-center w-100'>
        <h1 className='text-center'>Contact Us</h1>
        <p className='text-center tet-white'>If you have any questions or inquiries, feel free to reach out to us.</p>
      </div>

      <address className="container my-5 px-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center my-3">
            <i className="icon fa-solid fa-location-dot"></i>
            <h5>Address</h5>
            <span className='text-center'>No 15, SAF City Building, Iyaolobe Ekotedo, Dugbe Ibadan</span>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center my-3">
            <i className="icon fa-solid fa-phone"></i>
            <h5>Phone</h5>
            <span className='text-center'><a href="tel:+233 54 417 4142">+234 806 212 8170</a></span>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center my-3">
            <i className="icon fa-regular fa-envelope"></i>
            <h5>Email</h5>
            <span className='text-center'><a href='mailto:info@turbineslimited.com'>ayodejioladapo15@gmail.com</a></span>
          </div>
        </div>
      </address>

      <div className="container-lg position-relative my-5 form-wrapper">
        <form onSubmit={sendMessage}>
          <div className="row">
            <div className="form-group col-sm-12 col-lg-6 my-4">
              <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" className="form-control" id="name" aria-describedby="nameInput" placeholder="Enter your name" />
              {/* <small id="nameInput" className="form-text text-muted">We'll never share name email with anyone else.</small> */}
            </div>
            <div className="form-group col-sm-12 col-lg-6 my-4">
              <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" className="form-control" id="email" aria-describedby="emailInput" placeholder="Enter your email" />
              {/* <small id="emailInput" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group col-sm-12 col-lg-6 my-3">
              <input onChange={(e) => setFormData({ ...formData, number: e.target.value.toString() })} type='number' className="form-control" id="phone" placeholder="Phone number" aria-describedby='phoneInput' />
              {/* <small id="phoneInput" className="form-text text-muted">We'll never share your phone with anyone else.</small> */}
            </div>
            <div className="form-group col-sm-12 col-lg-6 my-3">
              <input onChange={(e) => setFormData({ ...formData, subject: e.target.value })} type="text" className="form-control" id="subject" placeholder="Subject" aria-describedby='subjectInput' />
              {/* <small id='subjectInput' className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group col-sm-12 my-3">
              <textarea onChange={(e) => setFormData ({ ...formData, message: e.target.value })} className="form-control" id="textarea" placeholder="Message" />
            </div>
            <div className="form-group col-sm-12 my-3">
              <input type="submit" value={ status === 'pending' ? 'Sending Message...' : 'Send Message' } className="btn w-100" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;