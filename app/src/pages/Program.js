import React, { Component } from 'react';


class Program extends Component {
    state = {test: 'Program'}
    render ()
    {
        return (
            <div className="program">{this.state.test}</div>
        );
    }

}

export default Program;