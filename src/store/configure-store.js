/* eslint-disable */
import createSagaMiddleware from "redux-saga";
import { get, throttle } from "lodash";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import rootSaga from "./saga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== "production") {
    const { compose } = require("redux");
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    middlewares = applyMiddleware(...middlewares);
    middlewares = composeEnhancers
      ? composeEnhancers(middlewares)
      : compose(middlewares);
  } else {
    middlewares = applyMiddleware(...middlewares);
  }

  const store = createStore(reducers, middlewares);

  store.runSaga = sagaMiddleware.run;

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default;
    });
  }

  store.subscribe(
    throttle(() => {
      const { auth, user } = store.getState();
    }, 1000)
  );
  store.runSaga(rootSaga);
  return store;
};

export const store = configureStore();
// export const persistor = persistStore(store);
export const getData = (attr, notFound) =>
  get(store.getState(), attr, notFound);

export default configureStore;
