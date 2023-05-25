import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from '../../../assets/slider/s1.jpg'
import img2 from '../../../assets/slider/s2.jpg'
import img3 from '../../../assets/slider/s3.jpg'
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#987654",
                    "--swiper-pagination-color": "#987654",
                    zIndex: -10
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide style={{ backgroundImage: `url(${img1})` }} className="py-14 px-6 md:p-40 bg-cover bg-center">
                    <h3 className="md:text-xl text-[#C19A6B] font-bold inline-block rounded-md mb-6">WELCOME TO DOLL BOX</h3>
                    <h1 className="font-extrabold text-5xl md:text-7xl">Special Doll</h1>
                    <p className="my-6 md:w-[550px] text-gray-700">Special dolls are enchanting companions that bring joy and imagination to children and collectors alike. Crafted with meticulous care, these dolls possess unique features, intricate outfits, and lifelike expressions.</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img2})` }} className="py-14 px-6 md:p-40 bg-cover bg-center">
                    <h3 className="md:text-xl text-[#C19A6B] font-bold inline-block rounded-md mb-6">WELCOME TO DOLL BOX</h3>
                    <h1 className="font-extrabold text-5xl md:text-7xl">Special Doll</h1>
                    <p className="my-6 md:w-[550px] text-gray-700">Special dolls are enchanting companions that bring joy and imagination to children and collectors alike. Crafted with meticulous care, these dolls possess unique features, intricate outfits, and lifelike expressions.</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img3})` }} className="py-14 px-6 md:p-40 bg-cover bg-center">
                    <h3 className="md:text-xl text-[#C19A6B] font-bold inline-block rounded-md mb-6">WELCOME TO DOLL BOX</h3>
                    <h1 className="font-extrabold text-5xl md:text-7xl">Special Doll</h1>
                    <p className="my-6 md:w-[550px] text-gray-700">Special dolls are enchanting companions that bring joy and imagination to children and collectors alike. Crafted with meticulous care, these dolls possess unique features, intricate outfits, and lifelike expressions.</p>
                    <Link to='/all-dolls'>
                        <button className="bg-[#987654] text-white py-2 px-4 rounded-full">Shop Now</button>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;