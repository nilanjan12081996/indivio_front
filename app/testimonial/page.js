'use client';

import React from 'react'

import Slider from "react-slick";

import testy_face from "../assets/imagesource/testy_face.png";
import quote_icon from "../assets/imagesource/quote_icon.png";
import rating_icon from "../assets/imagesource/rating_icon.png";
import Image from 'next/image';

const Testimonial = () => {
var testimonials_setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="testi_slider_section">
        <div className="w-10/12 lg:w-7/12 mx-auto text-center pb-12">
            <Slider {...testimonials_setting}>
                <div className="pt-3">
                    <div className="flex justify-center items-center mb-8">
                        <div className="testy_face_area w-[97px] h-[97px]">
                        <Image src={testy_face} alt='testy_face' className="rounded-full overflow-hidden" />
                        </div>
                    </div>
                    <p className="text-xs lg:text-base text-[#ffffff] mb-6">
                        ROBERT MATHEW / INNOVATION GROUP
                    </p>
                    <h3 className="text-[18px] lg:text-[30px] lg:leading-[36px] font-semibold text-white mb-6">
                        Sed ut perspiciatis unde omnis istesit voluptatem
                        accusantium
                    </h3>
                    <div className="flex justify-center items-center mb-6">
                        <Image src={rating_icon} alt='rating_icon' />
                    </div>
                    <p className="text-sm lg:text-base text-[#ffffff] font-medium">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div className="pt-3">
                    <div className="flex justify-center items-center mb-8">
                        <div className="testy_face_area w-[97px] h-[97px]">
                        <Image src={testy_face} alt='testy_face' className="rounded-full overflow-hidden" />
                        </div>
                    </div>
                    <p className="text-xs lg:text-base text-[#ffffff] mb-6">
                        ROBERT MATHEW / INNOVATION GROUP
                    </p>
                    <h3 className="text-[18px] lg:text-[30px] lg:leading-[36px] font-semibold text-white mb-6">
                        Sed ut perspiciatis unde omnis istesit voluptatem
                        accusantium
                    </h3>
                    <div className="flex justify-center items-center mb-6">
                        <Image src={rating_icon} alt='rating_icon' />
                    </div>
                    <p className="text-sm lg:text-base text-[#ffffff] font-medium">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
                <div className="pt-3">
                    <div className="flex justify-center items-center mb-8">
                        <div className="testy_face_area w-[97px] h-[97px]">
                        <Image src={testy_face} alt='testy_face' className="rounded-full overflow-hidden" />
                        </div>
                    </div>
                    <p className="text-xs lg:text-base text-[#ffffff] mb-6">
                        ROBERT MATHEW / INNOVATION GROUP
                    </p>
                    <h3 className="text-[18px] lg:text-[30px] lg:leading-[36px] font-semibold text-white mb-6">
                        Sed ut perspiciatis unde omnis istesit voluptatem
                        accusantium
                    </h3>
                    <div className="flex justify-center items-center mb-6">
                        <Image src={rating_icon} alt='rating_icon' />
                    </div>
                    <p className="text-sm lg:text-base text-[#ffffff] font-medium">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Testimonial