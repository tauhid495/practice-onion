
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <div className='bg-image'>
                <h1 className='pt-36 text-4xl mb-5'>Best food waiting for your belly</h1>
                
                <div className="flex relative w-1/2 block mx-auto -space-x-4 overflow-hidden">
                   
                    <input type="text" id="search" class=" rounded-l-full flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent" name="search" placeholder="Search your meal" />

                    <button type='submit' class="btn rounded-full inline-flex  items-center px-10 bg-pink-600 text-white font-semibold text-base border-t  border-l border-b  border-gray-300  shadow-sm text-sm"> Search
                        
                        </button>
                </div>




            </div>




        </div>

    );
};

export default Header;