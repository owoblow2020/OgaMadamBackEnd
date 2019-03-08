import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { allReducer } from './reducers/allReducer';
import rootSaga from './sagas/rootSaga';
import {loadState, saveState} from './localStorage';

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const Store = createStore(allReducer, persistedState, applyMiddleware(sagaMiddleware));

Store.subscribe(()=>{
    saveState(Store.getState());
});

sagaMiddleware.run(rootSaga);

export default Store;