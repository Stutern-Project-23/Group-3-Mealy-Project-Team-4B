// import { Routes, Route } from "react-router-dom";
import CreateNewPassword from "./components/CreateNewPassword";
import ForgotPassword from "./components/ForgotPassword";
import SetDelivery from "./components/SetDelivery";
import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="forgot-password" element= {<ForgotPassword/>}/>
        <Route path="set-delivery" element= {<SetDelivery/>}/>
        <Route path="create-new-password" element= {<CreateNewPassword/>}/>
        <Route path="landing-page" element= {<LandingPage/>}/>
        <Route path="signup" element={<SignUp/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
