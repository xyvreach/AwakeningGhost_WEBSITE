import { Link } from 'react-router-dom';
import { BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import MerchItemModal from './MerchItemModal';

const MerchItemsSingleCard = ({ merchItem }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="border border-gray-800 bg-black text-white rounded-lg p-4 m-4 relative hover:shadow-lg">
            {/* Placeholder for Product Image */}
            <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-500">Image Placeholder</span>
            </div>

            {/* Title and Price */}
            <h2 className="text-center font-semibold text-lg mb-2">{merchItem.title}</h2>
            <p className="text-center text-lg font-medium">${merchItem.price.toFixed(2)}</p>

            {/* CRUD Icons */}
            <div className="flex justify-center gap-x-4 mt-4">
                <BiShow
                    className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/merch-items/details/${merchItem._id}`}>
                    <BsInfoCircle className="text-xl text-green-500 hover:text-green-700" />
                </Link>
                <Link to={`/merch-items/edit/${merchItem._id}`}>
                    <AiOutlineEdit className="text-xl text-yellow-500 hover:text-yellow-700" />
                </Link>
                <Link to={`/merch-items/delete/${merchItem._id}`}>
                    <MdOutlineDelete className="text-xl text-red-500 hover:text-red-700" />
                </Link>
            </div>

            {/* Modal for Viewing Item Details */}
            {showModal && (
                <MerchItemModal merchItem={merchItem} OnClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default MerchItemsSingleCard;
