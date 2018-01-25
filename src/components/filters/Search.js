import React from 'react';

export const Search = ({
  searchToggle,
  handleToggle,
  handleInput,
  handleSearchSubmit
}) => (
  <div className="row filter-search">
    <div className="col" onClick={handleToggle} name="searchToggle">
      <div
        className="d-flex justify-content-middle text-primary"
      >
      <i className="icon icon-search"></i>
      <span>Nombre de hotel</span>
      <i
        className={
          `fa ml-auto align-self-center text-primary
          ${searchToggle ? 'fa-caret-down' : 'fa-caret-up'}`
        }
        aria-hidden="true">
      </i>
    </div>
    </div>
    <div className="w-100"></div>
    <div className="col-12 col-lg-9" hidden={searchToggle}>
      <form className="form-inline" onSubmit={handleSearchSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="search"
            name="search"
            placeholder="Ingrese el nombre del hotel"
            onInput={handleInput}
          />
          <button type="submit" className="btn btn-primary" onClick={handleSearchSubmit}>Aceptar</button>
        </div>
      </form>
    </div>
  </div>
)