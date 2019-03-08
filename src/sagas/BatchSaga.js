import {takeLatest, put} from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS } from '../actions/ActionType';
import {Api} from './ApiFetch';

function* login(loginParam){
    try {
        const loginRes = yield Api.loginFetch(loginParam);
        if(loginRes.ResponseCode === 200){
           yield put({type:LOGIN_SUCCESS, loginSuccess:loginRes.Data});
        }else{

        }
    } catch (error) {
        
    }
}

export function* watchLogin(){
    yield takeLatest(LOGIN, login);
}