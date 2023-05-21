import CountUp from 'react-countup';
import { useLoaderData } from "react-router-dom";

const View_Details = () => {
    const details = useLoaderData();
    const { picture, ratings, sellerName, sellerEmail, name, quantity, description, price } = details;
    return (
        <div className="container mx-auto">
            <img className="w-full h-auto max-w-xl rounded-3xl lg:mt-8 mt-4 mx-auto" src={picture} alt="image description"/>
            <div className="mt-8 ms-3 lg:ms-0">
            <p className="lg:text-4xl color3">{sellerName}</p>
            <p className="lg:text-2xl">{sellerEmail}</p>
            <p className="lg:text-xl text-gray-500">{description}</p>
            </div>
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-4 mt-7 lg:mt-12">
                <div className="border shadow-2xl lg:p-12 p-14 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg text-gray-500">Name</p>
                    <p className="text-4xl">{name}</p>
                </div>
                <div className="border shadow-2xl lg:p-14 p-16 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg lg:mt-4 text-gray-500">Quantity</p>
                    <p className="text-4xl"><CountUp start={0} end={quantity} delay={0}></CountUp></p>
                </div>
                <div className="border shadow-2xl lg:p-14 p-16 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg lg:mt-4 text-gray-500">Ratings</p>
                    <p className="text-4xl"><CountUp start={0} end={ratings} delay={0} decimals={1}></CountUp></p>
                </div>
                <div className="border shadow-2xl lg:p-14 p-16 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg lg:mt-4 text-gray-500">Price</p>
                    <p className="text-4xl">$<CountUp start={0} end={price} delay={0}></CountUp>/pc</p>
                    
                </div>
            </div>
        </div>
    );
};

export default View_Details;