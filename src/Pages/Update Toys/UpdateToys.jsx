import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
    const toy = useLoaderData();
    const { price, description, quantity, _id } = toy;
    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.details.value;
        const updatedToy = { price, description, quantity }
        fetch(`https://assignment-11-server-eight-eosin.vercel.app/allToys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId > 0) {
                //     Swal.fire({
                //         title: 'Custom width, padding, color, background.',
                //         width: 600,
                //         padding: '3em',
                //         color: '#716add',
                //         background: '#fff url(/images/trees.png)',
                //         backdrop: `
                //         rgba(0,0,123,0.4)
                //         url("/images/nyan-cat.gif")
                //         left top
                //         no-repeat
                //         `
                //     })
                // }
            })
    }
    return (
        <div className="mx-auto container my-5">
            <Helmet>
                <title>Update Toy</title>
            </Helmet>
            <div className="color rounded-2xl lg:p-24 p-10">
                <h2 className="text-3xl font-extrabold text-center mb-6">Update Toy</h2>
                <form onSubmit={handleUpdateToy}>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={price} type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={quantity} type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={description} type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Toy" className="text-white color2 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-center" />
                </form>
            </div>
        </div>
    );
};

export default UpdateToys;