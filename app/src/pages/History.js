import React, { Component } from 'react';

import imageGrand from '../images/grand.JPG';
import imagePekke from '../images/pekke.JPG';
import imageHeadshot from '../images/headshot.JPG';

class History extends Component {
    render ()
    {
        return (
          <div className="content history center">

            <article className="jumbotron text-center">
              <div className="view overlay my-2">
                <img src={imageGrand} className="img-fluid" alt="" />
                <img src={imagePekke} className="img-fluid" alt="" />
                <img src={imageHeadshot} className="img-fluid" alt="" />
                <h2>TEXT</h2>
                <p>
                  text
                </p>

              </div>
            </article>
          </div>

        );
    }

}

export default History;