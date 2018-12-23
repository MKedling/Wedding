import React from 'react';


import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => {

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar__title text-sm-center"><a href="/">M/S Kedling</a></div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
          <ul>
            {props.links}
          </ul>
        </div>
      </nav>
    </header>
  );

};

export default toolbar;




