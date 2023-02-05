import React from "react";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./src/redux/reducers";
import rootSaga from "./src/redux/sagas";
import { StatusBar } from "react-native";
import Root from "./src/root";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const App = () => {

  return (

    <Provider store={store}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle="dark-content" />
      <Root />
    </Provider >

  );
}


export default App;