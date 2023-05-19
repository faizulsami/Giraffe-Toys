import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { RiVisaFill } from 'react-icons/ri';
import { FaShippingFast } from 'react-icons/fa';
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

const Home = () => {
    return (
        <div className='container mx-auto'>
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