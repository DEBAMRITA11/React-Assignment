import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
