import { FiMenu } from "react-icons/fi";
import Avatar from "./Avatar";
import {useState} from 'react';
const Navbar = () => {
    const [nav, setNav] = useState=(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (

        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
             
            <ul className='font-poppins flex hidden '> 
            <div className="p-4"><Avatar/></div>
                <li className='p-4'>Home</li>
                <li className='p-4'>My projects</li>
                <li className='p-4'>About Me</li>
                
            </ul>
            
        <div/>
      
        <div>
            <FiMenu className="text-white" size={25}/>
            </div>
        <div className=" font-poppins fixed left-0 top-4 w-[60%]  bg-[#1a1313]">
        <div className="p-4"><Avatar/></div>
            <ul className=" uppercase"> 
         
                <li className='p-4 border-b border-red-900'>Home</li>
                <li className='p-4 border-b border-red-900'>My projects</li>
                <li className='p-4 border-b border-red-900'>About Me</li>    
        </ul>
            

        </div>
        </div>

     
            
       
    )
}
export default Navbar;