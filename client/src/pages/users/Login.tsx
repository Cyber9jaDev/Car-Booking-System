import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import { Toast } from '../../utilities/Functions';
import { isValidPassword } from '../../utilities/Regex';
import { UserContext } from '../../contexts/UserContext';
import { AuthUserType } from '../../utilities/Types';

type LoginFormState = { email: string,  password: string }

const Login = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isVisiblePassword, setIsVisiblePassword ] = useState<boolean>(false);
  const [ userFormData, setUserFormData ] = useState<LoginFormState>({ email: '', password: ''});
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { email, password } = userFormData;

  const handleLoginSubmit = async(e: FormEvent) => {
    e.preventDefault();

    if(!isValidPassword(password)) return

    const payload : LoginFormState = { email, password }

    try {
      setIsLoading(true);
      const response = await UserService.Login(payload);
      if(response){
        const { email, phone, fullName, userId } = response;
        const user : Omit<AuthUserType, 'token'> = { email, fullName, phone, userId } 
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentUser(user);
        Toast('success', 'Login successful');
        return navigate('/');
      }
    } catch (error) {
        console.error(error);
    } finally{
        setIsLoading(false);
    }
  }

  return (
    <main id='registration'>
      <div className="container d-flex align-items-center justify-content-center h-100 w-100">
        <form onSubmit={handleLoginSubmit}>
          <header>
            <h4 className='text-center'>Login to continue</h4>
          </header>

          <div className='wrapper mt-3'>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="email">Email</label>
              <input
                required
                className='d-block form-control' 
                value={email}
                id='email' 
                type="email" 
                onChange={(e) => setUserFormData({ ...userFormData, email: e.target.value })} 
              />
            </div>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="password">Password</label>
              <input 
                required
                className='d-block form-control' 
                value={password}
                id='password' 
                type={`${ isVisiblePassword ? 'text' : 'password' }`} 
                onChange={(e) => setUserFormData({ ...userFormData, password: e.target.value })} 
              />
              <i 
                className={`eye-icon fa-regular fa-eye${isVisiblePassword && password.length ? '' : '-slash'}`}
                onClick={() => !password.length ? null : setIsVisiblePassword(!isVisiblePassword)}>
              </i>
            </div>

            <button disabled={ isLoading } type="submit" className="btn w-100 my-2">{isLoading ? 'Loading...' : 'Login'}</button>

            <p className="my-4">Don't have an account? <Link to='/register'>Sign up</Link></p>

          </div>
        </form>
      </div>
    </main>
  )
}

export default Login;