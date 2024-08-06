import { useState, useEffect } from 'react'
import Login from "./pages/login"
import axios from "axios"
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from "./pages/home"

function App() {

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      console.log("hi there");
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      console.log(import.meta.env.VITE_API_URL);
      const { data } = await axios.get(url, { withCredentials: true })
      console.log("User data fetched: ",data);
      
      setUser(data.user);
      // console.log(user.userName);
      
      
    } catch (error) {
      console.log("Error fetching data",error);

    }
  }

  useEffect(() => {
    getUser()
  }, []);

  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={user ? <Home/> : <Navigate to="/login" />} />
      </Routes>
      <Routes>
        <Route exact path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      </Routes>

    </div>
  )
}

export default App