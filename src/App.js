import React, { Component } from "react";
import "./App.css";
import { applyMiddleware, createStore, compose} from "redux";
import {Provider} from 'react-redux';
import reducers from './redux/reducers/index';
import rootSaga from "./redux/sagas/index";
import createSagaMiddleware from 'redux-saga';
import { Router, Route} from 'react-router-dom';
import history from "./util/history";
import LoadingSpinner from "./components/LoadingSpinner";
import DetailScreen from "./screens/detailScreen";
import ListScreen from "./screens/listScreen";
class App extends Component {

  render() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store}>
          <Router history={history}>
            <Route exact={true} path="/" component={ListScreen} />
            <Route path="/details:id" component={DetailScreen} />
            {/*<Route path="/quiz" component={Quiz} />*/}
            {/*<Route path="/results" component={Results} />*/}
            <Route path="/loading" component={LoadingSpinner} />
          </Router>
        </Provider>
    );
  }
}


export default App;
