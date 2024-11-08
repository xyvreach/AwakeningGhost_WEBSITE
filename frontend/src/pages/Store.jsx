import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import MerchItemsCard from '../components/store/MerchItemsCard';
import MerchItemsTable from '../components/store/MerchItemsTable';
import Header from '../components/home/Header';

const Store = () => {
    const [merchItems, setMerchItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('card'); // Default to 'card' view for store feel

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/merch-items')
            .then((response) => {
                setMerchItems(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='store-page bg-gray-100 min-h-screen'>
            <Header />
            <div className="container mx-auto px-6 pt-20"> {/* Added pt-20 to create space below header */}
                <div className='flex justify-between items-center my-6'>
                    <h1 className='text-4xl font-bold text-gray-800'>Our Merchandise</h1>
                    <Link to='/merch-items/create' className='flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all'>
                        <MdOutlineAddBox className='mr-2 text-2xl' />
                        Add New Item
                    </Link>
                </div>

                <div className='flex justify-center items-center gap-x-4 mb-8'>
                    <button
                        className={`px-4 py-2 rounded-lg ${showType === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 transition`}
                        onClick={() => setShowType('table')}
                    >
                        Table View
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${showType === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 transition`}
                        onClick={() => setShowType('card')}
                    >
                        Card View
                    </button>
                </div>

                {loading ? (
                    <div className='flex justify-center items-center py-20'>
                        <Spinner />
                    </div>
                ) : (
                    <div className="merchandise-display">
                        {showType === 'table' ? (
                            <MerchItemsTable merchItems={merchItems} />
                        ) : (
                            <MerchItemsCard merchItems={merchItems} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Store;
