import React, { Component, Fragment } from 'react';
import String from './string';
import Number from './number';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <String />
                <hr />
                <Number />
            </React.Fragment>
        );
    }
}
 
export default App;