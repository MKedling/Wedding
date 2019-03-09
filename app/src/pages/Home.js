import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

    render ()
    {

        return (

          <div className="home">

            {this.props.navLinks.filter(e => e.name !== "home").map((link) => (
              <article className="jumbotron text-center">

                <div className="view overlay my-2">
                  <a href={link.to}>
                    <div className="mask rgba-white-slight"><span className="link-name">{link.displayName}</span></div>
                    <img src={link.image} className="img-fluid" alt="" />
                  </a>
                </div>


              </article>
            ))}

          </div>

        );
    }

}

export default Home;