import banner from '../../../assets/newsletter.png';
import { FaRegEnvelope } from "react-icons/fa";

const NewsLetter = () => {
    return (
        <section style={{backgroundImage: `url(${banner})`}}  className='px-5 py-6 md:p-16 lg:p-36 mt-72 md:mt-0 text-center bg-cover bg-center'>
            <span><FaRegEnvelope className='mx-auto text-[#987654]' size={70}/></span>
            <h2 className='text-4xl font-extrabold text-gray-800 my-6'>Join Our Mailing List</h2>
            <input className='py-2 px-3 rounded-full block mx-auto w-full md:w-96 mb-3 shadow-md' type="email" name="" id="" />
            <button type='submit' className='bg-[#987654] text-white py-2 px-4 rounded-full'>SUBSCRIBE</button>
        </section>
    );
};

export default NewsLetter;