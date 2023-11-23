import './App.css';
import MenuHeader from './components/MenuHeader'
import PageSoon from './pages/PageSoon'; //Version Beta !

function App() {
  return (
    <div className="App">
      <header>
        {/* ---Area tmp--- */}
        <MenuHeader />
        <PageSoon />

        {/* ---Area on--- */}
      </header>
    </div>
  );
}

export default App;