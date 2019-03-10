import React, {Component} from 'react';
import './History.css'
import imageGrand from '../images/grand.JPG';
import imagePekke from '../images/pekke.JPG';
import imageHeadshot from '../images/headshot.JPG';

class History extends Component {
  render() {
    return (


      <div className="content wedding center">

        <div className="content practical center">

          <article className="jumbotron text-center grand">
            <div className="view overlay my-2">
              <span>
              <img src={imageGrand} className="img-fluid" alt=""/>
              </span>
            </div>
          </article>

          <article className="content-text">
            <div>
              <h2>Historia</h2>
              <p>
                2006 letade sig en livsmedelsproducent från Strockholm sig till en dans på Sandviken utanför Östersund. Där träffade han en jämtlandstös. 2008 blev de ett par som hösten 2009 flyttade ihop.
                25/8-2018 tog de en tur med båten som slutade i förlovning. Den 27/7 - 2019 blir de man & hustru.
              </p>
            </div>
          </article>


          <article className="jumbotron text-center after">
            <div className="view overlay my-2">
              <span>
              <img src={imageHeadshot} className="img-fluid" alt=""/>
              </span>
            </div>
          </article>
          <article className="jumbotron text-center after pekke">
            <div className="view overlay my-2">
              <span>
              <img src={imagePekke} className="img-fluid" alt=""/>
              </span>
            </div>
          </article>

        </div>
      </div>


    );
  }

}

export default History;




