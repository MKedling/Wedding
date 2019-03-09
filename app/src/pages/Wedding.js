import React, {Component} from 'react';
import './Wedding.css'
import imageWedding from './../images/kyrka.jpg';

class Wedding extends Component {
  render() {
    return (
      <div className="content wedding center">

        <article className="jumbotron text-center">
          <div className="view overlay my-2">
            <img src={imageWedding} className="img-fluid" alt="" />
            <h2>VIGSEL</h2>
            <p>
              Vigseln sker i Lovö kyrka
            </p>

          </div>
        </article>
      </div>
    );
  }

}

export default Wedding;