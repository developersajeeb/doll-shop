import { useState } from 'react';
import Swal from 'sweetalert2';
import CreatableSelect from 'react-select/creatable';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const options = [
    { value: 'Teddy-Bear', label: 'Teddy Bear' },
    { value: 'Dog-Teddy', label: 'Dog Teddy' },
    { value: 'Cat-Teddy', label: 'Cat Teddy' },
];

const UpdateDolls = () => {
    useTitle('Update Doll')
    const [selectedOption, setSelectedOption] = useState(null);
    const singleDoll = useLoaderData();
    const { _id, photo, productName, sellerName, quantity, price, details, email, rating } = singleDoll;

    const handleUpdateDoll = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const subCategory = form.subCategory.value;
        const photo = form.photo.value;
        const updateDoll = { productName, sellerName, email, price, rating, quantity, details, subCategory, photo };
        console.log(updateDoll);

        fetch(`https://doll-shop-server-a11.vercel.app/doll/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoll)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire(
                        'Successfully Updated!',
                        'Doll info updated successfully !',
                        'success'
                    )
                }
            })
    }

    return (
        <main className="mx-5 my-10 md:mx-16 md:my-16 lg:mx-36 lg:my-20">
            <h1 className="text-center text-5xl font-extrabold">Update Doll</h1>
            <form className='mt-10' onSubmit={handleUpdateDoll}>
                <div className="grid md:grid-cols-2 items-center gap-6">
                    <div>
                        <label className='block text-gray-400' htmlFor="productName">Product Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-2 focus:border-[#987654]' type="text" name='productName' id='' required defaultValue={productName}/>
                    </div>
                    <div>
                        <label className='block text-gray-400' htmlFor="sellerName">Seller Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-2 focus:border-[#987654]' type="text" name="sellerName" id="" required defaultValue={sellerName}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 items-center gap-6">
                    <div>
                        <label className='block text-gray-400 mt-4' htmlFor="email">Email</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="email" name="email" id="" required defaultValue={email}/>
                    </div>
                    <div>
                        <label className='block text-gray-400 md:mt-4' htmlFor="price">Price</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' step="0.1" type="text" name="price" id="" required defaultValue={price}/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 items-center gap-6">
                    <div>
                        <label className='block text-gray-400 mt-4' htmlFor="subCate">Sub Category</label>
                        <CreatableSelect
                            name='subCategory'
                            className='rounded-md w-full mt-2 focus:border-[#987654]'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-400 md:mt-4' htmlFor="rating">Rating</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="text" name="rating" id="" required defaultValue={rating}/>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 items-center gap-6'>
                    <div>
                        <label className='block text-gray-400 mt-4' htmlFor="quantity">Available Quantity</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="number" name="quantity" id="" required defaultValue={quantity}/>
                    </div>
                    <div>
                        <label className='block text-gray-400 md:mt-4' htmlFor="photo">Photo URL</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="url" name="photo" id="" required defaultValue={photo}/>
                    </div>
                </div>

                <label className='block text-gray-400 mt-4' htmlFor="details">Detail Description</label>
                <textarea className="border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]" name="details" id="" cols="30" rows="8" required defaultValue={details}></textarea>
                <button type='submit' className='bg-[#987654] w-full p-2 mt-6 rounded-md text-lg text-white font-bold'>Upload</button>
            </form>
        </main>
    );
};

export default UpdateDolls;