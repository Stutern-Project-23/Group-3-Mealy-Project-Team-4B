// import { Routes, Route } from "react-router-dom";
import CreateNewPassword from "./components/CreateNewPassword";
import ForgotPassword from "./components/ForgotPassword";
import SetDelivery from "./components/SetDelivery";
import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/set-delivery" element= {<SetDelivery/>}/>
        <Route path="/create-new-password" element= {<CreateNewPassword/>}/>
        <Route path="/landing-page" element= {<LandingPage/>}/>
        <Route path="/forgot-password" element= {<ForgotPassword/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
