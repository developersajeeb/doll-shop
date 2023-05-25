import logo from '../../assets/logo.png'
import { FaFacebookF, FaYoutube, FaPinterestP, FaInstagram, FaLinkedinIn, FaLocationArrow, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-50 px-5 pt-10 md:px-16 md:pt-16 lg:px-36 lg:pt-16'>
            <section>
                <img className='w-44 mx-auto' src={logo} alt="" />
                <p className='text-center text-gray-600 md:w-[700px] mx-auto mt-5'>The Doll Box is a charming haven of diverse dolls. Porcelain, rag, and baby dolls adorn the shelves, captivating collectors and kids. Each doll tells a tale with intricate costumes and accessories. Its a treasure trove, catering to all tastes.</p>
                <ul className='flex gap-3 justify-center mt-4'>
                    <li className='bg-[#987654] p-2 rounded-full text-white'><a href=""><FaFacebookF size={20} /></a></li>
                    <li className='bg-[#987654] p-2 rounded-full text-white'><a href=""><FaYoutube size={20} /></a></li>
                    <li className='bg-[#987654] p-2 rounded-full text-white'><a href=""><FaPinterestP size={20} /></a></li>
                    <li className='bg-[#987654] p-2 rounded-full text-white'><a href=""><FaInstagram size={20} /></a></li>
                    <li className='bg-[#987654] p-2 rounded-full text-white'><a href=""><FaLinkedinIn size={20} /></a></li>
                </ul>
            </section>
            <section className='grid md:grid-cols-5 gap-6 mt-16'>
                <ul className='md:col-span-2 md:flex items-center gap-8'>
                    <li className='text-center md:text-start'>
                        <figure className='text-white bg-[#987654] inline-block p-3 rounded-full'><FaLocationArrow size={25} /></figure>
                        <h5 className='mt-2 font-bold text-xl'>Location</h5>
                        <p>Doll Store United States</p>
                    </li>
                    <li className='mt-6 md:mt-0 text-center md:text-start'>
                        <figure className='text-white bg-[#987654] inline-block p-3 rounded-full'><FaRegEnvelope size={25} /></figure>
                        <h5 className='mt-2 font-bold text-xl'>Email</h5>
                        <p>info@developersajeeb.com</p>
                    </li>
                </ul>
                <div>
                    <h3 className='font-bold text-xl text-center md:text-start'>Your Account</h3>
                    <ul className='text-center md:text-start grid gap-3 mt-4'>
                        <li>Personal info</li>
                        <li>Orders</li>
                        <li>Sell Product</li>
                        <li>My Products</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-xl text-center md:text-start'>Your Account</h3>
                    <ul className='text-center md:text-start grid gap-3 mt-4'>
                        <li>Personal info</li>
                        <li>Orders</li>
                        <li>Sell Product</li>
                        <li>My Products</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-xl text-center md:text-start'>Your Account</h3>
                    <ul className='text-center md:text-start grid gap-3 mt-4'>
                        <li>Personal info</li>
                        <li>Orders</li>
                        <li>Sell Product</li>
                        <li>My Products</li>
                    </ul>
                </div>
            </section>
            <div className='py-4 mt-6 text-center border-t-2'>© 2023 - Doll Shop. All rights reserved.</div>
        </footer>
    );
};

export default Footer;