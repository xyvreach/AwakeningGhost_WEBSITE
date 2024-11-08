import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const EditMerchItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [currency] = useState('USD'); // Default value
  const [category, setCategory] = useState('');
  const [sku, setSku] = useState('');
  const [sizes, setSizes] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/merch-items/${id}`)
      .then((response) => {
        const data = response.data;
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setCategory(data.category);
        setSku(data.sku);
        setSizes(data.sizes || []); // Set sizes
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.response?.data?.message || 'Error fetching item';
        enqueueSnackbar(errorMessage, { variant: 'error' });
        console.error(error);
      });
  }, [id]);

  const handleSizeChange = (index, value) => {
    const newSizes = [...sizes];
    newSizes[index].stock_quantity = parseInt(value, 10) || 0;
    setSizes(newSizes);
  };

  const handleEditMerchItem = () => {
    // Validate inputs
    if (!title || !price || !category || !sku) {
      enqueueSnackbar('Please fill in all required fields', { variant: 'warning' });
      return;
    }

    const parsedPrice = parseFloat(price);

    // Check if parsed price is a valid number
    if (isNaN(parsedPrice)) {
      enqueueSnackbar('Please enter a valid number for price', { variant: 'warning' });
      return;
    }

    // Validate sizes
    const hasValidSizes = sizes.some(sizeObj => sizeObj.stock_quantity > 0);

    if (!hasValidSizes) {
      enqueueSnackbar('Please enter stock quantities for at least one size', { variant: 'warning' });
      return;
    }

    const data = {
      title,
      description,
      price: parsedPrice,
      currency,
      category,
      sizes,
      sku,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/merch-items/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Merch Item Edited Successfully', { variant: 'success' });
        navigate(`/merch-items/${id}`);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.response?.data?.message || 'Error updating item';
        enqueueSnackbar(errorMessage, { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton destination={`/merch-items/`} />
      <h1 className="text-3xl my-4">Edit Merch Item</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        {/* Title Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        {/* Description Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Description<span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            rows="4"
            required
          />
        </div>
        {/* Price Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Price<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            min="0"
            step="0.01"
            required
          />
        </div>
        {/* Category Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Category<span className="text-red-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          >
            <option value="">Select Category</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Sizes and Stock Quantities */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Sizes and Stock Quantities<span className="text-red-500">*</span>
          </label>
          {sizes.map((sizeObj, index) => (
            <div key={sizeObj.size} className="flex items-center my-2">
              <label className="w-16">{sizeObj.size}</label>
              <input
                type="number"
                value={sizeObj.stock_quantity}
                onChange={(e) => handleSizeChange(index, e.target.value)}
                className="border-2 border-gray-500 px-2 py-1 w-24"
                min="0"
              />
            </div>
          ))}
        </div>
        {/* SKU Field */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            SKU<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        {/* Save Button */}
        <button
          className="p-2 bg-sky-300 m-8 rounded-lg hover:bg-sky-400"
          onClick={handleEditMerchItem}
          disabled={loading}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditMerchItem;
