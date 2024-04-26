import './App.css';
//import { MenuHeader, SimpleMenu} from './components/MenuHeader'
//import Navigation from './components/Navigation'; Debug
import MainPage from './pages/MainPage';
import PageSoon from './pages/PageSoon'; //Version Beta !
import Data from './data/Api'
import PageNotFound from './pages/PageNotFound' //Page Maintenance ou invalide

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        {/* ---Area tmp--- */}
        <Router>
        <Routes>
            <Route path='/' exact element={<PageSoon />}/>
            <Route path='/YsportMain' element={<MainPage />} />
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