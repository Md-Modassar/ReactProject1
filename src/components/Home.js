import React from 'react'
import {Items} from "../data/Items"
import "./home.css"
import Navbar from './Navbar'
import Footer from "./Footer"
const Home = () => {
   
  return (
    <>
    <Navbar/>

    <div className='main'>
    <h1 className='menu'>MENU </h1>
    <div className='card'>
      {
        Items.map((ele)=>{
          return(
          <div className='card-item'>
             <img src={ele.image} alt='' className='image'/>

             <h1>{ele.name}</h1>
             <h3>{'₹'+ ele.price}</h3>

          </div>
        )})
      }
    </div>
    </div>
    <Footer/>

    </>
  )
}

export default Home