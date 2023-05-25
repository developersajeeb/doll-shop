import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import Swal from 'sweetalert2';
import useTitle from '../hooks/useTitle';

const options = [
    { value: 'Teddy-Bear', label: 'Teddy Bear' },
    { value: 'Dog-Teddy', label: 'Dog Teddy' },
    { value: 'Cat-Teddy', label: 'Cat Teddy' },
];

const AddDoll = () => {
    useTitle("Add Doll")
    const [selectedOption, setSelectedOption] = useState(null);
    

    const handleAddDoll = event => {
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
        const newDoll = { productName, sellerName, email, price, rating, quantity, details, subCategory, photo };
        console.log(newDoll);

        fetch('https://doll-shop-server-a11.vercel.app/dolls', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDoll)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Uploaded!',
                        'You product has been uploaded successfully !',
                        'success'
                    )
                }
            })
    }

    return (
        <main className="mx-5 my-10 md:mx-16 md:my-16 lg:mx-36 lg:my-20">
            <h1 className="text-center text-5xl font-extrabold">Add A Doll</h1>
            <form className='mt-10' onSubmit={handleAddDoll}>
                <div className="grid md:grid-cols-2 items-center gap-6">
                    <div>
                        <label className='block text-gray-400' htmlFor="productName">Product Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-2 focus:border-[#987654]' type="text" name='productName' id='' required />
                    </div>
                    <div>
                        <label className='block text-gray-400' htmlFor="sellerName">Seller Name</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-2 focus:border-[#987654]' type="text" name="sellerName" id="" required />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 items-center gap-6">
                    <div>
                        <label className='block text-gray-400 mt-4' htmlFor="email">Email</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="email" name="email" id="" required />
                    </div>
                    <div>
                        <label className='block text-gray-400 md:mt-4' htmlFor="price">Price</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' step="0.1" type="text" name="price" id="" required />
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
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="text" name="rating" id="" required />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 items-center gap-6'>
                    <div>
                        <label className='block text-gray-400 mt-4' htmlFor="quantity">Available Quantity</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="number" name="quantity" id="" required />
                    </div>
                    <div>
                        <label className='block text-gray-400 md:mt-4' htmlFor="photo">Photo URL</label>
                        <input className='border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]' type="url" name="photo" id="" required />
                    </div>
                </div>

                <label className='block text-gray-400 mt-4' htmlFor="details">Detail Description</label>
                <textarea className="border-2 border-gray-300 rounded-md w-full p-2 mt-2 focus:border-[#987654]" name="details" id="" cols="30" rows="8" required></textarea>
                <button type='submit' className='bg-[#987654] w-full p-2 mt-6 rounded-md text-lg text-white font-bold'>Upload</button>
            </form>
        </main>
    );
};

export default AddDoll;