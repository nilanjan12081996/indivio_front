import Link from 'next/link'
import React from 'react'

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import About_us from "../assets/imagesource/About_us.png";
import how_it_works_img from "../assets/imagesource/how_it_works_img.png";
import How_it_works from "../assets/imagesource/How_it_works.png";

import story_01 from "../assets/imagesource/story_01.png";
import story_02 from "../assets/imagesource/story_02.png";
import story_03 from "../assets/imagesource/story_03.png";
import service_img from "../assets/imagesource/service_img.png";

import behind_01 from "../assets/imagesource/behind_01.png";
import behind_02 from "../assets/imagesource/behind_02.png";
import behind_03 from "../assets/imagesource/behind_03.png";
import behind_04 from "../assets/imagesource/behind_04.png";
import behind_05 from "../assets/imagesource/behind_05.png";
import behind_06 from "../assets/imagesource/behind_06.png";

import hw01 from "../assets/imagesource/hw01.png";
import hw02 from "../assets/imagesource/hw02.png";
import hw03 from "../assets/imagesource/hw03.png";

import Image from 'next/image';

import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

import { SlCloudUpload } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { GrSettingsOption } from "react-icons/gr";

import { Bricolage_Grotesque, Nunito_Sans } from 'next/font/google';

// Bricolage Grotesque font
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
})

// Nunito Sans font
const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
})

const page = () => {
  return (
    <div className={`${bricolage.variable} ${nunito.variable} antialiased home_wrapper_arera`}>
      <div className='banner_area p-0 lg:p-0'>
        {/* home banner section start here */}
        <div className="bg-[#F7F5FF] relative">
          <div className="banner_content_area py-6 lg:py-15">
            <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                <div className="w-full px-4 pt-14 lg:pt-24 text-center">
                    <h1 className="text-xl leading-[24px] lg:text-[55px] lg:leading-[74px] text-[#92278F] font-bold mb-2 lg:mb-4">Services</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us section start here */}
      <div className="about_section">
        <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <div className="lg:flex mb-0">
            <div className="lg:w-7/12 lg:pr-10 flex justify-center items-center">
              <div>
                <h2 className="text-[#6B0168] text-xl lg:text-[40px] lg:leading-[74px] font-extrabold capitalize pb-2">Our Service</h2>
                <p className="text-[#000000] font-semibold text-[14px] lg:text-[18px] leading-[28px] pb-4">Unlock the full potential of LinkedIn with our powerful growth tools — seamlessly integrated into an easy-to-use Chrome extension. From creating impactful posts to generating thoughtful comments and tracking engagement, everything you need to grow your professional presence is now just one click away.</p>
              </div>
            </div>
            <div className="lg:w-5/12 mb-4 lg:mb-0">
              <Image src={service_img} alt='service_img' className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us section ends here */}


      {/* Behind HiringEye section start here */}

      <div className='behind_hiringeye_section lg:py-20'>
        <div className='max-w-6xl mx-auto px-4 lg:px-0'>
            <div className='text-center lg:w-8/12 mx-auto pb-15'>
              <h2 className="text-[#6B0168] text-xl lg:text-[40px] lg:leading-[74px] font-extrabold capitalize pb-2">How it works</h2>
              <p className="text-[#000000] font-semibold text-[14px] lg:text-[18px] leading-[28px] pb-4">Get started in minutes our Chrome extension makes LinkedIn growth simple and effortless.</p>
            </div>
             <div>
                <div className="lg:flex gap-20 mb-10 lg:mb-20">
                    <div className="lg:w-6/12 lg:pr-20 flex justify-center items-center mb-6 lg:pb-0">
                      <div>
                        <div className="mb-4">
                            <p className="text-black text-sm lg:text-[16px] leading-[24px] font-medium uppercase flex items-center"><SlCloudUpload className="text-[#1570EF] text-xl mr-2" /> GENERATE POST</p>
                        </div>
                        <h2 className="text-[#1D2939] text-xl lg:text-[42px] lg:leading-[45px] font-semibold mb-5">Generate <span className="text-[#1E6BFF]">professional posts</span> effortlessly</h2>
                        <p className="text-[#000000] text-[16px] leading-[26px] mb-6">Start your post from scratch with AI prompts, customize it with your own ideas, or generate a polished LinkedIn post instantly.</p>
                        <Link className="text-[14px] lg:text-[16px] text-[#1570EF] hover:bg-[#207AEF] hover:text-white font-medium uppercase border border-[#207AEF] rounded-[10px] px-3 lg:px-5 py-2 lg:py-3 inline-block" href="/" passHref>GENERATE POST</Link>
                      </div>
                    </div>
                    <div className="lg:w-6/12">
                        <Image src={hw01} alt='hw01' className='' />
                    </div>
                </div>
                <div className="lg:flex gap-20 mb-10 lg:mb-20">
                    <div className="lg:w-6/12 mb-6 lg:pb-0">
                        <Image src={hw02} alt='hw02' className='' />
                    </div>
                    <div className="lg:w-6/12 lg:pr-20 flex justify-center items-center">
                        <div>
                        <div className="mb-4">
                            <p className="text-black text-sm lg:text-[16px] leading-[24px] font-medium uppercase flex items-center"><TiDocumentText className="text-[#039855] text-2xl mr-1.5 rotate-10" /> GENERATE COMMENT</p>
                        </div>
                        <h2 className="text-[#1D2939] text-xl lg:text-[42px] lg:leading-[45px] font-semibold mb-3 lg:mb-5"><span className="text-[#039855]">Smart comments</span> created instantly with AI.</h2>
                        <p className="text-[#000000] text-[16px] leading-[26px] mb-6">Generate AI-powered comments instantly. Spark meaningful conversations with ease.</p>
                        <Link className="text-[14px] lg:text-[16px] text-[#039855] hover:bg-[#039855] hover:text-white font-medium uppercase border border-[#039855] rounded-[10px] px-3 lg:px-5 py-2 lg:py-3 inline-block" href="/" passHref>GENERATE COMMENT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Behind HiringEye section ends here */}


      {/* chiklet section starte here */}

      <div className='chiklet_section py-10 lg:py-16 mt-8'>
         <div className='max-w-6xl mx-auto'>
            <div className='lg:flex items-center'>
                <div className='lg:w-6/12 pb-4 lg:pb-0 text-center lg:text-left px-4 lg:px-0'>
                   <h2 className='text-[#ffffff] text-xl lg:text-[32px] lg:leading-[36px] font-extrabold'>Start Growing Your LinkedIn Presence Today.</h2>
                </div>
                <div className='lg:w-6/12'>
                  <div className="flex justify-center lg:justify-end gap-2">
                    <button className="text-[#92278F] bg-white flex items-center cursor-pointer font-medium text-xs lg:text-[16px] rounded-[5px] px-3 py-2 lg:px-6 lg:py-2 border-2 border-[#92278F] hover:bg-[#92278F] hover:text-[#ffffff]">
                      Login
                    </button>
                    <button className="text-white bg-[#92278F] flex items-center cursor-pointer font-medium text-xs lg:text-[16px] rounded-[5px] px-3 py-2 lg:px-6 lg:py-2 border-2 border-[#92278F] hover:bg-white hover:text-[#92278F]">
                      Get Started
                    </button>
                  </div>
                </div>
            </div>
         </div>
      </div>

      {/* chiklet section ends here */}
      
     

    </div>
  )
}

export default page