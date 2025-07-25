import React from 'react'
import { assets } from "../assets/assets";
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
const Navbar = () => {
  //Using Tailwind


  const { navigate, token } = useAppContext();
  return (
    <div className='flex justify-between items-center py-5 mx-5 sm:mx-20 xl:mx-32'>
      <img src={assets.logo} onClick={() => navigate('/')} alt="Logo" className='w-32  cursor-pointer sm:w-44' />
      <button onClick={() => navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-emerald-700 text-white px-10 py-2.5'>{token ? "Dashboard":"Login"}
        <img src={assets.arrow} alt="arrow" />
      </button>
    </div>
  )
}

export default Navbar;
