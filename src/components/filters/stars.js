import React from 'react';

export const Stars = ({
  starsToggle,
  handleStarsToggle,
  handleStarsChange
}) => (
  <div className="row filter-stars">
    <div className="col">
      <div
        className="d-flex justify-content-middle text-primary"
        onClick={handleStarsToggle}
      >
      <i className="icon icon-star"></i>
      <span>Estrellas</span>
      <i
        className={
          `fa ml-auto align-self-center text-primary
          ${starsToggle ? 'fa-caret-down' : 'fa-caret-up'}`
        }
        aria-hidden="true">
      </i>
    </div>
    </div>
    {
      [5,4,3,2,1].map((item, index) => (
      <div className="w-100" key={index} hidden={starsToggle}>
        <div className="col text-warning">
          <div className="form-check">
            <input type="checkbox" id={`${index}stars`} className="form-check-input" value="5" onChange={handleStarsChange} />
            <label className="form-check-label" htmlFor={`${index}stars`}>
              {[...Array(item)].map((item, index) => <i key={`${index}stars`} className="icon icon-star"></i>)}
            </label>
          </div>
        </div>
      </div>  
      ))
    }
  </div>
);