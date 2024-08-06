import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/login';
import Home from './pages/home';
import { useUserContext } from './context/userContext.jsx';

function App() {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const fetchUser = async () => {
      const loggedUser = localStorage.getItem('loggedUser');
      if (loggedUser) {
        setUser(JSON.parse(loggedUser));
      } else {
        try {
          const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
          const { data } = await axios.get(url, { withCredentials: true });
          localStorage.setItem('loggedUser', JSON.stringify(data.user));
          setUser(data.user);
        } catch (error) {
          console.log('Error fetching user data', error);
        }
      }
    };
    fetchUser();
  }, [setUser]);

  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route exact path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
