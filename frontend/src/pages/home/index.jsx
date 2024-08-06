import React, { useEffect } from 'react';
import { useUserContext } from '../../context/userContext';
import axios from 'axios';

function Index() {
    const { setUser, user } = useUserContext();
    const userName = user ? user.userName : '';
    const imgUrl = user ? user.photoUrl : '';

    const handleLogout = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/auth/logout`;
            const res = await axios.get(url, { withCredentials: true });
            localStorage.removeItem('loggedUser');
            setUser(null);
        } catch (error) {
            console.log('Error in logging out', error);
        }
    };

    return (
        <div className='flex flex-col'>
            <h1 className='text-center my-10 text-3xl'>Welcome Mr {userName}</h1>
            <img className='w-20 m-auto' src={imgUrl} height="px" alt="user image" />
            <button type="button" className='btn btn-primary max-w-md m-auto my-5' onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Index;
