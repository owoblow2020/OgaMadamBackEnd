import { LOGIN } from "./ActionType";

export const loginAction = (loginParam) =>{
    return{
        type: LOGIN,
        loginParam
    }
}