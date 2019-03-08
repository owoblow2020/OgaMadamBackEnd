import {all} from 'redux-saga/effects';
import { watchLogin } from './BatchSaga';

export default function* rootSaga(){
    yield all([
        watchLogin()
    ]);
}