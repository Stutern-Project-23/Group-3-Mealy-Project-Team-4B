import { useState } from "react";
import { createContext } from "react";


const LoginContext = createContext();

const LoginProvider = ({children})=>{
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPw, setShowForgotPw] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const login = () => {
        setIsloggedIn(true)
    }

    const logout =() => {
        setIsloggedIn(false)
    }

    const openLogin =() =>{
        setShowLogin(true)
    }

    const closeLogin =() =>{
        setShowLogin(false)
    }

    const showFPW = () =>{
        setShowForgotPw(true)
    }

    const closeFPW = () =>{
        setShowForgotPw(false)
    }

    const openSignup =()=>{
        setShowSignUp(true)
    }

    const closeSignup =()=>{
        setShowSignUp(false)
    }



    return(
        <LoginContext.Provider value = 
        {{
            isLoggedIn, login, logout, 
            showLogin, openLogin, closeLogin, 
            showForgotPw, showFPW, closeFPW, 
            showSignUp, openSignup, closeSignup 
        }} >
            {children}
        </LoginContext.Provider>
    )
}

export {LoginContext, LoginProvider};
