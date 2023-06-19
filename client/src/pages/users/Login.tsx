import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main>
      <div className="container d-flex align-items-center justify-content-center h-100 w-100">
        <form action="">
          <header>
            <h4 className='text-center'>Sign in</h4>
          </header>

          <div className='wrapper'>

            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="email">Email</label>
              <input className='d-block form-control' id='email' type="text" />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="password">Password</label>
              <input className='d-block form-control' id='password' type="text" />
            </div>

            <button type="submit" className="btn w-100 my-2">Submit</button>

            <p className="my-4">Don't have an account? <Link to='/signup'>Sign up</Link></p>

          </div>
        </form>
      </div>
    </main>
  )
}

export default Login