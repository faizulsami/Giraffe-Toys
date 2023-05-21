import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import noPicture from '../../images/Image_not_available.png'

const Cards = ({ truck }) => {
    const {
        name,
        price,
        ratings,
        picture,
        quantity,
        _id,
    } = truck;
    return (
        <div>
            <Card data-aos="zoom-out"
                className="transform transition duration-500 hover:scale-110 color w-80 lg:w-full mx-auto"
                imgSrc={picture ? picture : noPicture}
            >
                <h2 className="lg:text-2xl color3">{name}</h2>
                <p className="lg:text-lg"><span className="color3">Price: </span>${price}</p>
                <p className=""><span className="color3">Available quantity:</span> {quantity}</p>
                <div className="flex justify-between">
                    <p><span className="color3">Rating:</span> {ratings}</p>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.round(ratings || 0)}
                        readOnly
                    />
                </div>
                <button type="button" className="text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "><Link to={`/view_details/${_id}`}>View Details</Link></button>
            </Card>
        </div>
    );
};

export default Cards;
