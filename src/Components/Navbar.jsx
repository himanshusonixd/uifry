import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../pictures/logo.png'
import menu from '../pictures/menu.png'
import close from '../pictures/close.png'
import { motion } from "framer-motion"
import { useState } from 'react'



export default function Navbar() {
    const [isopen, setisopen]=useState(false);

    function toggleMenu(){

    setisopen(!isopen);

    }


    return <>
        <div className='flex justify-center items-center'>


            <div className='flex  w-[75vw]  md:w-[95vw] sm:w-[95vw] xs:w-[95vw] mt-6 justify-between  '>
                <div className='logodiv flex gap-20 items-center '>
                    <img src={logo} alt="" />
                    <div className='itemdiv items-center '>
                        
                        
                        <ul className='flex gap-10 font-semibold text-lg xs:hidden sm:hidden md:hidden   '>
                            <AnchorLink href='#home'><li className='text-[#ff5555] cursor-pointer hover:scale-125 transition-all duration-100 ease-in font-bold'>Home</li></AnchorLink>
                            <AnchorLink href='#about'><li className='hover:text-[#ff5555] hover:scale-125 transition-all ease-in cursor-pointer duration-200'>About us</li></AnchorLink>
                            <AnchorLink href='#faq'>  <li className='hover:text-[#ff5555] hover:scale-125 transition-all ease-in cursor-pointer duration-200'>Pricing</li></AnchorLink>
                           <AnchorLink href='#feature'><li className='hover:text-[#ff5555] hover:scale-125 transition-all ease-in cursor-pointer duration-200'>Features</li></AnchorLink>
                            
                        </ul>
                        
                    </div>
                </div>
               

                <div className='download-btn flex gap-5 items-center'>
                <div onClick={toggleMenu} className='h-10 w-10  items-center justify-center hidden md:block sm:block xs:block border border-black p-1 rounded-lg '>
                    <div className='transition-all ease-in-out
                duration-200'>
                    {isopen ? <img src={close}alt=""  /> :  <img src={menu}alt=""  /> }
                    </div>
                    
                       
                        
                        </div>
                    <button  className='bg-black text-white h-full px-6 py-3 rounded-md hover:bg-[#ff5555] transition-all ease-in-out cursor-pointer duration-200'>Download</button>
                </div>
            </div>
            
        </div>
        {isopen &&
        <motion.div className='items-center flex justify-center h-32 ' initial={{y:0}} animate={{y:10}} transition={{type:'spring', duration:0.8}} > 
        <div className='itemdiv items-center '>
                        
                        
                        <ul className='flex gap-10 font-semibold text-lg transition-all ease-in-out duration-300   '>
                            <AnchorLink href='#home'><li className='text-[#ff5555] cursor-pointer hover:scale-125 transition-all duration-100 ease-in font-bold'>Home</li></AnchorLink>
                            <AnchorLink href='#about'><li className='hover:text-[#ff5555] hover:scale-125 transition-all ease-in cursor-pointer duration-200'>About us</li></AnchorLink>
                            <AnchorLink href='#faq'>  <li className='hover:text-[#ff5555] hover:scale-125 transition-all ease-in cursor-pointer duration-200'>Pricing</li></AnchorLink>
                           <AnchorLink href='#feature'><li className='hover:text-[#ff5555] hover:scale-125 transition-all ease-in cursor-pointer duration-200'>Features</li></AnchorLink>
                            
                        </ul>
                        
                    </div>
             
        </motion.div> 
}
    </>



}