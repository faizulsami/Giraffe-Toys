import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
    const allToys = useLoaderData();
    const [search, setSearch] = useState('');
    return (
        <div className='container mx-auto mt-5'>
            <Helmet>
                <title>All Toys</title>
            </Helmet>
            <div className="input-group flex justify-end">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered w-56 color" />
                <button className="btn btn-square ms-3 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase color4 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Seller
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Toy Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sub-category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Available Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.filter(item => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                            }).map(toys => {
                                const { sellerName, name, category, price, quantity, _id } = toys;
                                return (
                                    <tr key={_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {sellerName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {category}
                                        </td>
                                        <td className="px-6 py-4">
                                            {price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {quantity}
                                        </td>
                                        <td className="px-6 py-4">
                                        <button type="button" className="text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "><Link to={`/view_details/${_id}`}>View Details</Link></button>
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

export default AllToys;