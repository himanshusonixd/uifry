import groupimg from '../pictures/groupimg.png'
import blob from '../pictures/blob.png'
import nick from '../pictures/nick.png'




export default function Testimonial(){

    return <>
    <div id='about' className=" flex mt-10 flex-wrap items-center flex-col md:mt-16 sm:mt-16 xs:mt-20 ">
        <div className='mt-0'>
            <h4 className="font-semibold tracking-widest text-center">TESTIMONIAL</h4>
                <h1 className="font-black text-5xl text-center">What Our Users <br /> Say About Us ?</h1>
        </div>

        <div className='md:flex-wrap sm:flex-wrap xs:flex-wrap flex mt-10  gap-10 w-[60vw] items-center   '>
            <div className="group-img-div relative justify-center flex items-center     ">
            <div className='-z-50 absolute'>
                <img src={blob} alt="" />
            </div>
                <div className='h-[500px] w-[500px] md:h-auto md:w-auto sm:h-auto sm:w-auto xs:h-auto xs:w-auto'>
                <img src={groupimg} alt="" className='max-w-full h-auto' />
                </div>
             
                
            </div>
            <div className="testimonial-div flex flex-col  justify-center">
                    <h1 className='font-extrabold text-2xl'>The Best Financial Accounting <br /> App Ever!</h1>

                    <p className='text-[#7F7F7F] mt-4'>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”</p>

                    <div className='mt-4'> 
                        <img src={nick} alt="" />
                    </div>

                    <span className='mt-4 font-extrabold'>
                        Nick jonas
                    </span>

            </div>
        </div>
    </div>
    </>



}