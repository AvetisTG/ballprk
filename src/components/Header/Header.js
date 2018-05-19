import React, { Component } from 'react';
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='header-main'>
        <div className="header-content">
          <div className='header-logo'>BALLPRK</div>
          <div className='header-rightside'>
            <div>LOGOUT</div>
          </div>
        </div>
      </div>
    );
  }
}
