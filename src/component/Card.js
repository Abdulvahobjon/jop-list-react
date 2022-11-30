import React from "react";
import cardImg1 from "../img/photosnap.svg";

function Card(props) {
  return (
    <li id={props.id} className="boxes__box box-left-bg box">
      <img
        className="left__logo"
        src={props.src}
        alt="Photosnap logo"
        width="88"
        height="88"
      />
      <div className="left__grids grids">
        <div className="grids__about about">
        {props.about.profession  ? <span className="about__profession">{props.about.profession}</span> : null}
          {props.about.new ?  <span className="about__span span-new">{props.about.new}</span> : null}
          {props.about.feature ? <span className="about__span span-feature">{props.about.feature}</span> : null}
        </div>
        <a className="left__heading" href="#">
          {props.heading}
        </a>
        <div className="left__extra extra">
          {props.extra ? props.extra.map((item)=>{
            return  <span className="extra__text">{item}</span>
          }) : ""}
        </div>
      </div>
      <div className="box__techs techs">
        {props.techs ? props.techs.map(item=>{
          return  <span className="techs__tech">{item}</span>
        }) : ""}
       
        {/* <span className="techs__tech">Senior</span>
        <span className="techs__tech">HTML</span>
        <span className="techs__tech">CSS</span>
        <span className="techs__tech">JavaScript</span> */}
      </div>
    </li>
  );
}

export default Card;
