import { FaPencilAlt, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const TableData = ({ doll, index, item, setItem }) => {
    const { _id, photo, productName, sellerName, quantity, price, subCategory } = doll || {};

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'px-4 py-2 rounded-md text-white bg-[#987654] border-emerald-500 duration-300 ml-3',
            cancelButton: 'px-4 py-2 rounded-md text-white bg-[#987654] border-emerald-500 duration-300'
        },
        buttonsStyling: false
    })

    const handleDelete = id => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://doll-shop-server-a11.vercel.app/doll/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json)
                    .then(data => {
                        const remaining = item.filter(p => p._id !== _id);
                        setItem(remaining);
                    })
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <tr className='text-center border-b'>
            <td>{index + 1}</td>
            <td className="py-4"><img src={photo} className="w-20 h-20 rounded-lg" alt="" /></td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{subCategory}</td>
            <td>{sellerName}</td>
            <td>
                <div className='flex gap-4 items-center justify-center'>
                    <Link to={`/doll/${doll._id}`} className="border-2 p-2 rounded-md border-gray-800 hover:text-white hover:bg-[#987654] hover:border-[#987654] duration-300 cursor-pointer">
                        <span><FaEye /></span>
                    </Link>
                    <Link to={`/update-doll/${doll._id}`} className='border-2 p-2 rounded-md border-gray-800 hover:text-white hover:bg-[#987654] hover:border-[#987654] duration-300 cursor-pointer'>
                        <span><FaPencilAlt /></span>
                    </Link>
                    <Link onClick={() => handleDelete(doll._id)} className='border-2 p-2 rounded-md border-gray-800 hover:text-white hover:bg-[#987654] hover:border-[#987654] duration-300 cursor-pointer'>
                        <span><FaTrash /></span>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default TableData;