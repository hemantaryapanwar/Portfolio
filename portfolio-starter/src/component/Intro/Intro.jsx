import React from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Thumbup from '../../img/thumbup.png'
import Boy from '../../img/Hemant.png'
import Crown from '../../img/crown.png'
import GlassesEmoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am </span>
                <span>Hemant Arya Panwar</span>
                <span>I am a Web developer currently pursuing Btech from IIIT Sonepat(<span>2019-2023</span>) </span>
            </div>
            <button className="i-button button">Hire Me</button>
        <div className="i-icon">
            <a target="_blank" href='https://github.com/hemantaryapanwar'> <img src={Github} alt="" /></a>
            <a target="_blank" href='https://in.linkedin.com/in/hemant-arya-panwar'> <img src={Linkedin} alt="" /></a>
            <a target="_blank" href='https://www.instagram.com/he_man_tt/'><img src={Instagram} alt="" /></a>
        </div>
        </div>
       <div className="i-right">
       <img src={Vector1} alt="" />
       <img src={Vector2} alt="" />
       <img src={Boy} alt="" />
       <img src={GlassesEmoji} alt="" />
       <div style={{top:'-4%',left:'68%'}}>
        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
       </div>
       <div style={{top:'18rem',left:'0rem'}}>
        <FloatingDiv image={Thumbup} txt1='Quick' txt2='Learner'/>
       </div>
       <div className="blur" style={{backgrou
      :"rgb(238 210 255)"}}></div>
      <div className="blur" style={{
        background:'#C1F5FF',
        top:'17rem',
        width:'21rem',
        height:'11rem',
        left:'-9rem'

      }}></div>
       </div>
    </div>
  )
}

export default Intro