import React, { Component } from 'react';
import {connect} from 'react-redux';


class Number extends Component {
    state = {  } 

    handleClick = () => {
        this.props.concat('y');
    }
    render() { 
        console.log(this.props);
        return (
            <React.Fragment>
                <h3>number:{this.props.number}</h3>
                <button onClick={this.handleClick}>添加</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        number: state.number,
    };
};

const mapDispatchToProps = {
    concat: (c) => {
        return {
            type: "concat",
            character: c,
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Number);