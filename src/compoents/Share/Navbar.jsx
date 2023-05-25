import { useContext, useState } from "react";
import Headroom from "react-headroom";
import { Spin as Hamburger } from 'hamburger-react';
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaShoppingBag, FaShoppingCart, FaRegEnvelope } from "react-icons/fa";
import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';
import { AuthContext } from "../../provider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (

        <nav className="">
            <div className="mx-16 lg:mx-36 hidden md:block">
                <div className="flex justify-between items-center my-4">
                    <div className="flex items-center gap-4">
                        <figure className="bg-[#987654] p-3 rounded-full text-white"><FaRegEnvelope className="w-5 h-5" /></figure>
                        <div>
                            <h3 className="font-bold text-xl">Email Us</h3>
                            <p className="text-sm text-gray-600">info@developersajeeb.com</p>
                        </div>
                    </div>
                    <Link to='/'><img className="w-40" src={logo} alt="" /></Link>
                    <div className="flex items-center gap-4">
                        <figure className="bg-[#987654] p-3 rounded-full text-white"><FaShoppingCart className="w-5 h-5" /></figure>
                        <div>
                            <h3 className="font-bold text-xl">Shopping Cart</h3>
                            <p className="text-sm text-gray-600">$ 0.00 - 0 items</p>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-5 rounded-full flex justify-between items-center bg-[#987654] z-50">
                    <ul className="flex gap-5 font-medium text-white">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Doll Box</NavLink>
                        <NavLink to='/category' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Category</NavLink>
                        <NavLink to='/about-us' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >About Us</NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Blog</NavLink>
                        <NavLink to='/all-dolls' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >All Dolls</NavLink>
                    </ul>
                    <div className="flex items-center gap-4 text-white">
                        <NavLink to='/checkour' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Checkout</NavLink>
                        <span>|</span>
                        {
                            user ?
                                <>
                                    <NavLink to='/my-dolls' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >My Dolls</NavLink>
                                    <span>|</span>
                                    <NavLink to='/add-a-doll' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Add a Doll</NavLink>
                                    <span>|</span>
                                    <a data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName}
                                        data-tooltip-place="bottom">
                                        <img className="w-8 h-8 object-cover rounded-full border-2" src={user?.photoURL} alt="" />
                                        <Tooltip className='absolute bg-[#3b2209] border p-2 z-50 rounded-md' id="my-tooltip" />
                                    </a>
                                    <NavLink onClick={handleLogOut} className='text-white' ><FaSignOutAlt size={23} /></NavLink>
                                </>
                                :
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Login</NavLink>
                        }

                    </div>
                </div>
            </div>

            <Headroom style={{
                WebkitTransition: 'all .5s ease-in-out',
                MozTransition: 'all .5s ease-in-out',
                OTransition: 'all .5s ease-in-out',
                transition: 'all .5s ease-in-out'
            }}>
                <div className="px-5 py-3 md:hidden flex justify-between bg-[#987654]">
                    <div className="flex justify-between">
                        <span className="rounded-md text-white" onClick={() => { setOpen(!isOpen) }}><Hamburger size={22} style={{ padding: 0 }}></Hamburger></span>
                    </div>
                    <Link to='/'><img className="w-16" src={logoWhite} alt="" /></Link>
                    <div className="flex items-center gap-4 text-white">
                        {
                            user ?
                                <a data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user.displayName}
                                    data-tooltip-place="bottom">
                                    <img className="w-8 h-8 object-cover rounded-full border-2" src={user.photoURL} alt="" />
                                    <Tooltip className='absolute bg-[#3b2209] border p-2 z-50 rounded-md' id="my-tooltip" />
                                </a>
                                :
                                <FaUser size={20} />
                        }
                        <FaShoppingBag size={20} />
                    </div>
                    <ul className={`grid gap-3 font-medium text-white bg-[#C19A6B] p-4 rounded-lg absolute w-[95%] z-10 ${isOpen ? 'left-2 top-20' : 'hidden'}`}>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Doll Box</NavLink>
                        <NavLink to='/collection' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Collection</NavLink>
                        <NavLink to='/about-us' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >About Us</NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Blog</NavLink>
                        <NavLink to='/all-dolls' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >All Dolls</NavLink>
                        <NavLink to='/checkout' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Checkout</NavLink>
                        {
                            user ?
                                <>
                                    <NavLink to='/my-dolls' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >My Dolls</NavLink>
                                    <NavLink to='/add-a-doll' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Add a Doll</NavLink>
                                    <NavLink onClick={handleLogOut} className='text-white' ><FaSignOutAlt size={23} /></NavLink>
                                </>
                                :
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'text-[#3b2209] font-bold' : ''} >Login</NavLink>
                        }
                    </ul>
                </div>
            </Headroom>
        </nav>
    );
};

export default Navbar;