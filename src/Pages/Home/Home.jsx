import React, { useEffect, useState } from 'react';
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
import Cards from './Cards';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    const [data, setToys] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-11-server-eight-eosin.vercel.app/categoryTab?category=Trucks', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    },[]);
    const handleCategory = event => {
        const category = event.target.innerText;
        console.log(category);
        fetch(`https://assignment-11-server-eight-eosin.vercel.app/categoryTab?category=${category}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Home</title>
            </Helmet>
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
            <Tabs className='lg:my-12 my-5'>
                <TabList onClick={handleCategory}>
                    <Tab>Trucks</Tab>
                    <Tab>Sports Cars</Tab>
                    <Tab>Sedans</Tab>
                </TabList>

                <TabPanel className='mt-7'>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-8 lg:gap-5'>
                        {
                            data.map(truck => <Cards
                                key={truck._id}
                                truck={truck}
                            ></Cards>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
                        {
                            data.map(truck => <Cards
                                key={truck._id}
                                truck={truck}
                            ></Cards>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
                        {
                            data.map(truck => <Cards
                                key={truck._id}
                                truck={truck}
                            ></Cards>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            {/* Section 2nd */}
            <div className='mt-5'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-96 lg:w-full mx-auto">
                    {/* 1st div */}
                    <div className="bg-[#FCE2AD] rounded-xl">
                        <div className="flex">
                            <div className=" text-start relative lg:top-12 lg:left-9 left-10 top-2">
                                <h2 className="text-lg lg:text-2xl text-[#DC5C33] ">Spring Sales!!!</h2>
                                <h1 className="text-lg lg:text-xl text-white ">All Types of  Sports Cars <span className='text-[#DC5C33]'>50%</span> OFF !</h1>
                                <button className='text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-1.5 text-center relative top-1 lg:top-2'>SHOP NOW </button>
                            </div>
                            <div className="relative lg:left-8 lg:top-10">
                                <img src="https://i.ibb.co/ftGQfq6/model-car-g6abd7a85b-1920-removebg-preview.png" className='animate-bounce duration-50
                            0' />
                            </div>
                        </div>
                    </div>

                    {/* 2nd div */}
                    <div className="flex bg-[#FCE2AD] rounded-xl">
                        <div className="text-start relative lg:top-14 lg:left-9 left-10 top-3">
                            <h2 className="text-lg lg:text-2xl text-[#DC5C33]">Spring Sales!!!</h2>
                            <h1 className="text-lg lg:text-xl text-white">All Type of RC Toy Cars <span className='text-[#DC5C33]'>35%</span> OFF !</h1>
                            <button className='text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-1.5 text-center relative top-1 lg:top-2'>SHOP NOW</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/zrWNL71/car-63930-960-720-removebg-preview.png" className='animate-pulse relative left-5' alt="" />
                        </div>
                    </div>
                    {/* 3rd div */}
                    <div className="flex bg-[#FCE2AD] rounded-xl">
                        <div className="text-start relative lg:top-12 lg:left-9 left-10 top-8">
                            <h2 className="text-lg lg:text-2xl text-[#DC5C33]">Spring Sales </h2>
                            <h1 className="text-lg lg:text-xl text-white">All Type of SUV Toy Cars <span className='text-[#DC5C33]'>45%</span>OFF!</h1>
                            <button className='text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-3 py-1.5 text-center relative top-1 lg:top-2' >SHOP NOW </button>
                        </div>
                        <div className="pt-10 ">
                            <img src="https://i.ibb.co/PNxFSyn/model-car-gab6833f9d-1920-removebg-preview.png" className='animate-bounce relative left-5 lg:left-0' alt="" />
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 lg:mt-10 w-96 mx-auto lg:w-full">
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