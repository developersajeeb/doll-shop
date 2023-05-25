import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import useTitle from "../hooks/useTitle";

const Details = () => {
    useTitle("Details")
    const {photo, productName, details, rating, price, sellerName, email, quantity} = useLoaderData();

    return (
        <main className="border-2 border-[#f1dabe] md:w-[1100px] my-16 mx-4 md:mx-auto md:my-28 grid md:grid-cols-2 gap-8 items-center p-4 rounded-lg">
            <div>
                <img className="rounded-lg" src={photo} alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-700">{productName}</h1>
                <p className="mt-4 font-medium text-gray-600">{details}</p>
                <p className="flex items-center gap-2 text-orange-400"><FaStar /> {rating}</p>
                <p className="mt-4 font-semibold">Seller Name: {sellerName}</p>
                <p className="text-sm">Seller Email: {email}</p>
                <p className="mt-4 text-[#987654]">Quantity: {quantity}</p>
                <h2 className="font-bold text-xl">Price: ${price}</h2>
                <button className="bg-[#987654] text-white py-2 px-4 rounded-full mt-4 flex items-center gap-3 text-sm">ADD TO CART <FaShoppingCart size={20}/></button>
            </div>
        </main>
    );
};

export default Details;