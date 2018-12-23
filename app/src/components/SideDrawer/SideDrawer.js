import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <button type="button" className="close" aria-label="Close" onClick={props.click}>
        <span aria-hidden="true">&times;</span>
      </button>
      <ul>
        <span onClick={props.click}>
          {props.links}
        </span>
      </ul>
    </nav>
  );
};

export default sideDrawer;
