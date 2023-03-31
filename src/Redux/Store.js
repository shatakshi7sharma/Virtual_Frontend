
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers";
//import rootReducer from "./Reducers/RootReducer";
import rootSaga from "./Sagas";


const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth","addPropertyReducer"],
};

const composeEnhancers =
  (process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
  compose;

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
