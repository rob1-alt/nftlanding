import React, { Component } from 'react';

class navBar extends Component {
  render() {
    return (
      <div>
          <ul className='navBar'>
            <li>About</li>
            <li>Projects</li>
            <li>Marketplace</li>
            <li>Governance</li>
            <li>Discord</li>
          </ul>
      </div>
    );
  }
}

export default navBar;