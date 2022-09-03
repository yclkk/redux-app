import React, { Component } from 'react';
import {connect} from 'react-redux'

class String extends Component {
    state = {  } 

    handleAddClick = () => {
        this.props.add(2);
    }

    handleSubClick = () => {
        this.props.sub(1);
    }
    render() { 
        return (
            <React.Fragment>
                <h3>string:{this.props.string}</h3>
                <button onClick={this.handleAddClick}>加</button>
                <button onClick={this.handleSubClick}>加</button>

            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state, props) => {
    return {
        string: state.string,
    }
}

const mapDispatchToProps = {
    add: (c) => {
        return {
            type: "add",
            value: c,
        }
    },
    sub: (c) => {
        return {
            type: 'sub',
            value: c,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(String);