import { FaTruck, FaSyncAlt, FaGift, FaStar } from "react-icons/fa";

const OurService = () => {
    return (
        <section className="mb-28">
            <h1 className="text-center text-5xl font-extrabold">Our Services</h1>
            <div className="grid md:grid-cols-4 gap-8 mt-10">
                <div className="text-center">
                    <figure className="text-[#C19A6B] border-2 border-[#C19A6B] inline-block p-3 rounded-full"><FaTruck size={35}/></figure>
                    <h4 className="font-bold text-xl my-1 hover:text-[#987654] duration-300">Free Shipping</h4>
                    <p className="font-semibold text-gray-600">No Cost Shipping Option</p>
                </div>
                <div className="text-center">
                    <figure className="text-[#C19A6B] border-2 border-[#C19A6B] inline-block p-3 rounded-full"><FaSyncAlt size={35}/></figure>
                    <h4 className="font-bold text-xl my-1 hover:text-[#987654] duration-300">Return Policy</h4>
                    <p className="font-semibold text-gray-600">Flexible return policy for convenience</p>
                </div>
                <div className="text-center">
                    <figure className="text-[#C19A6B] border-2 border-[#C19A6B] inline-block p-3 rounded-full"><FaGift size={35}/></figure>
                    <h4 className="font-bold text-xl my-1 hover:text-[#987654] duration-300">Gift Card</h4>
                    <p className="font-semibold text-gray-600">Flexible gifting option for all</p>
                </div>
                <div className="text-center">
                    <figure className="text-[#C19A6B] border-2 border-[#C19A6B] inline-block p-3 rounded-full"><FaStar size={35}/></figure>
                    <h4 className="font-bold text-xl my-1 hover:text-[#987654] duration-300">Best Quality</h4>
                    <p className="font-semibold text-gray-600">Exceptional standard of excellence</p>
                </div>
            </div>
        </section>
    );
};

export default OurService;