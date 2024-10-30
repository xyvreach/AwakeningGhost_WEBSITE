import React from 'react';

// Example data for shows
const shows = [
  {
    date: 'December 13, 2024',
    location: 'Los Angeles, California, United States',
    venue: 'YouTube Theater',
    additionalInfo: 'AWMH Helping Hands Concert & Auction',
    actions: ['Sold Out'],
    imageUrl: '/images/los-angeles.jpg', // Example image URL
  },
  {
    date: 'April 12, 2025',
    location: 'Las Vegas, Nevada, United States',
    venue: 'Las Vegas Festival Grounds',
    additionalInfo: 'Sick New World',
    actions: ['Buy Tickets', 'About the Festival', 'More Info'],
    imageUrl: '/images/las-vegas.jpg', // Example image URL
  },
  {
    date: 'April 19, 2025',
    location: 'Syracuse, New York, United States',
    venue: 'JMA Wireless Dome',
    actions: ['Buy Tickets', 'Buy an Enhanced Experience', 'Buy a Travel Package', 'More Info'],
    imageUrl: '/images/syracuse.jpg', // Example image URL
  },
  {
    date: 'April 24, 2025',
    location: 'Toronto, Ontario, Canada',
    venue: 'Rogers Centre',
    actions: ['Buy Tickets', 'Buy an Enhanced Experience', 'Buy a Travel Package', 'More Info'],
    imageUrl: '/images/toronto.jpg', // Example image URL
  },
];

const UpcomingShow = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold uppercase mb-8">M72 World Tour</h2>
        <div className="flex justify-between mb-6">
          <h3 className="text-xl font-bold">Upcoming Shows</h3>
          <a
            href="/all-tour-dates"
            className="text-sm uppercase tracking-widest hover:underline"
          >
            View All Tour Dates
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-black text-white flex flex-col justify-between overflow-hidden"
              style={{ minHeight: '420px' }}
            >
              {/* Show Image */}
              {show.imageUrl && (
                <div className="relative">
                  <img
                    src={show.imageUrl}
                    alt={`${show.location} concert`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              {/* Show Information */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-lg font-bold mb-2">{show.date}</p>
                  <p className="text-2xl font-bold uppercase">{show.location}</p>
                  <p className="mt-2 text-sm">{show.venue}</p>
                  {show.additionalInfo && (
                    <p className="mt-2 text-sm italic">{show.additionalInfo}</p>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  {show.actions.map((action, actionIndex) => (
                    <a
                      key={actionIndex}
                      href="#"
                      className={`block text-sm uppercase tracking-wide font-semibold ${
                        action.toLowerCase() === 'sold out'
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-white hover:text-red-600'
                      }`}
                    >
                      {action}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingShow;
