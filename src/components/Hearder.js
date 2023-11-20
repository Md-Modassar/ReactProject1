import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./header.css"
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { threeitem } from '../data/Items';


const Hearder = () => {
  return (
    <>
    <Navbar/>
    <div className='header'>
         <h1>Everything<br/>
         is better<br/>
         with a <span className='s'>Burger</span></h1>
          <h4>Burger is the piece that makes every day<br/> complete, a simple yet deliciou joy in life</h4>
          <div className='buttons'>
        <button className='btn'>ORDER NOW <FaRegArrowAltCircleRight /></button>
        <h5>Learn more <FaRegArrowAltCircleRight/></h5>
        </div>
    </div>
    <div className='three'>
      <h6>CHECK OUT</h6>
      <h2>Our Best Seller</h2>
     
      <div className='three-card'>
       {
        threeitem.map((ele)=>{
        return(
          <div className='three-item'>
             <img src={ele.image} alt='' className='im'/>
             <h1 className='item-name'>{ele.name}</h1>
             <p>{ele.dis}</p>
             <button className='item-btn'>{'₹'+" "+"Order"+" "+ele.price}</button>
          </div>
        )})
       }
       </div>

       
      
      <About/>
      
      <Contact/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Hearder