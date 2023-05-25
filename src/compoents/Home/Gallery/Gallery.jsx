import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <section className="grid md:grid-cols-3 gap-5 my-28" data-aos="fade-right">
            <div className="md:col-span-2 bg-cover bg-center rounded-lg flex items-end p-8 md:h-[400px]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/264907/pexels-photo-264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div>
                    <h2 className="text-4xl font-extrabold">ON SALE</h2>
                    <p className="text-[#C19A6B] font-semibold my-2">SAVE UPTO 30% OFF</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className="bg-cover bg-center rounded-lg flex items-end p-8" style={{ backgroundImage: 'url(https://images.pexels.com/photos/747782/pexels-photo-747782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div>
                    <h2 className="text-4xl font-extrabold">ON SALE</h2>
                    <p className="text-[#C19A6B] font-semibold my-2">SAVE UPTO 30% OFF</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className="bg-cover bg-center rounded-lg flex items-end p-8" style={{ backgroundImage: 'url(https://images.pexels.com/photos/37158/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div>
                    <h2 className="text-4xl font-extrabold">ON SALE</h2>
                    <p className="text-[#C19A6B] font-semibold my-2">SAVE UPTO 30% OFF</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className="bg-cover bg-center rounded-lg flex items-end p-8" style={{ backgroundImage: 'url(https://images.pexels.com/photos/10003876/pexels-photo-10003876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div>
                    <h2 className="text-4xl font-extrabold">ON SALE</h2>
                    <p className="text-[#C19A6B] font-semibold my-2">SAVE UPTO 30% OFF</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className="bg-cover bg-center rounded-lg flex items-end p-8" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4887156/pexels-photo-4887156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div>
                    <h2 className="text-4xl font-extrabold">ON SALE</h2>
                    <p className="text-[#C19A6B] font-semibold my-2">SAVE UPTO 30% OFF</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;