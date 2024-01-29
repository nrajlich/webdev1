'use client'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Avatar from "./Avatar";
import { useState } from 'react';
import MobileMenu from "./MobileMenu";
const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        console.log('click')
        setNav(!nav);
    }

    let mobile = null;
    if (!nav) {
        mobile = <MobileMenu/>
    }

    return (
        <div className='flex justify-between items-center h-24 pt-10 px-8 mx-auto text-black'>
                            <div className="p-4"><Avatar /></div>

            <ul className='cursor-pointer font-poppins hidden md:flex lg:flex'>
                <li className='p-4 hover:text-red-500 '>Home</li>
                <li className='p-4 hover:text-red-500 '>My projects</li>
                <li className='p-4 hover:text-red-500 '>About Me</li>

            </ul>

            <div className=" md:hidden lg:hidden" onClick={handleNav}>
                
                {!nav ? <MdClose className="text-black" size={25} /> : <FiMenu size={25} />}
            </div>

            {mobile}

        </div>




    )
}
export default Navbar;