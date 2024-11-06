import React from 'react';

const Booking = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold uppercase mb-6">
                    Book Awakening Ghost for Your Venue
                </h2>
                <hr className="border-t border-gray-600 mb-6 w-1/2 mx-auto" />

                <p className="text-lg mb-8 text-gray-400">
                    For booking inquiries, please reach out to our management team.
                </p>

                <div className="space-y-6 text-gray-300">
                    <p className="text-base">
                        <span className="font-medium uppercase">Customer Service:</span>{' '}
                        <a
                            href="tel:9107057282"
                            className="hover:text-white transition-colors duration-200"
                        >
                            (910) 705-7282
                        </a>
                    </p>
                    <p className="text-base">
                        <span className="font-medium uppercase">Email:</span>{' '}
                        <a
                            href="mailto:bandawakeningghost@gmail.com"
                            className="hover:text-white transition-colors duration-200 underline"
                        >
                            bandawakeningghost@gmail.com
                        </a>
                    </p>
                </div>

                <hr className="border-t border-gray-600 mt-8 w-1/2 mx-auto" />
            </div>
        </section>
    );
};

export default Booking;
