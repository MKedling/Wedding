import React from 'react';


import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => {

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">

          <div className="toolbar__toggle-button d-flex d-md-none">
            <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>

          <div className="toolbar__title d-flex"><a href="/" className="">M/S Kedling</a></div>

          <div className="toolbar_navigation-items d-none d-md-block">
            <ul className="flexcontainer">
              {props.links}
            </ul>
          </div>

      </nav>
    </header>
  );

};

export default toolbar;




