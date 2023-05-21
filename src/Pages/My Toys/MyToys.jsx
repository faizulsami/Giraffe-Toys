import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [myToys, setToys] = useState([]);
    useEffect(()=>{
        fetch(`https://assignment-11-server-eight-eosin.vercel.app/myToys?sellerEmail=${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    },[user]);
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>My Toys</title>
            </Helmet>
            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase color4 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Available quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Detail description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => {
                                const {price, quantity, _id,description } = toys;
                                return (
                                    <tr key={_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {price}
                                        </th>
                                        <td className="px-6 py-4">
                                            {quantity}
                                        </td>
                                        <td className="px-6 py-4">
                                            {description}
                                        </td>
                                        <td className="px-6 py-4">

                                        </td>
                                        <td className="px-6 py-4">
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;