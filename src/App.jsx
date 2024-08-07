import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";


export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<About />} /> */}
        <Route path="/" element={<Skill />} />
        {/* <Route path="/" element={<Navbar/>} /> */}
        {/* <Route path="/" element={<Footer/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
