import React from 'react';
import logo from'../images/Logo/logo2.png'
import { ShoppingCartIcon } from '@heroicons/react/outline'

const NavBar = () => {
    return (
        <div className='container mx-autoj px-10 flex justify-between py-2'>
            <div><img className='w-[150px]' src={logo} alt="" /></div>
            <div className='flex items-center'>
            <div>
      <ShoppingCartIcon className="mr-8 h-5 w-5 text-body"/>
    </div>
                <p className='ml-4'>Login</p>
                <button className='bg-button rounded-full px-5 py-1 text-white font-semibold ml-10'>Signup</button>

            </div>
        </div>
    );
};

export default NavBar;