import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const options = [
        { label: 'Trucks', value: 'Trucks' },
        { label: 'Sports Cars', value: 'Sports Cars' },
        { label: 'Sedans', value: 'Sedans' },
    ];
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const sellerName = form.supplier.value;
        const sellerEmail = form.email.value;
        const picture = form.photo.value;
        const category = form.subCategory.value;
        const ratings = form.rating.value;
        const price = form.price.value;
        const description = form.details.value;
        const newToy = { name, category, price, description, ratings, picture, sellerEmail, sellerName, quantity };
        fetch('https://assignment-11-server-eight-eosin.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className='container mx-auto my-5'>
            <Helmet>
                <title>Add A Toys</title>
            </Helmet>
            <div className="color rounded-2xl lg:p-24 p-10">
                <h2 className="text-3xl font-extrabold text-center mb-6">Add A Toy</h2>
                <form onSubmit={handleAddToy}>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={user?.displayName} type="text" name="supplier" placeholder="Seller Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={user?.email} type="email" name="email" placeholder="Seller Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <select name='subCategory' className="input-group input-bordered lg:ms-3 ms-2 lg:w-96 w-52">
                                {
                                    options.map(option => (
                                        <option key={option.label} value={option.value}>{option.label}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Picture URL of the toy</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Toy" className="text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-center" />
                </form>
            </div>
        </div>
    );
};

export default AddAToy;