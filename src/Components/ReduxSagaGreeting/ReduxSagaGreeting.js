import React, { Component } from 'react';
import './ReduxSagaGreeting.scss';
import {connect} from "react-redux";

class ReduxSagaGreeting extends Component {
    render() {
        return (
            <div className="TestReduxSagaString">
                <h1>{this.props.greeting}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.greeting
    }
};

export default connect(mapStateToProps)(ReduxSagaGreeting);
