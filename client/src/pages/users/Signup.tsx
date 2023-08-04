import { Link, useNavigate } from 'react-router-dom';
import '../../sass/signin.scss';
import { FormEvent, useContext, useState, ChangeEvent } from 'react';
import { Toast } from '../../utilities/Functions';
import UserService from '../../services/UserService';
import { isValidPassword } from '../../utilities/Regex';
import { UserContext } from '../../contexts/UserContext';
import { AuthUserType } from '../../utilities/Types';

export type SignupFormState = {
  fullName: string,
  email: string,
  password: string,
  phone: string,
  token?: string, 
  hasAgreedTerms?: boolean,
  confirmPassword?: string,
}

const Signup = () => {
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);
  const [ passwordVisibility , setPasswordVisibility ] = useState({
    isVisiblePassword: false,
    isVisibleConfirmPassword: false,
  });
  const [userFormData, setUserFormData] = useState<SignupFormState>(
    { fullName: "", email: "", phone: '', password: "", confirmPassword: "", hasAgreedTerms: false }
  );
  const { fullName, email, phone, password, confirmPassword, hasAgreedTerms} = userFormData ;
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(password !== confirmPassword){ return Toast('fail', 'Passwords do not match') }
    if(password.length < 8 ) { return Toast('fail', "Password length cannot be less than 8 characters")}
    if(!isValidPassword(password)){ return }
    
    const payload: SignupFormState = { fullName, email, password, phone }

    try {
      setIsSubmitting(true);
      const response = await UserService.Register(payload);
      if(response){
        const { email, phone, fullName, userId } = response
        const user : Omit<AuthUserType, 'token'> = { email, fullName, phone, userId } 
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentUser(user);
        Toast('success', 'Registration successful');
        return navigate('/');
      }
    } catch (error) {
      console.error(error);
    } finally{
      setIsSubmitting(false);
    }
  }

  const { isVisiblePassword, isVisibleConfirmPassword } = passwordVisibility;

  return (
    <main id='registration'>
      <div className="d-flex align-items-center justify-content-center h-100 w-100">
        <form onSubmit={handleSubmit}>
          <header>
            <h4 className='text-center'>Sign up</h4>
          </header>
          
          <div className="container-lg">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="form-group mb-4">
                  <label className='d-block' htmlFor="fullName">Full Name</label>
                  <input onChange={(e:ChangeEvent<HTMLInputElement>) => setUserFormData({ ...userFormData , fullName: e.target.value})} className='d-block form-control' id='fullName' type="text" required />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="form-group mb-4">
                  <label className='d-block' htmlFor="email">Email</label>
                  <input onChange={(e:ChangeEvent<HTMLInputElement>) => setUserFormData({ ...userFormData , email: e.target.value})} className='d-block form-control' id='email' type="email" required />
                </div>
              </div>
              <div className="col-sm-12 col-md-12">
                <div className="form-group mb-4">
                  <label className='d-block' htmlFor="phone">Phone Number</label>
                  <input onChange={(e:ChangeEvent<HTMLInputElement>) => setUserFormData({ ...userFormData , phone: e.target.value})} className='d-block form-control' id='phone' type="tel" required />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="form-group mb-4">
                    <label className='d-block' htmlFor="password">Password</label>
                    <input onChange={(e:ChangeEvent<HTMLInputElement>) => setUserFormData({ ...userFormData , password: e.target.value})} className='d-block form-control' id='password' type={isVisiblePassword ? 'text' : 'password'} required />
                    <i 
                      onClick={() => !password.length ? null : setPasswordVisibility({ ...passwordVisibility , isVisiblePassword: !isVisiblePassword })} 
                      className={`eye-icon fa-regular fa-eye${passwordVisibility .isVisiblePassword && userFormData .password.length ? '' : '-slash'}`}>
                    </i>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="form-group mb-4">
                  <label className='d-block' htmlFor="confirm-password">Confirm Password</label>
                  <input onChange={(e:ChangeEvent<HTMLInputElement>) => setUserFormData({ ...userFormData , confirmPassword: e.target.value})} className='d-block form-control' id='confirm-password' type={isVisibleConfirmPassword ? 'text': 'password'} required />
                  <i 
                    onClick={() => !confirmPassword?.length ? null : setPasswordVisibility({...passwordVisibility , isVisibleConfirmPassword: !isVisibleConfirmPassword})} 
                    className={`eye-icon fa-regular fa-eye${passwordVisibility .isVisibleConfirmPassword ? '' : '-slash'}`}>
                  </i>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-check my-4">
                  <input onChange={() => setUserFormData({ ...userFormData , hasAgreedTerms: !hasAgreedTerms })} type="checkbox" className="form-check-input" id="form-check-label"/>
                  <label className="form-check-label" htmlFor="form-check-label">I agree to the the terms & conditions</label>
                </div>
              </div>
              <div className="col-sm-12">
                <button 
                  disabled = { !(hasAgreedTerms && email.length && password.length && confirmPassword?.length && !isSubmitting && fullName.length) } 
                  type="submit" 
                  className="btn w-100">
                  { isSubmitting ? 'Submitting...' : 'Submit'  }
                </button>
                <p className="my-4">Already have an account? <Link to='/login'>Sign in</Link></p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup;