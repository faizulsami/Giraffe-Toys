import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setToys] = useState([]);
    useEffect(() => {
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
    }, [user]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-eight-eosin.vercel.app/allToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
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
                                const { price, quantity, _id, description } = toys;
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
                                            <button type="button" className="text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "><Link to={`/update/${_id}`}>Update</Link></button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleDelete(_id)}
                                                type="button" className="text-white color5 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Delete</button>
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