import React from 'react';

export const Hotel = ({
  hotel
}) => (
    <div className="hotel">
      <div className="row item">
        <div className="col-12 col-lg-5">
          <img alt={hotel.name} className="img-fluid mx-auto d-block" src={`/images/hotels/${hotel.image}`} />
        </div>
        <div className="col-12 col-lg-4">
          <p className="text-orange h6 text-primary">{hotel.name}</p>
          <div className="w-100"></div>
          {[...Array(hotel.stars)].map((item, index) => <i key={`${index}stars`} className="icon icon-star text-warning"></i>)}
          <div className="w-100"></div>
          {hotel.amenities.map((item, index) => <i key={`${index}stars`} className={`amenities-icon icon icon-${item} text-muted`}></i>)}
        </div>
        <div className="col col-lg-3 d-flex align-items-center">
          <div className="row">
            <div className="col-12 text-center">
              <small>Precio por noche por habitación</small>
            </div>
            <div className="col-12 text-center">
              <small className="text-warning h4">ARS <b>{hotel.price}</b></small>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-primary"><b>Ver Hotel</b></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
