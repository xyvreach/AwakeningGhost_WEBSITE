import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const MerchItemModal = ({ merchItem, OnClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const availableSizes = merchItem.sizes?.filter((sizeObj) => sizeObj.stock_quantity > 0) || [];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setQuantity(1); // Reset quantity when size changes
  };

  const handleQuantityChange = (action) => {
    const maxQuantity = merchItem.sizes.find((s) => s.size === selectedSize)?.stock_quantity || 0;
    if (action === 'increment' && quantity < maxQuantity) {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={OnClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[700px] max-w-full bg-white rounded-lg p-6 flex flex-col relative shadow-lg"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-gray-600 cursor-pointer"
          onClick={OnClose}
        />

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 bg-gray-200 flex items-center justify-center rounded mb-4 md:mb-0">
            <span className="text-gray-500">Image Placeholder</span>
          </div>

          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{merchItem.title}</h2>
            <p className="text-lg font-semibold text-gray-600 mb-4">
              ${merchItem.sale_price || merchItem.price}{' '}
              {merchItem.sale_price && (
                <span className="line-through text-red-600">${merchItem.price}</span>
              )}
            </p>

            {/* Size Options */}
            <p className="text-sm font-semibold text-gray-700 mb-2">Size</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {availableSizes.length > 0 ? (
                availableSizes.map((sizeObj) => (
                  <button
                    key={sizeObj.size}
                    className={`border border-gray-400 rounded-lg py-1 text-sm ${
                      selectedSize === sizeObj.size ? 'bg-gray-200' : 'text-gray-600 hover:bg-gray-100'
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

            {/* Quantity Selector */}
            {selectedSize && (
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
                      quantity >= (merchItem.sizes.find((s) => s.size === selectedSize)?.stock_quantity || 0)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Availability */}
            {selectedSize && (
              <p className="text-sm text-gray-600 mb-2">
                Availability: In stock (
                {merchItem.sizes.find((s) => s.size === selectedSize)?.stock_quantity || 0} available)
              </p>
            )}

            {/* Add to Cart Button */}
            <button
              className={`w-full py-2 ${
                selectedSize ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } rounded-lg transition mb-4`}
              disabled={!selectedSize}
              onClick={() => {
                // Add to Cart logic here
              }}
            >
              Add to Cart
            </button>

            {/* Description */}
            <div className="border-t border-gray-300 mt-4 pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600">{merchItem.description}</p>
            </div>

            {/* Tags */}
            {merchItem.tags && (
              <div className="border-t border-gray-300 mt-4 pt-4">
                <p className="text-sm font-semibold text-gray-700">Tags:</p>
                <p className="text-gray-600 text-sm">{merchItem.tags.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchItemModal;
