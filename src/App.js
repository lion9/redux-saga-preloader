import React, { Component } from 'react';
import './App.scss';
import Loader from "./Loader";
import TestReduxSagaString from "./TestReduxSagaString";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./store";

class App extends Component {

    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    { this.props.loading && <Loader /> }
                    { this.props.loading || <TestReduxSagaString /> }
                </div>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
};


export default connect(mapStateToProps)(App);
