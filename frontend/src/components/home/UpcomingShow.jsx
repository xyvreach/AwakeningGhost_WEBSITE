import React from 'react';

const UpcomingShow = ({ shows }) => {
  // Get the next upcoming show
  const nextShow = shows[0];

  return (
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Banner */}
        <h2 className="text-3xl font-bold text-black uppercase mb-8 text-center">Next Upcoming Show</h2>
        
        {/* Show Card */}
        <div className="flex justify-center">
          <div
            className="bg-black text-white flex flex-col justify-between overflow-hidden w-full max-w-sm"
            style={{ minHeight: '420px' }}
          >
            {/* Show Image */}
            {nextShow.imageUrl && (
              <div className="relative">
                <img
                  src={nextShow.imageUrl}
                  alt={`${nextShow.location} concert`}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            {/* Show Information */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-lg font-bold mb-2">{nextShow.date}</p>
                <p className="text-2xl font-bold uppercase">{nextShow.location}</p>
                <p className="mt-2 text-sm">{nextShow.venue}</p>
                {nextShow.additionalInfo && (
                  <p className="mt-2 text-sm italic">{nextShow.additionalInfo}</p>
                )}
              </div>
              <div className="mt-4 space-y-2">
                {nextShow.actions.map((action, actionIndex) => (
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
        </div>

      </div>
    </section>
  );
};

export default UpcomingShow;
