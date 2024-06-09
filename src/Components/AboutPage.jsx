import phone1 from '../pictures/phone1.png'
import phone2 from '../pictures/phone2.png'
import phone3 from '../pictures/Phone3.png'
import star from '../pictures/star-05.png'
import cube from '../pictures/cube-02.png'
import icon from '../pictures/Icon.png'
import notify from '../pictures/notify.png'
import circle from '../pictures/circle.png'
import blob from '../pictures/blob.png'

export default function AboutPage() {

    return <>

        <div id='feature' >
            <div   className="phone1-div  flex md:flex-col sm:flex-col xs:flex-col    items-center">
                <div className="phone-img-div flex justify-end h-full w-1/2 md:w-auto sm:w-auto xs:w-auto   ">
                    <img src={phone1} alt="" className='h-full' />

                </div>
                <div className="app-desc-div flex flex-col justify-start relative  h-full w-1/2  md:px-2 sm:px-2 xs:px-2 sm:w-full xs:w-full  md:w-full   ">
                    <div className='blob-div -z-50 absolute left-[70%] top-52 '>
                        <img src={blob} alt="" className='' />
                    </div>

                    <h2 className='text-[#ff5555] font-semibold tracking-widest'>FEATURES</h2>
                    <h1 className='font-black text-5xl '>Uifry Premium</h1>

                    <div className='lg:pr-32 xl:pr-32 pr-32 md:pr-0 sm:pr-0 xs:pr-0 '>
                        <div className='mt-10 text-start'>
                            <div className='flex flex-row gap-2  items-center'>
                                <img src={star} alt="" className='h-full' />
                                <h2 className='font-bold text-xl'>Budgeting Intervals</h2>
                            </div>

                            <div className='mt-5 text-justify flex'>
                                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                            </div>
                        </div>
                        <div className='mt-10 text-start'>
                            <div className='flex flex-row gap-2 '>
                                <img src={cube} alt="" className='h-full' />
                                <h2 className='font-bold text-xl'>Budgeting Intervals</h2>
                            </div>

                            <div className='mt-5 text-justify flex items-center'>
                                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                            </div>

                        </div>
                        <div className='mt-10 text-start'>
                            <div className='flex flex-row gap-2 items-center  '>
                                <img src={icon} className='h-full' alt="" />
                                <h2 className='font-bold text-xl'>Budgeting Intervals</h2>
                            </div>

                            <div className='mt-5 text-justify flex'>
                                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="phone2-div h-[90vh] flex flex-row md:h-auto sm:h-auto xs:h-auto  md:flex-col sm:flex-col xs:flex-col ">

                <div className="app-desc-div flex items-center md:items-start sm:items-start xs:items-start flex-col mt-28 h-full w-1/2 md:w-full sm:w-full xs:w-full  ">
                    <div className='md:px-2 sm:px-2 xs:px-2'>
                        <h2 className='text-[#ff5555] font-semibold tracking-widest'>ADVANTAGES</h2>
                        <h1 className='font-black text-5xl '>Why Choose Uifry?</h1>
                    </div>
                    <div className='flex flex-col mt-5  ml-40 md:ml-0 sm:ml-0 xs:ml-0 md:px-2 sm:px-2 xs:px-2  '>
                        <div className='flex flex-row items-center justify-normal gap-5'>
                            <img src={notify} alt="" className='h-full' />
                            <h1 className='text-2xl font-bold'>Clever Notifications</h1>
                        </div>

                        <div className='mt-5'>

                            <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
                        </div>


                    </div>



                </div>
                <div className="phone-img-div flex justify-start h-full w-1/2 md:w-auto sm:w-auto xs:w-auto md:justify-center  ">

                    <img src={phone2} alt="" className='h-full' />


                </div>
            </div>
            <div className="phone3-div h-[90vh] flex flex-row md:h-auto sm:h-auto xs:h-auto  md:flex-col sm:flex-col xs:flex-col ">
                <div className="phone-img-div flex justify-end h-full w-1/2 md:w-auto sm:w-auto xs:w-auto  ">

                    <img src={phone3} alt="" className='h-full' />


                </div>

                <div className="app-desc-div flex items-center flex-col mt-28 h-full w-1/2 md:w-full sm:w-full xs:w-full  ">

                    <div className='flex flex-col mt-5 mr-40 md:mr-0 sm:mr-0 xs:mr-0 md:px-2 sm:px-2 xs:px-2   '>
                        <div className='flex flex-row items-center justify-normal gap-5'>
                            <img src={circle} alt="" className='h-full' />
                            <h1 className='text-2xl font-bold'>Fully Customizable</h1>
                        </div>

                        <div className='mt-5'>

                            <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
                        </div>


                    </div>



                </div>

            </div>
        </div>



    </>

}