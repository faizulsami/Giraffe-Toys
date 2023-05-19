import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { RiVisaFill } from 'react-icons/ri';
import { FaShippingFast } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.gif'
import banner3 from '../../images/banner3.gif'
import pic1 from '../../images/gell1.jpg'
import pic2 from '../../images/gell2.jpg'
import pic3 from '../../images/gell3.jpg'
import pic4 from '../../images/gell4.jpg'
import pic5 from '../../images/gell5.jpg'
import pic6 from '../../images/gell6.jpg'
import pic7 from '../../images/gell7.jpg'
import pic8 from '../../images/gell8.jpg'
import pic9 from '../../images/gell9.jpg'
import pic10 from '../../images/gell10.jpg'
import pic11 from '../../images/gell11.jpg'
import pic12 from '../../images/gell12.jpg'
import { Button } from 'flowbite-react';

const Home = () => {
    return (
        <div className='container mx-auto'>
            {/* Banner Part */}
            <div className=" lg:grid grid-cols-12 lg:gap-5 lg:mt-10 mt-3">
                {/* 1st div */}
                <div className="col-span-8 to-yellow-500">
                    <img src={banner2} className='lg:rounded-3xl' />
                </div>
                <div className="col-span-4 grid lg:gap-5">
                    {/* 2nd div */}
                    <div className='lg:ms-12'>
                        <img src={banner1} className='lg:w-11/12 lg:rounded-2xl' />
                    </div>
                    {/* 3rd div */}
                    <div className="">
                        <div>
                            <img src={banner3} className='lg:rounded-2xl' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Tab Container */}
            <Tabs className='lg:mt-5'>
                <TabList>
                    <Tab>Trucks</Tab>
                    <Tab>Sports Cars</Tab>
                    <Tab>Sedans</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            {/* Section 2nd */}
            <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1st div */}
                <div className="bg-[#FCE2AD] rounded-xl">
                    <div className="flex">
                        <div className="p-3 md:pt-32 text-center">
                            <h2 className="text-xl md:text-2xl text-[#DC5C33] font-bold">Sparing Sales </h2>
                            <h1 className="text-3xl text-white font-bold">All Type of  Sports Cars <span className='text-[#DC5C33]'>50%</span> OFF !</h1>
                            <div className="ps-10 md:ps-16 pt-3 md:pt-6">  <Button  className='bg-[#25779C]'>SHOP NOW  </Button></div>
                        </div>
                        <div className="w-96 pt-20">
                            <img src="https://i.ibb.co/0rFP6Hj/model-car-2731662-960-720-removebg-preview.png" className='animate-bounce duration-50
                            0' />
                        </div>
                    </div>
                </div>

                {/* 2nd div */}
                <div className="flex bg-[#FCE2AD] rounded-xl">
                    <div className="p-3 md:pt-24 text-center">
                        <h2 className="text-xl md:text-2xl text-[#DC5C33] font-bold">Sparing Sales </h2>
                        <h1 className="text-3xl  text-white font-bold">All Type of SUV Toy Cars <span className='text-[#DC5C33]'>35%</span> OFF !</h1>
                        <div className="ps-10 md:ps-14 pt-3 md:pt-6">  <Button  className='bg-[#25779C]'>SHOP NOW  </Button></div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/zrWNL71/car-63930-960-720-removebg-preview.png" className='animate-pulse' alt="" />
                    </div>
                </div>
                {/* 3rd div */}
                <div  className="flex bg-[#FCE2AD] rounded-xl">
                <div className="p-3 md:pt-24 text-center">
                        <h2 className="text-xl md:text-2xl font-bold text-[#DC5C33]">Sparing Sales </h2>
                        <h1 className="text-3xl  text-white font-bold">All Type of SUV Toy Cars <span className='text-[#DC5C33]'>45%</span> OFF !</h1>
                        <div className="ps-10 md:ps-14 pt-3 md:pt-6">  <Button  className='bg-[#25779C]' >SHOP NOW  </Button></div>
                    </div>
                    <div className="pt-10 ">
                        <img src="https://i.ibb.co/d2Syq34/toys-1064262-960-720-removebg-preview.png" className='animate-bounce' alt="" />
                    </div>
                </div>
            </div>
        </div>
            {/*Payment Details Section*/}
            <div className="lg:flex ps-14  justify-around lg:mt-10 bg-primary py-20 pt-28 lg:rounded-3xl">
                <div className="flex mb-8">
                    <div>
                        <h1 className='text-6xl text-[#FCE2AD] px-3'><AiOutlineWechat></AiOutlineWechat></h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">SUPPORT 24/7</h1>
                        <p className="font-semibold">Delicated 24/7 Support</p>
                    </div>

                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#FCE2AD] text-5xl'><BsFillBoxSeamFill></BsFillBoxSeamFill></h1></div>
                    <div>
                        <h1 className="text-xl font-bold">
                            EASY RETURNS
                        </h1>
                        <p className="font-semibold">Shop With Confidence</p>
                    </div>

                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#FCE2AD] text-6xl'><RiVisaFill></RiVisaFill></h1></div>
                    <div><h1 className="text-xl font-bold">CARD PAYMENT</h1>
                        <p className="font-semibold">12 Months Installments</p>
                    </div>

                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-[#FCE2AD] text-6xl'><FaShippingFast></FaShippingFast></h1></div>
                    <div><h1 className="text-xl font-bold">FREE SHIPPING</h1>
                        <p className="font-semibold">Capped at $50 per order</p>
                    </div>
                </div>
            </div>
            {/* Gallery Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 lg:mt-10">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic1} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic2} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic3} />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic4} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic5} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic6} />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic7} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic8} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic9} />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic10} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic11} />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={pic12} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;