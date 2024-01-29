import { useEffect } from "react";

const MobileMenu = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])
    return (<div className=" ease-in-out duration-500 lg:hidden font-poppins fixed top-[100px] w-[90%] h-[100%] bg-[#ffffff]">
        <ul className=" text-black uppercase">

            <li className='p-4 border-b border-red-900'>Home</li>
            <li className='p-4 border-b border-red-900'>My projects</li>
            <li className='p-4 border-b border-red-900'>About Me</li>
        </ul>
    </div>)
};

export default MobileMenu;