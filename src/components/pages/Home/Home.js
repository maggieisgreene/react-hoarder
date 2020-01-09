import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link className="btn btn-light" to="/stuff">Go To My Stuff</Link>
        <Link className="btn btn-light" to="/stuff/new">Go To New</Link>
      </div>
    );
  }
}

export default Home;
