import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteMerchItem = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteMerchItem = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/merch-items/${id}`) // Updated URL
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Merch Item Deleted Successfully', { variant: 'success' });
        navigate('/merch-items'); // Navigate back to the merch items list
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.response?.data?.message || 'Error deleting item';
        enqueueSnackbar(errorMessage, { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton destination={`/merch-items/`} />
      <h1 className='text-3xl my-4'>Delete Merch Item</h1>
      {loading && <Spinner />}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this merch item?</h3>
        <button
          className='p-4 bg-red-600 text-white m-8 w-full rounded-lg hover:bg-red-700'
          onClick={handleDeleteMerchItem}
          disabled={loading}
        >
          Yes, Delete Merch Item
        </button>
      </div>
    </div>
  );
};

export default DeleteMerchItem;
