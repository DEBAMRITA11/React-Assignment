import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Events from './components/Events/Events';
import Booking from './components/Booking/Booking';
import SignIn from './components/SignIn/SignIn';
import RequirAuth from './components/RequirAuth/RequirAuth';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<RequirAuth><Events /></RequirAuth>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
