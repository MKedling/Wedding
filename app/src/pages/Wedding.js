import React, {Component} from 'react';
import './Wedding.css'
import image from './../images/kyrka.jpg';

class Wedding extends Component {
  render() {
    return (
      <div className="content wedding center">

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
              <h2>Vigsel</h2>
              <p>
                Vigsel sker i Lovö kyrka lördagen den 27 Juli kl 14.30. Större sällskap utan bil åker taxi från Brommaplan för en billig peng. Mindre sällskap kommer erbjudas möjlighet att åka med någon som passerar brommaplan med bil.
              </p>

            </div>

          </article>

        </div>
      </div>
    );
  }

}

export default Wedding;