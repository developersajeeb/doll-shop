import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import TableData from "./TableData";
import useTitle from "../hooks/useTitle";

const MyDolls = () => {
    useTitle("My Dolls")
    const {user} = useContext(AuthContext);
    const [dollData, setDollData] = useState([]);
    const [item, setItem] = useState(dollData);

    useEffect(() => {
        fetch(`https://doll-shop-server-a11.vercel.app/my-dolls/${user?.email}`)
        .then(result => result.json())
        .then(data => {
            setDollData(data);
        })
    },[user])

    useEffect(() => {
        setItem(dollData);
    }, [dollData]);

    return (
        <main className="mx-5 md:mx-16 lg:mx-36">
            <div className='overflow-x-auto my-20 mx-auto'>
                <p className="font-semibold">Total Product: {item.length}</p>
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
                            item.length === 0 ?
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
                                item?.map((doll, index) => <TableData
                                key={doll._id}
                                index={index}
                                doll={doll}
                                item={item}
                                setItem={setItem}
                                ></TableData>)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default MyDolls;