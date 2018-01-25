import React from 'react';

export const Hotel = ({
  hotel
}) => (
    <div className="hotel">
      <div className="row item">
        <div className="col-5">
          <img alt={hotel.name} className="img-fluid" src={`/images/hotels/${hotel.image}`} />
        </div>
        <h5 className="text-orange">{hotel.name}</h5>
      </div>
    </div>
  );
