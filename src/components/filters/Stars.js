import React from 'react';

export const Stars = ({
  starsToggle,
  handleToggle,
  handleStarsChange,
  stars,
  handleAllStarsChange
}) => (
  <div className="row filter-stars d-flex align-items-center">
    <div className="col">
      <div className="d-flex justify-content-middle text-primary" data-name="starsToggle" onClick={handleToggle}>
        <i className="icon icon-star"></i>
        <span className="title">Estrellas</span>
        <i
          className={
            `fa ml-auto align-self-center text-primary
            ${starsToggle ? 'fa-caret-down' : 'fa-caret-up'}`
          }
          aria-hidden="true"
        >
        </i>
      </div>
    </div>
    <div className="col-12" hidden={starsToggle}>
      <div className="w-100">
        <div className="col">
          <div className="form-check">
            <input
              type="checkbox"
              id="allStars"
              className="form-check-input"
              checked={stars.length === 0}
              onChange={handleAllStarsChange}
            />
            <label className="form-check-label" htmlFor="allStars">
              Todas las estrellas
            </label>
          </div>
        </div>
      </div>  
      {
        [5,4,3,2,1].map((item, index) => (
        <div className="w-100" key={index}>
          <div className="col text-warning">
            <div className="form-check">
              <input type="checkbox" id={`${index}stars`} className="form-check-input" value={item} onChange={handleStarsChange} checked={stars.includes(item)} />
              <label className="form-check-label" htmlFor={`${index}stars`}>
                {[...Array(item)].map((item, index) => <i key={`${index}stars`} className="icon icon-star"></i>)}
              </label>
            </div>
          </div>
        </div>  
        ))
      }
    </div>
  </div>
);
