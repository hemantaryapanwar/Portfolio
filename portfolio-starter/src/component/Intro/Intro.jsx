import React from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Thumbup from '../../img/thumbup.png'
import Boy from '../../img/boy.png'
import Crown from '../../img/crown.png'
import GlassesEmoji from '../../img/glassesimoji.png'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am </span>
                <span>Hemant Arya Panwar</span>
                <span>I am a Web developer currently pursuing Btech from IIIT Sonepat(<span>2019-2013</span>) </span>
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
       </div>
    </div>
  )
}

export default Intro