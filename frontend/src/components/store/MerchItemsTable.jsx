import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const MerchItemsTable = ({ merchItems }) => {
  return (
    <table className='w-full border-separate border-spacing-2 '>
                    <thead>
                        <tr>
                            <th className='border boder-slate-600 rounded-md'>No</th>
                            <th className='border boder-slate-600 rounded-md'>Title</th>
                            <th className='border boder-slate-600 rounded-md max-md:hidden'>
                                Category
                            </th>
                            <th className='border boder-slate-600 rounded-md max-md:hidden'>
                                Price
                            </th>
                            <th className='border boder-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {merchItems.map((merchItem, index) => (
                            <tr key={merchItem._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {merchItem.title}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {merchItem.category}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {merchItem.price}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`merch-items/details/${merchItem._id}`}>
                                            <BsInfoCircle className='text-2x1 text-green-800' />
                                        </Link>
                                        <Link to={`/merch-items/edit/${merchItem._id}`}>
                                            <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                        </Link>
                                        <Link to={`/merch-items/delete/${merchItem._id}`}>
                                            <MdOutlineDelete className='text-2x1 text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
  )
}

export default MerchItemsTable