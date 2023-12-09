import './App.css';
//import { MenuHeader, SimpleMenu} from './components/MenuHeader'
import Navigation from './components/Navigation';
import MainPage from './pages/MainPage';
import PageSoon from './pages/PageSoon'; //Version Beta !
import Map from './components/Map'; //Map
import Data from './data/Api'
import PageNotFound from './pages/PageNotFound' //Page Maintenance ou invalide

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        {/* ---Area tmp--- */}
        <Router>
        <Navigation />
        <Routes>
            <Route path='/' exact element={<PageSoon />}/>
            <Route path='/YsportMain' element={<MainPage />} />
            <Route path='/Map' element={<Map />} />
            <Route path='/Data' element={<Data />} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
        </Router>

        {/* ---Area on--- */}
      </header>
    </div>
  );
}

export default App;