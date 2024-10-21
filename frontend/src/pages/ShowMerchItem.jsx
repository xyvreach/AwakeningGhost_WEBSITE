import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowMerchItem = () => {
  const [merchItem, setMerchItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/merch-items/${id}`)
      .then((response) => {
        setMerchItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3x1 my-4'>Show MerchItem</h1>
      {loading ? (
        <Spinner/>
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Id</span>
            <span>{merchItem._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Title</span>
            <span>{merchItem.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Category</span>
            <span>{merchItem.category}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Price</span>
            <span>{merchItem.price}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(merchItem.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-x1 mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(merchItem.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowMerchItem