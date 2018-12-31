import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render ()
    {

        return (

          <div className="home">

            {this.props.navLinks.map((link) => (
              <article className="jumbotron text-center">

                <div className="view overlay my-2">
                  <a href={link.to}>
                    <img src={link.image} className="img-fluid" alt="" />
                    <div className="mask rgba-white-slight"><span className="link-name">{link.displayName}</span></div>
                  </a>
                </div>


              </article>
            ))}

          </div>

        );
    }

}

export default Home;