import {Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';

function App() {
  return (
    <Routes>

      <Route path='/' element={<Homepage/>}>

      </Route>
    </Routes>
    // <div className="App">
    //   {/* <Homepage /> */}
    //   <SignUp/>
    // </div>
  );
}

export default App;
