
import footer from '../pictures/footer.png'
import blob from '../pictures/blob.png'
import logo from '../pictures/logo.png'

export default function Footer(){


    return <>   
    <div className='mt-20  '>
        <div className="footer-img-div  flex justify-center ">
            
            <div className='footerimg  relative'>
            <div className='blob-div  absolute -z-50 -top-10 left-[-200px] '>
                <img src={blob} alt="" />
            </div>
                <img src={footer} alt="" />

            </div>
        </div>

        <div className="footerdiv flex justify-center items-center mt-20  ">
            <div className='w-[80vw]  flex  justify-around md:w-screen xs:w-screen xs:flex-col xs:gap-10 xs:px-4' >
                <div>
                <img src={logo} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200'>Links</h1>
                    <ul className='font-semibold mt-4 flex  flex-col gap-3 cursor-pointer'>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Home</li>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>About us</li>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Booking</li>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Blog</li>
                    </ul>
                   
                </div>
                <div>
                    <h1 className='text-2xl font-bold  cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200' >Legal</h1>
                    <ul className='font-semibold mt-4 flex  flex-col gap-3'>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Terms of use</li>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Privacy policy</li>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Cookie policy</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-bold  cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200'>Product</h1>
                    <ul className='font-semibold mt-4 flex  flex-col gap-3'>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Take Tour</li>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Live chat</li>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Reviews</li>
                    </ul>
                </div>
                <div className='flex flex-col items-center '>
                    <h1 className='text-2xl  font-bold  cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200'>News Letter</h1>
                    <ul className='font-semibold mt-4 flex  flex-col gap-3'>
                    <li className='cursor-pointer hover:text-[#ff5555] transition-all ease-in-out duration-200 '>Stay Up To Date</li>
                    </ul>
                    <button className='bg-black text-white mt-4  px-6 py-3 rounded-md hover:bg-[#ff5555] transition-all ease-in-out cursor-pointer duration-200'>Subscribe</button>
                </div>
               

            </div>
        </div>
    </div>
    
    
    
    
    </>

}