import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas'
import { reducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export default store