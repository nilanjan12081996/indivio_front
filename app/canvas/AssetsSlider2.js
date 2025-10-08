'use client';

import React from 'react'

import Slider from "react-slick";

import assets_slide_01 from "../assets/imagesource/assets_slide_01.png";
import assets_slide_02 from "../assets/imagesource/assets_slide_02.png";
import assets_slide_03 from "../assets/imagesource/assets_slide_03.png";
import Image from 'next/image';

const AssetsSlider2 = () => {
var assets_slider_setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };
  return (
    <div className="testi_slider_section">
        <div className="lg:w-full text-center pb-0">
            <Slider {...assets_slider_setting}>
                <div className="">
                    <Image src={assets_slide_03} alt="assets_slide_03" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_02} alt="assets_slide_02" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_03} alt="assets_slide_03" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_02} alt="assets_slide_02" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_01} alt="assets_slide_01" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_03} alt="assets_slide_03" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_01} alt="assets_slide_01" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_02} alt="assets_slide_02" className='mb-0' />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default AssetsSlider2