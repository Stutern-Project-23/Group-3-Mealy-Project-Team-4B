import CreateNewPassword from "./modal_views/CreateNewPasswordModal";
import ForgotPasswordModal from "./modal_views/ForgotPasswordModal";
import SetDelivery from "./components/SetDelivery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";
import SignupModal from "./modal_views/SignupModal";
import LoginModal from "./modal_views/LoginModal";
import EditName from "./modal_views/EditNameModal";
import EditPassword from "./modal_views/EditPasswordModal";
import { GlobalProvider } from "./context";
import { PageNotFound } from "./components/PageNotFound";
import Delivery from "./pages/LandingPage/_partials/Delivery";
import { BulkOrder } from "./pages/LandingPage/_partials/BulkOrder";
import { Pickup } from "./pages/LandingPage/_partials/Pickup";
// import Resturant from "./components/Resturant";

import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="landing-page/edit-password"
              element={<EditPassword />}
            />
            <Route path="landing-page/edit-name" element={<EditName />} />
            <Route path="/" element={<Homepage />} />
            <Route path="set-delivery" element={<SetDelivery />} />
            <Route path="create-new-password" element={<CreateNewPassword />} />
            <Route path="landing-page" element={<LandingPage />}>
              <Route index element={<Delivery />} />
              <Route path="all-restaurants" element={<Delivery />} />
              <Route path="pick-up" element={<Pickup />} />
              <Route path="bulk-order" element={<BulkOrder />} />
            </Route>
            <Route path="forgot-password" element={<ForgotPasswordModal />} />
            <Route path="signup" element={<SignupModal />} />
            <Route path="login" element={<LoginModal />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
