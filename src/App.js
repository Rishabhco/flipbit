import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<div>About</div>}/>
          <Route path="/contact" element={<div>Contact</div>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
