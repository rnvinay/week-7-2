// DestinationsSection.js
import React from 'react';

const destinations = [
  {
    name: 'Paris, France',
    image: 'paris.jpg',
    description: 'Experience the romance and beauty of the City of Light.'
  },
  {
    name: 'Kyoto, Japan',
    image: 'kyoto.jpg',
    description: 'Immerse yourself in traditional Japanese culture and stunning landscapes.'
  },
  // Add more destinations as needed
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination">
            <img src={require(`./images/${destination.image}`).default} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;
