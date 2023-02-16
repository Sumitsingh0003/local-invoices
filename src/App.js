import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './templates/Main'
import Header from './templates/Hedare'
import Footer from './templates/Footer'
import Login from './templates/Login'
import Register from './templates/Register'
import About from './templates/About'
import Contact from './templates/Contact'

function App() {
  return (
    <>
     <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />    
          <Route path="/about" element={<About/>} />          
          <Route path="/contact" element={<Contact/>} />          
        </Routes>
        <Footer />
     </Router>
    </>
  );
}

export default App;
