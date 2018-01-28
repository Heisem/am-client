import React, { Component } from 'react';

import { Stars, Search } from '../components';

export class Sidebar extends Component { 
    state = {
      search: '',
      stars: [],
      starsToggle: false,
      searchToggle: false,
    }

    handleToggle = (e) => {
      const name = e.currentTarget.getAttribute('data-name');
      this.setState((prevState, props) => ({
          [name]: !prevState[name],
      }));
    }

    handleStarsChange = (e) => {
      const value = Number(e.currentTarget.value);
      const index = this.state.stars.indexOf(value);
      if (index === -1) {
        this.setState((prevState, props) => ({
          stars: [
            ...prevState.stars,
            value
          ],
        }), () => this.props.fetchHotels(this.state));
      } else {
        this.setState((prevState, props) => ({
          stars: [
            ...prevState.stars.slice(0, index),
            ...prevState.stars.slice(index + 1)
          ],
        }), () => this.props.fetchHotels(this.state));
      }
    }
  
    handleAllStarsChange = (e) => {
      this.setState({ stars: [] }, () => this.props.fetchHotels(this.state))
    }

    handleInput = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleSearchSubmit = (e) => {
      e.preventDefault();
      this.props.fetchHotels(this.state);
    }

    render() {
      return (
        <aside className="row">
          <div className="col">
            <div className="row filter-title">
              <div className="col">
                <span className="text-primary">Filtros</span>
              </div>
            </div>
            <Search
              searchToggle={this.state.searchToggle}
              handleInput={this.handleInput}
              handleToggle={this.handleToggle}
              handleSearchSubmit={this.handleSearchSubmit}
            />
            <Stars
              starsToggle={this.state.starsToggle}
              handleToggle={this.handleToggle}
              handleStarsChange={this.handleStarsChange}
              stars={this.state.stars}
              handleAllStarsChange={this.handleAllStarsChange}
            />
          </div>
        </aside>
      );
    }
}
