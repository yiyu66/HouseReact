import React from "react";
import HomeHeader from "./HomeHeader";
import Swiper from "../../components/Swiper"

// 引入图片
import banner1 from "../../static/images/banner1.png"
import banner2 from "../../static/images/banner2.png"
import banner3 from "../../static/images/banner3.png"

export default function index() {
  return (
    <div>
      <HomeHeader />
      <Swiper banners={ [banner1,banner2,banner3] }/>
      
    </div>
  );
}
