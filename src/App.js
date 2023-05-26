import CreateNewPassword from "./components/CreateNewPassword";
import ForgotPassword from "./components/ForgotPassword";
import SetDelivery from "./components/SetDelivery";
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
]);

return (
  <div className="App">
    <RouterProvider router={router} />
  </div>
)}

export default App;
