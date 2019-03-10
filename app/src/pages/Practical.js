import React, { Component } from 'react';
import image from "../images/spanien2.png";


class Practical extends Component {
    state = {test: 'Practical'}
    render ()
    {
        return (
          <div className="content practical center">

            <article className="jumbotron text-center">
              <div className="view overlay my-2">
                <span>
                  <img src={image} className="img-fluid" alt=""/>
                </span>
              </div>
            </article>

            <article className="content-text">

              <div>
                <h2>Schema</h2>
                <p>
                  Dagen börjar med vigsel i Lovö kyrka kl 14.30. Efter vigseln sker gemensam transport till Ekebyovs slott för middag och fest fram till kl 02.00.
                </p>

              </div>

              <div>
                <h2>Tal</h2>
                <p>
                  Vill du hålla tal eller göra någotnting annat roligt under middagen så hör du av dig till vår toastmaster David på email david_solberger@hotmail.com.
                </p>
              </div>

              <div>
                <h2>Osa</h2>
                <p>
                  Osa görs till Sara så snart som möjligt - meddela ifall du har någon allergi eller övriga matpreferenser.
                </p>

              </div>

              <div>
                <h2>Önskelista</h2>
                <p>
                  Att ni kommer och delar vår dag med oss är den största gåvan. För er som ändå vill ge oss en gåva
                </p>
              </div>

              <div>
                <h2>Frågor och funderingar</h2>
                <ul>
                  <li>
                    <span className="contact">Sara, 073-8376860 eller sara.solberger@hotmail.com</span>
                  </li>
                  <li>
                    <span className="contact">Mattias 073-9335198 eller matte_ked@hotmail.com</span>
                  </li>
                  <li>
                    <span>David toastmaster david_solberger@hotmail.com.</span>
                  </li>
                  <li>
                    <span className="contact">Frida tärna, 070-6507893</span>
                  </li>
                  <li>
                    <span className="contact">Oskar bestman, 070-8935038</span>
                  </li>
                </ul>

              </div>

            </article>


          </div>
        );
    }

}

export default Practical;