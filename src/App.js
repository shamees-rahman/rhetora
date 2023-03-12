import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/useCases" element={<Navbar />}></Route>
          <Route path="/pricing" element={<Navbar />}></Route>
          <Route path="/resources" element={<Navbar />}></Route>
          <Route path="/bookDemo" element={<Navbar />}></Route>
          <Route path="/login" element={<Navbar />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
