import { LOGIN_SUCCESS } from "../actions/ActionType";


export const LoginReducer = (state = {}, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.loginSuccess;    
        default:
            return state;
    }

}