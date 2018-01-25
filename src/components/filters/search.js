import React from 'react';

export const Search = () => (
  <div className="row filter-search">
    <div className="col">
      <div
        className="d-flex justify-content-middle text-primary"
      >
      <i className="icon icon-search"></i>
      <span>Nombre de hotel</span>
      <i
        className={
          `fa ml-auto align-self-center text-primary fa-caret-up`
        }
        aria-hidden="true">
      </i>
    </div>
    </div>
  </div>
)