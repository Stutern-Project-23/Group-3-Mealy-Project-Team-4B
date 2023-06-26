import NavBarComp from "../pages/LandingPage/_partials/NavBarComp";
import Footer from "./Footer";
// import Header from "./Header";
import Hero from "./Hero";
import SideSec from "./SideSec";

function Resturant() {
  return (
    <>
      {/* <Header /> */}
      <NavBarComp showSearchInput={false} />
      <Hero />
      <SideSec />
      <Footer />
    </>
  );
}

export default Resturant;
