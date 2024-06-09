import Ellipse from '../pictures/blob.png'
import playbtn from '../pictures/playbtn.png'
import azlogo from '../pictures/LandingPageImg.png'
import iphones from '../pictures/iphones.png'

export default function LandingPage(){

    return <>
        <div className='container flex  mt-8 gap-2 md:flex-wrap sm:flex-wrap ' id='home'>

        
        <div className='  pl-[15vw] w-[60vw]  md:w-[100vw] xs:w-[100vw] xs:pl-0 xs:justify-center sm:w-[100vw] md:pl-0 sm:pl-0   '>
                <div className='h-80 w-80 -z-50 absolute left-[22vw]' >
                    <img  src={Ellipse} alt="" className=' bg-cover h-full w-full ' />
                   
                </div>
                <div className='xs:w-[100vw] sm:px-5 xs:px-5 md:w-[100vw] sm:w-[100vw] flex flex-col md:justify-center  md:text-center'>
                <h1  className='text-7xl font-black leading-none tracking-tighter' >Make The Best  Financial Decisions</h1>
                
                <h2 className='mt-8 text-base opacity-95 font-medium'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet <br /> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</h2>

                <div className=' flex  items-center gap-6 mt-4  md:items-center md:justify-center'>
                <button className='bg-black text-white h-full px-6 py-3 rounded-md hover:bg-[#ff5555] transition-all ease-in-out cursor-pointer duration-200'>Get started</button>
                <div className='circle-div  flex items-center gap-4  '> 
                        <div className='cursor-pointer' >
                                <img src={playbtn} alt="" />
                        </div>
                        <div>
                            <h2>Watch video</h2>
                        </div>

                </div>
                </div>

                </div>

               <div className='landingpage-image-div h-[50vh] items-center  md:w-screen sm:w-screen md:h-auto flex justify-center  '>

                <img src={azlogo} alt="" className='h-full xs:h-auto sm:h-auto' />

                </div>     
        </div>




        <div className='mobile-div  h-[90vh] flex justify-center  sm:h-auto '>
            <img src={iphones} alt="" className='object-contain h-full' />
        </div>
    
        </div>
    
    </>
}