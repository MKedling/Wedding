import React from 'react';


import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => {

  return (
    <header className="toolbar col-xs-12 col-sm-12">
      <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button d-flex d-md-none">
            <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>
          <div className="toolbar__title d-flex col-sm-12 col-md-6"><a href="/" className="text-center">M/S Kedling</a></div>
          <div className="toolbar_navigation-items d-none d-md-flex col-md-6 float-right">
            <ul className="float-right">
              {props.links}
            </ul>
          </div>
      </nav>
    </header>
  );

};

export default toolbar;




