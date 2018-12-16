import React, { Component } from 'react';

import {Link } from "react-router-dom";


class Navbar extends Component {

    state ={
        navLinks : [
            {to: '/',           displayName: 'Hem'},
            {to: '/program',    displayName: 'Program'},
            {to: '/wedding',    displayName: 'Vigsel'},
            {to: '/party',      displayName: 'Fest'}
        ]
    }
    render ()
    {

        const links = this.state.navLinks.map((link) =>
            <li className="nav-item">
                <Link key={link.key} to={link.to} className="nav-link">{link.displayName}</Link>
            </li>);

        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                        <ul className="navbar-nav">
                            {links}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}

export default Navbar;