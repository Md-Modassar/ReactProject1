import './App.css';
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Hearder from './components/Hearder';
//import Footer from './components/Footer';

function App() {
  return (
    <div>
       {/* <Navbar/>
       <Hearder/>
       <About/>
       <Contact/> */}
       <Routes>
        <Route path='/' element={<Hearder/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
       </Routes>
       {/* <Footer/> */}
    </div>
  );
}

export default App;
