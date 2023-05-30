import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import Verification from "./components/Verification";
import Footer from "./components/Footer"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
    // <div className="App">
    //   {<Homepage > }
    //   <Footer/>
    // </div>
  );
}

export default App;
