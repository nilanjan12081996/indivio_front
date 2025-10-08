'use client';

import React from 'react'

import Slider from "react-slick";

import assets_slide_01 from "../assets/imagesource/assets_slide_01.png";
import assets_slide_02 from "../assets/imagesource/assets_slide_02.png";
import assets_slide_03 from "../assets/imagesource/assets_slide_03.png";
import assets_slide_04 from "../assets/imagesource/assets_slide_04.png";
import assets_slide_05 from "../assets/imagesource/assets_slide_05.png";
import assets_slide_06 from "../assets/imagesource/assets_slide_06.png";

import assets_slide_07 from "../assets/imagesource/assets_slide_07.png";
import assets_slide_08 from "../assets/imagesource/assets_slide_08.png";

import assets_slide_09 from "../assets/imagesource/assets_slide_09.png";
import assets_slide_10 from "../assets/imagesource/assets_slide_10.png";


import Image from 'next/image';

const BrandElementsSlider = () => {
var assets_slider_setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };
  return (
    <div className="testi_slider_section">
        <div className="lg:w-full text-center pb-0">
            <Slider {...assets_slider_setting}>
                <div className="">
                    <Image src={assets_slide_09} alt="assets_slide_09" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_10} alt="assets_slide_10" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_09} alt="assets_slide_09" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_10} alt="assets_slide_10" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_09} alt="assets_slide_09" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_10} alt="assets_slide_10" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_09} alt="assets_slide_09" className='mb-0' />
                </div>
                <div className="">
                    <Image src={assets_slide_10} alt="assets_slide_10" className='mb-0' />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default BrandElementsSlider