import React from 'react'
import './services.css'
import Heartemoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Card from "../../component/Card/Card"
import resume from "./IIITS_Hemant_arya_panwar.pdf"

const Services = () => {
  return (
   <div className="services">
    {/* left side */}
    <div className="awesome">
    <span>My Awesome</span>
    <span>Skills</span>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <br /> Facilis voluptatem asperiores explicabo, eius accusamus
       culpa aliquid? Magnam aspernatur ex dolorem.
    </span>
    <a href={resume} download>
   <button className="button s-button">Download CV</button>
   </a>
   <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
   </div>
   {/* right side */}
    <div className="cards">
      <div style={{left:'14rem'}}>
        <Card
        emoji={Heartemoji}
        heading={'Data Structure & Algo '}
        detail={'Leetcode,gfg,coding ninja'}
        />
      </div>
      <div style={{top:'12rem',left:'-4rem'}}>
        <Card
        emoji={Glasses}
        heading={'Developer'}
        detail={'React,Angular,Nodejs,Nextjs'}
        />
      </div>
      <div style={{left:'12rem',top:'19rem'}}>
        <Card
        emoji={humble}
        heading={'Languages'}
        detail={'C++,Javascript,Python'}
        />
      </div>
      <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
    </div>
   </div>
  )
}
export default Services
