import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import banner from '../../assets/otherBanner/headerbanner.jpg';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../hooks/useTitle';

const AllDolls = () => {
    useTitle("All Dolls")
    const [visibleDolls, setVisibleDolls] = useState(20);
    const dolls = useLoaderData();
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

    const loadMore = () => {
        setVisibleDolls(visibleDolls + 20);
    };

    return (
        <>
            <header style={{ backgroundImage: `url(${banner})` }} className='bg-cover bg-center px-5 py-10 md:p-16 lg:p-28'>
                <h1 className='text-5xl font-extrabold text-white text-center'>All Dolls</h1>
            </header>
            <main className='mx-5 md:mx-16 lg:mx-36'>
                <section className='overflow-x-auto my-20 mx-auto'>
                    <table className="min-w-full">
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='p-3'>ID</th>
                                <th>Photo</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sub Category</th>
                                <th>Seller Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dolls.length === 0 ?
                                    <tr>
                                        <td className='text-center py-5'>No Data</td>
                                        <td className='text-center'>No Data</td>
                                        <td className='text-center'>No Data</td>
                                        <td className='text-center'>No Data</td>
                                        <td className='text-center'>No Data</td>
                                        <td className='text-center'>No Data</td>
                                        <td className='text-center'>No Data</td>
                                        <td className='text-center'>No Data</td>
                                    </tr>
                                    :
                                    dolls.slice(0, visibleDolls).map((doll, index) => <tr key={doll._id} className='text-center border-b'>
                                        <td>{index + 1}</td>
                                        <td className="py-4"><img src={doll.photo} className="w-20 h-20 rounded-lg" alt="" /></td>
                                        <td>{doll.productName}</td>
                                        <td>${doll.price}</td>
                                        <td>{doll.quantity}</td>
                                        <td>{doll.subCategory}</td>
                                        <td>{doll.sellerName}</td>
                                        <td>
                                            <div className='flex gap-4 items-center justify-center'>
                                                <Link to={`/doll/${doll._id}`}>
                                                    <button onClick={handleView} className="bg-[#987654] text-white py-2 px-4 rounded-full mb-3">View Details</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </section>
                {/* {
                        dolls.slice(0, visibleDolls).map(doll => <div key={doll._id} className="bg-gray-50 p-3 rounded-lg text-center">
                            <img className="w-full h-64 object-cover rounded-lg" src={doll.photo} alt="" />
                            <h3 className="mt-4 mb-3 text-xl font-bold">{doll.productName}</h3>
                            <p className="font-extrabold text-[#987654]">Price: ${doll.price}</p>
                            <p className="flex items-center gap-2 justify-center text-orange-400 mt-1 mb-3"><FaStar /> {doll.rating}</p>
                            <Link to={`/doll/${doll._id}`}>
                                <button onClick={handleView} className="bg-[#987654] text-white py-2 px-4 rounded-full mb-3">View Details</button>
                            </Link>
                        </div>)
                    } */}

                <section className='text-center'>
                    {
                        visibleDolls < dolls.length && (
                            <button onClick={loadMore} className="bg-[#987654] text-white py-2 px-4 rounded-full mb-16">Load More</button>
                        )
                    }
                </section>
            </main>
        </>
    );
};

export default AllDolls;