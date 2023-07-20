import CreateNewPassword from "./modal_views/CreateNewPasswordModal";
import SetDelivery from "./components/SetDelivery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/Landingpage";

import { GlobalProvider } from "./context";
import { PageNotFound } from "./components/PageNotFound";
import Delivery from "./components/Delivery";
import BulkOrder from "./components/BulkOrder";
import Pickup from "./components/Pickup";
import OtpActivationModal from "./modal_views/OtpActivationModal";
import CartModal from "./modal_views/CartModal";

import RestaurantMenu from "./pages/RestaurantMenu";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/cart-modal" element={<CartModal />} />
            <Route path="/otp-activation" element={<OtpActivationModal />} />
            <Route path="/" element={<Homepage />} />
            <Route path="set-delivery" element={<SetDelivery />} />
            <Route
              path="/create-new-password"
              element={<CreateNewPassword />}
            />
            <Route
              path={`restaurant-menu/:restaurantId`}
              element={<RestaurantMenu />}
            />
            <Route path="/landing-page/" element={<LandingPage />}>
              <Route index element={<Delivery />} />
              <Route path="delivery" element={<Delivery />}></Route>
              <Route path="pick-up" element={<Pickup />}></Route>
              <Route path="bulk-order" element={<BulkOrder />}></Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
