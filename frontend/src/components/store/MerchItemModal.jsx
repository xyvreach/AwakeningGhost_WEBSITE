import { AiOutlineClose } from 'react-icons/ai';

const MerchItemModal = ({ merchItem, OnClose }) => {
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
                            ${merchItem.sale_price || merchItem.price} {merchItem.sale_price && <span className="line-through text-red-600">${merchItem.price}</span>}
                        </p>

                        <p className="text-sm font-semibold text-gray-700 mb-2">Size</p>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {merchItem.sizes?.map((size) => (
                                <button key={size} className="border border-gray-400 rounded-lg py-1 text-sm text-gray-600 hover:bg-gray-100 transition">
                                    {size}
                                </button>
                            ))}
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mb-2">Color</p>
                        <div className="flex gap-2 mb-4">
                            {merchItem.colors?.map((color) => (
                                <span key={color} className="border border-gray-400 rounded-lg px-4 py-1 text-sm text-gray-600">{color}</span>
                            ))}
                        </div>

                        <p className="text-sm text-gray-600 mb-2">Availability: {merchItem.stock_quantity > 0 ? `In stock (${merchItem.stock_quantity})` : 'Out of stock'}</p>

                        <div className="border-t border-gray-300 mt-6 pt-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                            <p className="text-gray-600">{merchItem.description}</p>
                        </div>

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
