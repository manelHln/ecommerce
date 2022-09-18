import React from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { bg1, product_02, product1 } from "../../images/Images";
import { Link } from "react-router-dom";
import "./header.css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return <span className={className}>{index + 1}</span>;
    },
  },
});

export default function Header() {
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide header-container">Slide1</div>
        <div className="swiper-slide header-container">Slide2</div>
        <div className="swiper-slide header-container">Slide3</div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
    // <div className="header-container">
    //   <div style={{flex:1}}></div>
    //   <div style={{flex:0.95}}>
    //     <p className="header-title">
    //       Autumn
    //       <br /> Collection
    //     </p>
    //     <p className="header-text">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //     </p>
    //     <Link to="../shop">
    //       <div className="header-btn">Shop now <RiShoppingBasket2Line size={25} /></div>
    //     </Link>
    //   </div>
    // </div>
  );
}