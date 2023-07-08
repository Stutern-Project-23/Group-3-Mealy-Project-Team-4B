import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SideSec from "../../components/SideSec";
import ModalControl from "../../modal_views/ModalControl";
import "./RestaurantMenu.css";

function RestaurantMenu() {
  return (
    <div className="restaurant-menu-container">
      <ModalControl />
      <NavBarComp showSearchInput={false} />
      <Hero />
      <SideSec />
      <Footer />
    </div>
  );
}

export default RestaurantMenu;
