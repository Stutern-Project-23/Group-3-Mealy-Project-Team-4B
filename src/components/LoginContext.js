import { useState } from "react";
import { createContext } from "react";


const LoginContext = createContext();

const LoginProvider = ({children})=>{
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPw, setShowForgotPw] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showAddDelivery, setShowAddDelivery] = useState(false);
    // const [activeModal, setActiveModal] = useState('')
    // const [isShowModal, setShowModal] = useState(false)

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

    const openAD = () =>{
        setShowAddDelivery(true)
    }

    const closeAD = () =>{
        setShowAddDelivery(false)
    }



    return(
        <LoginContext.Provider value = 
        {{
            isLoggedIn, login, logout, 
            showLogin, openLogin, closeLogin, 
            showForgotPw, showFPW, closeFPW, 
            showSignUp, openSignup, closeSignup ,
            showAddDelivery, openAD, closeAD,
        }} >
            {children}
        </LoginContext.Provider>
    )
}

export {LoginContext, LoginProvider};
