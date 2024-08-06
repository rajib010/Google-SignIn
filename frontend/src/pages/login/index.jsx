import React from 'react';

function Login() {
        const googleAuth = () => {
            const url = `${import.meta.env.VITE_API_URL}/auth/google/callback`;
            console.log(url);  
            window.open(url,'self')
        }
    

    return (    
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center border border-collapse rounded-lg p-10">
                    <div className="max-w-md p-15">
                        <h1 className="text-5xl font-bold">Login Form</h1>
                        <form action="">
                            <label className="input input-bordered flex items-center gap-2 mt-5 mb-3">
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                <input type="password" className="grow" placeholder='*****' />
                            </label>
                            <button className="btn btn-primary w-full">Login</button>
                            <p className='text-center font-medium'>or</p>
                            <button className='btn btn-success max-w-md mt-2 text-white' onClick={googleAuth}>Log in with Google</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
