import { Link } from 'react-router-dom';
import '../../sass/signin.scss';

const Signup = () => {
  return (
    <main>
      <div className="container d-flex align-items-center justify-content-center h-100 w-100">
        <form action="">
          <header>
            <h4 className='text-center'>Sign Up</h4>
          </header>

          <div className='wrapper'>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="username">Username</label>
              <input className='d-block form-control' id='username' type="text" />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="email">Email</label>
              <input className='d-block form-control' id='email' type="text" />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="password">Password</label>
              <input className='d-block form-control' id='password' type="text" />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="confirm-password">Confirm Password</label>
              <input className='d-block form-control' id='confirm-password' type="text" />
            </div>

            <div className="form-check my-4">
              <input type="checkbox" className="form-check-input" id="form-check-label"/>
              <label className="form-check-label" htmlFor="form-check-label">I agree to the Terms & Conditions</label>
            </div>

            <button type="submit" className="btn w-100">Submit</button>

            <p className="my-4">Already have an account? <Link to='/signin'>Sign in</Link></p>

          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup