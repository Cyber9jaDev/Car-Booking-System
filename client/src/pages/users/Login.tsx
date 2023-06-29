import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import { Toast } from '../../utilities/utils';
import { isValidPassword } from '../../utilities/regex';
import { AuthUserDataType, UserContext } from '../../contexts/UserContext';

type AuthLoginType = {
  email: string, 
  password: string
}
const Login = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ visiblePassword, setVisiblePassword ] = useState<boolean>(false);
  const [ formData, setFormData ] = useState<AuthLoginType>({
    email: '',
    password: '',
  });

  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();


  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    if(!isValidPassword(formData.password)) return
    const payload : AuthLoginType = {
      email: formData.email,
      password: formData.password,
    }

    setIsLoading(true);
    try {
      const { data } = await UserService.Login(payload);
      if(data){
        const user : AuthUserDataType = {
          email: data.email,
          username: data.username,
        } 
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentUser(user);
        Toast('success', 'Login successful');
        return navigate('/');
      }
    } catch (error) {
      return error;
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <main id='registration'>
      <div className="container d-flex align-items-center justify-content-center h-100 w-100">
        <form onSubmit={handleSubmit}>
          <header>
            <h4 className='text-center'>Login to continue</h4>
          </header>

          <div className='wrapper mt-3'>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="email">Email</label>
              <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} className='d-block form-control' id='email' type="email" required/>
            </div>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="password">Password</label>
              <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} className='d-block form-control' id='password' type={`${ visiblePassword ? 'text' : 'password' }`} required />
              <i 
                onClick={() => !formData.password.length ? null : setVisiblePassword(!visiblePassword)} 
                className={`eye-icon fa-regular fa-eye${visiblePassword && formData.password.length ? '' : '-slash'}`}>
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

export default Login