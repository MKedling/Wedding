import React, { Component } from 'react';

import image from '../images/castle.jpg';

class Party extends Component {
    render ()
    {
        return (
          <div className="content wedding center">

            <article className="jumbotron text-center">
              <div className="view overlay my-2">
                <span>
                  <img src={image} className="img-fluid" alt="" />
                </span>
                <div class="content-text">
                  <h2>FEST</h2>
                  <p>
                    Festen sker på Ekebyhovs slott
                  </p>
                </div>

              </div>
            </article>
          </div>

        );
    }

}

export default Party;