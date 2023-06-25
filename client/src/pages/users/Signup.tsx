import { Link, useNavigate } from 'react-router-dom';
import '../../sass/signin.scss';
import { FormEvent, useContext, useState } from 'react';
import { Toast } from '../../utilities/utils';
import UserService from '../../services/UserService';
import { isValidPassword } from '../../utilities/regex';
import { AuthUser, UserContext } from '../../contexts/UserContext';


export type StateType = {
  username: string,
  email: string,
  password: string,
  token?: string, 
  terms?: boolean,
  confirmPassword?: string,
  isLoading?: boolean,
  hasError?: boolean
}

const Signup = () => {
  const [toggleVisibility, setToggleVisibility] = useState({
    passwordVisibility: false,
    confirmPasswordVisibility: false,
  });

  const [formData, setFormData] = useState<StateType>({
    username: "",
    email: '',
    password: "",
    confirmPassword: "",
    terms: true,
    isLoading: true,
    hasError: false
  });

  const { setCurrentUser }  = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(formData.password !== formData.confirmPassword){ return Toast('fail', 'Passwords do not match') }
    if(formData.password.length < 8 ) { return Toast("error", "Password length cannot be less than 8 characters")}
    if(!isValidPassword(formData.password)){ return }
    
    const payload: StateType = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    }

    try {
      const data = await UserService.Register(payload);
      if(data){
        const _data = data as AuthUser;
        const user : AuthUser = {
          email: _data.email,
          username: _data.username,
        } 
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentUser(user);
        Toast('success', 'Registration successful');
        return navigate('/');
      }
      
    } catch (error) {
      console.log(error);
      console.error(error);
      return error;
    }
  }

  return (
    <main id='registration'>
      <div className="container d-flex align-items-center justify-content-center h-100 w-100">
        <form onSubmit={handleSubmit}>
          <header>
            <h4 className='text-center'>Sign Up</h4>
          </header>

          <div className='wrapper'>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="username">Username</label>
              <input onChange={(e) => setFormData({ ...formData, username: e.target.value})} className='d-block form-control' id='username' type="text" required />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="email">Email</label>
              <input onChange={(e) => setFormData({ ...formData, email: e.target.value})} className='d-block form-control' id='email' type="email" required />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="password">Password</label>
              <input onChange={(e) => setFormData({ ...formData, password: e.target.value})} className='d-block form-control' id='password' type={toggleVisibility.passwordVisibility ? 'text' : 'password'} required />
              <i onClick={() => setToggleVisibility({ ...toggleVisibility, passwordVisibility: !toggleVisibility.passwordVisibility})} className="fa-regular fa-eye-slash"></i>
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="confirm-password">Confirm Password</label>
              <input onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value})} className='d-block form-control' id='confirm-password' type={toggleVisibility.confirmPasswordVisibility ? 'text': 'password'} required />
              <i onClick={() => setToggleVisibility({...toggleVisibility, confirmPasswordVisibility: !toggleVisibility.confirmPasswordVisibility})} className="fa-regular fa-eye-slash"></i>
            </div>
            <div className="form-check my-4">
              <input onChange={() => setFormData({ ...formData, terms: !formData.terms })} type="checkbox" className="form-check-input" id="form-check-label"/>
              <label className="form-check-label" htmlFor="form-check-label">I agree to the Terms & Conditions</label>
            </div>
            <button disabled={formData.terms === true} type="submit" className="btn w-100">Submit</button>
            <p className="my-4">Already have an account? <Link to='/signin'>Sign in</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup;