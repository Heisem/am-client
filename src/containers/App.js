import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { fetchHotels } from '../redux/actions';
import { Sidebar } from './Sidebar';
import { Header, Hotel } from '../components';

class App extends Component {

  componentDidMount() {
    this.props.fetchHotels();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">          
          <div className="row">
            <div className="col col-lg-3">
              <Sidebar {...this.props} />
            </div>
            {
              this.props.loading ? 'Loading...' :
              <main className="col-12 col-lg-9">
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
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels.hotels,
  loading: state.hotels.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHotels: (query) => dispatch(fetchHotels(query)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
