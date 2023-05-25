import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaStar } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const TabsData = () => {
    const [dolls, setDolls] = useState([]);
    const [filterTab, setFilterTab] = useState('Teddy-Bear');
    const slicedDolls = dolls.slice(0, 8);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleView = () => {
        if (user) {
            const from = location.state?.from?.pathname || '/';
            navigate(from);
        } else {
            Swal.fire(
                'Login First',
                'Please log in to view details.',
                'warning'
            )
        }
    }

    useEffect(() => {
        fetch(`https://doll-shop-server-a11.vercel.app/products/${filterTab}`)
            .then(res => res.json())
            .then(data => {
                setDolls(data);
            })
    }, [filterTab]);

    const handleTab = tabName => {
        setFilterTab(tabName)
    }

    return (
        <section className="mb-28">
            <h1 className="text-center text-5xl font-extrabold">We Love Trends</h1>
            <div className="mt-10">
                <Tabs>
                    <div className="flex justify-center mb-8">
                        <TabList className='flex gap-5 text-center'>
                            <Tab onClick={() => handleTab('Teddy-Bear')} className={`p-2 px-5 rounded-full cursor-pointer ${filterTab == 'Teddy-Bear' ? 'bg-[#987654] text-white' : 'bg-gray-100'}`}>Teddy Bear</Tab>
                            <Tab onClick={() => handleTab('Dog-Teddy')} className={`p-2 px-5 rounded-full cursor-pointer ${filterTab == 'Dog-Teddy' ? 'bg-[#987654] text-white' : 'bg-gray-100'}`}>Dog Teddy</Tab>
                            <Tab onClick={() => handleTab('Cat-Teddy')} className={`p-2 px-5 rounded-full cursor-pointer ${filterTab == 'Cat-Teddy' ? 'bg-[#987654] text-white' : 'bg-gray-100'}`}>Cat Teddy</Tab>
                        </TabList>
                    </div>

                    <TabPanel className='grid md:grid-cols-4 gap-6'>
                        {
                            slicedDolls.map(doll => <div key={doll._id} className="bg-gray-50 p-3 rounded-lg text-center">
                                <img className="w-full h-64 object-cover rounded-lg" src={doll.photo} alt="" />
                                <h3 className="mt-4 mb-3 text-xl font-bold">{doll.productName}</h3>
                                <p className="font-extrabold text-[#987654]">Price: ${doll.price}</p>
                                <p className="flex items-center gap-2 justify-center text-orange-400 mt-1 mb-3"><FaStar /> {doll.rating}</p>
                                <Link to={`/doll/${doll._id}`}>
                                    <button onClick={handleView} className="bg-[#987654] text-white py-2 px-4 rounded-full mb-3">View Details</button>
                                </Link>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel className='grid md:grid-cols-4 gap-6'>
                        {
                            slicedDolls.map(doll => <div key={doll._id} className="bg-gray-50 p-3 rounded-lg text-center">
                                <img className="w-full h-64 object-cover rounded-lg" src={doll.photo} alt="" />
                                <h3 className="mt-4 mb-3 text-xl font-bold">{doll.productName}</h3>
                                <p className="font-extrabold text-[#987654]">Price: ${doll.price}</p>
                                <p className="flex items-center gap-2 justify-center text-orange-400 mt-1 mb-3"><FaStar /> {doll.rating}</p>
                                <Link to={`/doll/${doll._id}`}>
                                    <button onClick={handleView} className="bg-[#987654] text-white py-2 px-4 rounded-full mb-3">View Details</button>
                                </Link>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel className='grid md:grid-cols-4 gap-6'>
                        {
                            slicedDolls.map(doll => <div key={doll._id} className="bg-gray-50 p-3 rounded-lg text-center">
                                <img className="w-full h-64 object-cover rounded-lg" src={doll.photo} alt="" />
                                <h3 className="mt-4 mb-3 text-xl font-bold">{doll.productName}</h3>
                                <p className="font-extrabold text-[#987654]">Price: ${doll.price}</p>
                                <p className="flex items-center gap-2 justify-center text-orange-400 mt-1 mb-3"><FaStar /> {doll.rating}</p>
                                <Link to={`/doll/${doll._id}`}>
                                    <button onClick={handleView} className="bg-[#987654] text-white py-2 px-4 rounded-full mb-3">View Details</button>
                                </Link>
                            </div>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default TabsData;