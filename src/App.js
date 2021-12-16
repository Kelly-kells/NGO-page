import "./index.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Archive } from "./components/pages/Archive";
import { Contact } from "./components/pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <div className="pages">
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/archive" element={<Archive />} />
     <Route path="/contact" element={<Contact />} /> 
      </Routes>
      </div>
    </Router>
    </div>
  );
}



export default App;
