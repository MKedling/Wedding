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
              </div>
            </article>

            <article className="content-text">
              <div>
                <h2>FEST</h2>
                <p>
                  Efter vigseln välkomnas ni till Ekebyhovs slott. Här blir det mingel med tilltugg följt av 3-rätters middag. Efter maten bjuds det till fest med öppen bar. Framåt midnatt serveras vickning.
                </p>
              </div>
              <div>
                <h2>Spellista</h2>
                <p>
                  Önska gärna låtar till spellistan för att vara säker på att just din låt kommer spelas. Maila ditt önskemål till sara.solberger@hotmail.com.
                </p>
              </div>
            </article>

          </div>

        );
    }

}

export default Party;