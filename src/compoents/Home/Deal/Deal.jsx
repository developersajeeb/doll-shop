import { Link } from "react-router-dom";


const Deal = () => {
    return (
        <section className="mb-28">
            <h1 className="text-center text-5xl font-extrabold">Deal Of The Day</h1>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="md:flex gap-6 bg-gray-100 p-3 rounded-lg items-center">
                    <img className="mb-6 md:mb-0 md:w-60 rounded-lg" src="https://cdn.shopify.com/s/files/1/0315/7380/3144/products/image_0f4a59aa-a4fd-4d31-8978-1e042d663a97_530x@2x.jpg" alt="" />
                    <div>
                        <h3 className="text-2xl font-bold">Cute Dog Kitty</h3>
                        <p className="mt-2 mb-3"><span className="line-through text-gray-600 font-semibold">$35.99</span> <span className="font-semibold text-[#C19A6B]">$33.03</span></p>
                        <p className="mb-4">Adorable dog doll for cuddling, playtime, and companionship. Soft and huggable, it brings joy to children and dog lovers alike.</p>
                        <Link to='/all-dolls'>
                            <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className="md:flex gap-6 bg-gray-100 p-3 rounded-lg items-center">
                    <img className="mb-6 md:mb-0 md:w-60 rounded-lg h-full object-cover" src="https://static-01.daraz.com.bd/p/31b56405d06fb25199915aa8bbe083a4.jpg" alt="" />
                    <div>
                        <h3 className="text-2xl font-bold">Cute Dog Kitty</h3>
                        <p className="mt-2 mb-3"><span className="line-through text-gray-600 font-semibold">$20.03</span> <span className="font-semibold text-[#C19A6B]">$17.03</span></p>
                        <p className="mb-4">Adorable dog doll for cuddling, playtime, and companionship. Soft and huggable, it brings joy to children and dog lovers alike.</p>
                        <Link to='/all-dolls'>
                            <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deal;