import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowMerchItem = () => {
  const [merchItem, setMerchItem] = useState({ sizes: [] }); // Initialized sizes as an empty array
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
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
        console.error('Error fetching merch item:', error);
        setLoading(false);
      });
  }, [id]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setQuantity(1); // Reset quantity when size changes
  };

  const handleQuantityChange = (action) => {
    const maxQuantity =
      merchItem.sizes?.find((s) => s.size === selectedSize)?.stock_quantity || 0;
    if (action === 'increment' && quantity < maxQuantity) {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const availableSizes = merchItem.sizes?.filter((sizeObj) => sizeObj.stock_quantity > 0) || [];

  return (
    <div className="show-merch-item-page bg-gray-100 min-h-screen p-6">
      <BackButton destination="/merch-items" />
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Placeholder for Product Image */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded mb-4">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              {/* Thumbnail Placeholder */}
              <div className="flex space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded"></div>
                <div className="w-20 h-20 bg-gray-200 rounded"></div>
                <div className="w-20 h-20 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {merchItem.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{merchItem.description}</p>
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                ${merchItem.price}
              </p>

              {/* Size Options */}
              <p className="text-sm font-semibold text-gray-700 mb-2">Size</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {availableSizes.length > 0 ? (
                  availableSizes.map((sizeObj) => (
                    <button
                      key={sizeObj.size}
                      className={`border border-gray-400 rounded-lg py-2 text-sm ${
                        selectedSize === sizeObj.size
                          ? 'bg-gray-200'
                          : 'text-gray-600 hover:bg-gray-100'
                      } transition`}
                      onClick={() => handleSizeSelect(sizeObj.size)}
                    >
                      {sizeObj.size}
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-600">Out of stock</p>
                )}
              </div>

              {/* Availability */}
              {selectedSize && (
                <>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Availability
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    In stock (
                    {
                      merchItem.sizes?.find((s) => s.size === selectedSize)
                        ?.stock_quantity || 0
                    }{' '}
                    available)
                  </p>
                </>
              )}

              {/* Quantity Selector and Add to Cart Button */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center border border-gray-400 rounded-lg">
                  <button
                    className="px-3 py-1 text-gray-600"
                    onClick={() => handleQuantityChange('decrement')}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-gray-800">{quantity}</span>
                  <button
                    className="px-3 py-1 text-gray-600"
                    onClick={() => handleQuantityChange('increment')}
                    disabled={
                      quantity >=
                      (merchItem.sizes?.find((s) => s.size === selectedSize)
                        ?.stock_quantity || 0)
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className={`w-full py-2 ${
                    selectedSize
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  } rounded-lg transition`}
                  disabled={!selectedSize}
                  onClick={() => {
                    // Add to Cart logic here
                  }}
                >
                  Add to Cart
                </button>
              </div>

              {/* Description Section */}
              <div className="border-t border-gray-300 mt-6 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">{merchItem.description}</p>
                {/* Additional details can be added here */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowMerchItem;
