import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <Link to='/registration'>
          <button className='home-registration-button'>Register</button>
        </Link>
      </div>
    );
  }
}

export default Home;
