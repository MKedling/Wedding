import React, { Component } from 'react';
import image from "../images/spanien2.png";


class Practical extends Component {
    state = {test: 'Practical'}
    render ()
    {
        return (
          <div className="content wedding center">

            <article className="jumbotron text-center">
              <div className="view overlay my-2">
                <span>
                  <img src={image} className="img-fluid" alt=""/>
                </span>
                <div className="content-text">
                  <h2>PROGRAM</h2>
                  <p>
                    Vigsel
                  </p>
                  <p>
                    Fest
                  </p>
                </div>

              </div>
            </article>
          </div>
        );
    }

}

export default Practical;