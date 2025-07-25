import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import {toast} from "react-hot-toast";

const Login = () => {
const {axios,setToken}=useAppContext();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
const {data}=await axios.post('/api/admin/login',{email,password})
console.log(data);
if(data.sucess){
    setToken(data.token)
    localStorage.setItem('token',data.token);
    axios.defaults.headers.common['Authorization']=data.token;
}
else{
    toast.error(data.message);
}
        }
        catch(error){
toast.error(error.message)
        }
    }

    //Convert Input Fields into Controlled Input Fields.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>

            <div className='flex justify-center items-center h-screen'>
                <button onClick={() => navigate('/')} className='absolute top-4 left-4 w-20 h-10 rounded bg-amber-400 cursor-pointer text-sm'>
                    Home
                </button>

                <div className='  w-full max-w-sm p-7 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg bg-white ' >


                    <div className='flex flex-col items-center justify-center'>


                        <div className='w-full py-6 text-center'>
                            <h1 className='text-3xl font-bold'><span className='text-orange-600'>Admin Login</span></h1>
                            <p className='font-light'>Enter your credentials to acess the admin Panel</p>
                        </div>
                        <form onSubmit={handleSubmit} className='sm:max-w-md'>
                            <div className='flex flex-col'>
                                <label className=''>Email</label>
                                <input type="email" className='outline none border border-gray-300  rounded px-2 mb-4 ' required placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} />

                                <label className=''>Password</label>
                                <input type="password" className='outline none border border-gray-300  rounded px-2 mb-4 ' required placeholder='Enter your password' onChange={e => setPassword(e.target.value)} value={password} />

                            </div>

                            <button className='w-full bg-green-500 text-2xl text-white font-poppins p-1 rounded cursor-pointer hover:bg-green-700 border-gray-300 border' type='submit'>Login</button>
                        </form>

                    </div>


                </div>









            </div>
        </>
    )
}

export default Login
