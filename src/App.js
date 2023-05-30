// import { Routes, Route } from "react-router-dom";
import CreateNewPassword from "./components/CreateNewPassword";
import ForgotPassword from "./components/ForgotPassword";
import SetDelivery from "./components/SetDelivery";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import Verification from "./components/Verification";
// import Footer from "./components/Footer"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App (){

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>index</p>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/delivery",
    element: <SetDelivery/>
  },
  {
    path: "/create-new-password",
    element: <CreateNewPassword/>
  },
  {
    path: "/homepage",
    element: <Homepage/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/verification",
    element: <Verification/>
  }
]);


return (
  <div className="App">
    <RouterProvider router={router} />
  </div>
)}


export default App;
