import React, {Component} from "react";
import "./App.css";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import reducers from './redux/reducers/index';
import rootSaga from "./redux/sagas/index";
import createSagaMiddleware from 'redux-saga';
import {Route, Router} from 'react-router-dom';
// import {Router} from 'react-router';
import HISTORY from "./util/history";
import LoadingSpinner from "./components/LoadingSpinner";
import DetailScreen from "./screens/detailScreen";
import ListScreen from "./screens/listScreen";
import SearchListScreen from "./screens/searchListScreen";

class App extends Component {

    render() {
        const sagaMiddleware = createSagaMiddleware();
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        const store = createStore(
            reducers,
            // applyMiddleware(sagaMiddleware),
            composeEnhancers(applyMiddleware(sagaMiddleware)),
        );

        sagaMiddleware.run(rootSaga);

        const history = HISTORY;

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route exact={true} path="/" url="/" component={ListScreen}/>
                    <Route path="/details:id" component={DetailScreen}/>
                    <Route exact={true} path="/search" component={SearchListScreen}/>
                    <Route path="/loading" component={LoadingSpinner}/>
                </Router>
            </Provider>
        );
    }
}


export default App;
