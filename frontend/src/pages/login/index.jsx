import React from 'react';
import { useUserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const googleAuth = () => {
    const url = `${import.meta.env.VITE_API_URL}/auth/google/callback`;
    window.open(url, '_self');
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log('User data fetched: ', data.user);
      localStorage.setItem('loggedUser', JSON.stringify(data.user));
      setUser(data.user);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center border border-collapse rounded-lg p-10">
        <div className="max-w-md p-15">
          <h1 className="text-5xl font-bold">Login Form</h1>
          <form onSubmit={handleLogin}>
            <label className="input input-bordered flex items-center gap-2 mt-5 mb-3">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              <input type="password" className="grow" placeholder="*****" />
            </label>
            <button type="submit" className="btn btn-primary w-full">Login</button>
            <p className='text-center font-medium'>or</p>
            <button type='button' className='btn btn-success max-w-md mt-2 text-white' onClick={googleAuth}>Log in with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
