import { handleActions} from "redux-actions";
const jwt = require("jsonwebtoken");

const defaultState = {
    phoneVal: "",
    passwordVal: "",
    successshow: false,
    errorshow: false,
    successVal: "注册成功",
    // 登录
    phoneLogin: "",
    pwdLogin: "",

}
export default handleActions({
    // --------注册
    CHANGEVAL: (state, action) => {
        let inputState = JSON.parse(JSON.stringify(state))
        // console.log(action)
        switch (action.payload.sign) {
            case "phone":
                inputState.phoneVal = action.payload.val
                return inputState;
            case "pwd":
                inputState.passwordVal = action.payload.val
                return inputState;
        }
    },
    //提交按钮
    SUBVAL: (state, action) => {
        let inputState = JSON.parse(JSON.stringify(state))
        // console.log(action)
        let obj = {
            phone: inputState.phoneVal,
            pwd: inputState.passwordVal
        }
        //注册
        if (sessionStorage.getItem("input")) {
            let getObj = JSON.parse(sessionStorage.getItem("input"))
            if (getObj.phone === obj.phone && getObj.pwd === obj.pwd) {
                inputState.successshow = true;
                inputState.successVal = "用户已注册";
                inputState.phoneVal = "";
                inputState.passwordVal = "";
                setTimeout(() => {
                    inputState.successshow = false;
                }, 500);
                return inputState;
            } else
            if (getObj.phone !== obj.phone || getObj.pwd !== obj.pwd) {
                sessionStorage.setItem("input", JSON.stringify(obj))
                inputState.successshow = true;
                inputState.successVal = "注册成功";
                inputState.phoneVal = "";
                inputState.passwordVal = "";
                setTimeout(() => {
                    inputState.successshow = false;
                }, 500);
                action.payload.history.push("/login")
                return inputState
            }
        } else {
            sessionStorage.setItem("input", JSON.stringify(obj))
            inputState.successshow = true;
            inputState.successVal = "注册成功";
            setTimeout(() => {
                inputState.successshow = false;
            }, 500);
            action.payload.history.push("/login")
            return inputState
        }
    },
    // --------登录
    LOGINCHANGEVAL: (state, action) => {
        let loginState = JSON.parse(JSON.stringify(state))
        switch (action.payload.sign) {
            case "phone":
                loginState.phoneLogin = action.payload.val
                return loginState;
            case "pwd":
                loginState.pwdLogin = action.payload.val
                return loginState;
        }
        console.log(loginState)
    },
    LOGINSUBVAL: (state, action) => {
        let loginState = JSON.parse(JSON.stringify(state))
        // console.log(action.payload.history)
        let obj = JSON.parse(sessionStorage.getItem("input"))
        if (loginState.phoneLogin === obj.phone && loginState.pwdLogin === obj.pwd) {
            let phone = loginState.phoneLogin
            let token = jwt.sign({
                phone
            }, "SHIXING", {
                expiresIn: 5000
            });
            sessionStorage.setItem("num", token);
            loginState.phoneLogin = "";
            loginState.pwdLogin = "";
            loginState.successshow = true;
            loginState.successVal = "登录成功";
            setTimeout(() => {
                loginState.successshow = false;
            }, 500);
            action.payload.history.push("/home")///////
        } else {
            loginState.phoneLogin = "";
            loginState.pwdLogin = "";
            loginState.successshow = true;
            loginState.successVal = "用户信息错误";
            setTimeout(() => {
                loginState.successshow = false;
            }, 500);
            
        }

        return loginState;
    }





}, defaultState)