import { LOGIN_API, LOCAL_AUTHORIZATION } from "./ApiList";

function* loginFetch(loginParam){
    return yield fetch(LOGIN_API, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: LOCAL_AUTHORIZATION
        },
        body: JSON.stringify({
            "Email":loginParam.loginParam.email,
            "Password":loginParam.loginParam.password
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
        }).catch(function (err) {
            console.log(err);
        });
}

export const Api = {
    loginFetch
}