import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { Sidebar, Hotel, Stars, Header, Search } from '../components';
import { fetchHotels } from '../redux/actions';

class App extends Component {
  state = {
    search: '',
    stars: [],
    starsToggle: false,
    searchToggle: false,
  }

  componentDidMount() {
    this.props.fetchHotels();
  }

  handleToggle = (e) => {
    const name = e.currentTarget.getAttribute('name');
    this.setState((prevState, props) => ({
      [name]: !prevState[name],
    }));
  }

  handleStarsChange = (e) => {
    const { value } = e.currentTarget;
    const index = this.state.stars.indexOf(value);
    if (index === -1) {
      this.setState((prevState, props) => ({
        stars: [
          ...prevState.stars,
          value
        ],
      }));
    } else {
      this.setState((prevState, props) => ({
        stars: [
          ...prevState.stars.slice(0, index),
          ...prevState.stars.slice(index + 1)
        ],
      }));
    }
  }

  handleInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({[name]: value });
  }

  handleSearchSubmit = (e) => {
    console.log('Search Submitted');
    e.preventDefault();
  }

  render() {
    return (
      this.props.loading ? 'Loading...' :
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col col-lg-3">
              <div className="row filter-title">
                <div className="col">
                  <span className="text-primary">Filtros</span>
                </div>
              </div>
              <Sidebar>
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
                />
              </Sidebar>
            </div>
            <main className="col">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => this.props.hotels.map(
                    hotel => <Hotel key={hotel.objectId} {...props} hotel={hotel} />
                  )}
                />
                <Route render={(props) => <h1>404 Not Found </h1>} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels.hotels,
  loading: state.hotels.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchHotels: () => dispatch(fetchHotels()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));