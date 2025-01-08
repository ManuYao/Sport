import "./styles/App.css";
//import { MenuHeader, SimpleMenu} from './components/MenuHeader'
//import Navigation from './components/Navigation'; Debug
// import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import PageSoon from "./pages/PageSoon"; //Version Beta !
import Map from "./pages/Map";
import PageNotFound from "./pages/PageNotFound"; //Page Maintenance ou invalide
// import GymMapPage from "./pages/Map";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        {/* ---Area tmp--- */}
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path='/YsportMain' element={<MainPage />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/map" element={<GymMapPage />} /> */}
          </Routes>
        </Router>

        {/* ---Area on--- */}
      </header>
    </div>
  );
}

export default App;
