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
import story_04 from "../assets/imagesource/story_04.png";

import behind_01 from "../assets/imagesource/behind_01.png";
import behind_02 from "../assets/imagesource/behind_02.png";
import behind_03 from "../assets/imagesource/behind_03.png";
import behind_04 from "../assets/imagesource/behind_04.png";
import behind_05 from "../assets/imagesource/behind_05.png";
import behind_06 from "../assets/imagesource/behind_06.png";

import Image from 'next/image';

import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

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
                    <h1 className="text-xl leading-[24px] lg:text-[55px] lg:leading-[74px] text-[#92278F] font-bold mb-2 lg:mb-4">About Us</h1>
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
                <h2 className="text-[#6B0168] text-xl lg:text-[40px] lg:leading-[74px] font-extrabold capitalize pb-2">Our Story</h2>
                <p className="text-[#000000] font-semibold text-[14px] lg:text-[18px] leading-[28px] pb-4">At HiringEye, we’re on a mission to help professionals create meaningful connections through smarter posts, engaging comments, and AI-powered insights.</p>
                <p className="text-[#000000] font-semibold text-[14px] lg:text-[18px] leading-[28px] pb-4">We believe networking should be authentic, not overwhelming. That’s why we built HiringEye — to simplify content creation, amplify professional voices, and turn every LinkedIn interaction into an opportunity.</p>
                <ul className='mt-5'>
                   <li className="text-[#000000] font-bold text-base lg:text-[20px] leading-[28px] flex items-center gap-4 pb-5">
                      <Image src={story_01} alt='story_01' className="" />
                      AI-first approach to professional growth.
                   </li>
                   <li className="text-[#000000] font-bold text-base lg:text-[20px] leading-[28px] flex items-center gap-4 pb-5">
                     <Image src={story_02} alt='story_02' className="" />
                     Tools designed to save time and effort.
                    </li>
                   <li className="text-[#000000] font-bold text-base lg:text-[20px] leading-[28px] flex items-center gap-4 pb-5">
                     <Image src={story_02} alt='story_02' className="" />
                     Content aligned with professional tone and credibility.
                    </li>
                   <li className="text-[#000000] font-bold text-base lg:text-[20px] leading-[28px] flex items-center gap-4 pb-5">
                     <Image src={story_04} alt='story_04' className="" />
                     Helping users expand their influence and reach.
                    </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-5/12 mb-4 lg:mb-0">
              <Image src={About_us} alt='About_us' className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us section ends here */}


      {/* Behind HiringEye section start here */}

      <div className='behind_hiringeye_section lg:py-20'>
        <div className='max-w-6xl mx-auto px-4 lg:px-0'>
            <div className='text-center lg:w-8/12 mx-auto pb-15'>
              <h2 className="text-[#6B0168] text-xl lg:text-[40px] lg:leading-[74px] font-extrabold capitalize pb-2">The People Behind HiringEye</h2>
              <p className="text-[#000000] font-semibold text-[14px] lg:text-[18px] leading-[28px] pb-4">A passionate team of innovators, designers, and technologists dedicated to helping 
                professionals grow smarter on LinkedIn.</p>
            </div>
            <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
               <div className='mb-8'>
                  <Image src={behind_01} alt='behind_01' className="rounded-full mb-5" />
                  <div className='text-center'>
                    <h3 className='text-[20px] leading-[20px] text-[#1A1A1A] font-medium pb-2'>Elena Moreau</h3>
                    <p className='text-[14px] leading-[16px] text-[#92278F] font-medium pb-3'>Creative Director</p>
                    <p className='text-[14px] leading-[20px] text-[#555555] font-normal pb-2'>A visionary with a passion for aesthetics and storytelling. Elena shapes the visual language behind everything we do.</p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex justify-center items-center gap-2'>
                      <li><BsFacebook className='text-2xl text-black' /></li>
                      <li><RiInstagramFill className='text-2xl text-black' /></li>
                      <li><TbBrandLinkedinFilled className='text-2xl text-black' /></li>
                      <li><FaXTwitter className='text-2xl text-black' /></li>
                    </ul>
                  </div>
               </div>
               <div className='mb-8'>
                  <Image src={behind_02} alt='behind_02' className="rounded-full mb-5" />
                  <div className='text-center'>
                    <h3 className='text-[20px] leading-[20px] text-[#1A1A1A] font-medium pb-2'>Tobias Schmidt</h3>
                    <p className='text-[14px] leading-[16px] text-[#92278F] font-medium pb-3'>Lead Developer</p>
                    <p className='text-[14px] leading-[20px] text-[#555555] font-normal pb-2'>From backend architecture to pixel-perfect interfaces, Tobias ensures every detail works — and works beautifully.</p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex justify-center items-center gap-2'>
                      <li><BsFacebook className='text-2xl text-black' /></li>
                      <li><RiInstagramFill className='text-2xl text-black' /></li>
                      <li><TbBrandLinkedinFilled className='text-2xl text-black' /></li>
                      <li><FaXTwitter className='text-2xl text-black' /></li>
                    </ul>
                  </div>
               </div>
               <div className='mb-8'>
                  <Image src={behind_03} alt='behind_03' className="rounded-full mb-5" />
                  <div className='text-center'>
                    <h3 className='text-[20px] leading-[20px] text-[#1A1A1A] font-medium pb-2'>Amara Chen</h3>
                    <p className='text-[14px] leading-[16px] text-[#92278F] font-medium pb-3'>Brand Designer</p>
                    <p className='text-[14px] leading-[20px] text-[#555555] font-normal pb-2'>Amara brings elegance to design systems, blending form and function into every visual touchpoint.</p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex justify-center items-center gap-2'>
                      <li><BsFacebook className='text-2xl text-black' /></li>
                      <li><RiInstagramFill className='text-2xl text-black' /></li>
                      <li><TbBrandLinkedinFilled className='text-2xl text-black' /></li>
                      <li><FaXTwitter className='text-2xl text-black' /></li>
                    </ul>
                  </div>
               </div>
               <div>
                  <Image src={behind_04} alt='behind_04' className="rounded-full mb-5" />
                  <div className='text-center'>
                    <h3 className='text-[20px] leading-[20px] text-[#1A1A1A] font-medium pb-2'>Julian Reyes</h3>
                    <p className='text-[14px] leading-[16px] text-[#92278F] font-medium pb-3'>Marketing Strategist</p>
                    <p className='text-[14px] leading-[20px] text-[#555555] font-normal pb-2'>Julian crafts campaigns that connect. He knows how to make the right people care — and act.</p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex justify-center items-center gap-2'>
                      <li><BsFacebook className='text-2xl text-black' /></li>
                      <li><RiInstagramFill className='text-2xl text-black' /></li>
                      <li><TbBrandLinkedinFilled className='text-2xl text-black' /></li>
                      <li><FaXTwitter className='text-2xl text-black' /></li>
                    </ul>
                  </div>
               </div>
               <div>
                  <Image src={behind_05} alt='behind_05' className="rounded-full mb-5" />
                  <div className='text-center'>
                    <h3 className='text-[20px] leading-[20px] text-[#1A1A1A] font-medium pb-2'>Sofia Ivanova</h3>
                    <p className='text-[14px] leading-[16px] text-[#92278F] font-medium pb-3'>UX Researcher</p>
                    <p className='text-[14px] leading-[20px] text-[#555555] font-normal pb-2'>With empathy at her core, Sofia translates user needs into insights that drive meaningful design decisions.</p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex justify-center items-center gap-2'>
                      <li><BsFacebook className='text-2xl text-black' /></li>
                      <li><RiInstagramFill className='text-2xl text-black' /></li>
                      <li><TbBrandLinkedinFilled className='text-2xl text-black' /></li>
                      <li><FaXTwitter className='text-2xl text-black' /></li>
                    </ul>
                  </div>
               </div>
               <div>
                  <Image src={behind_06} alt='behind_06' className="rounded-full mb-5" />
                  <div className='text-center'>
                    <h3 className='text-[20px] leading-[20px] text-[#1A1A1A] font-medium pb-2'>Miles Carter</h3>
                    <p className='text-[14px] leading-[16px] text-[#92278F] font-medium pb-3'>Product Manager</p>
                    <p className='text-[14px] leading-[20px] text-[#555555] font-normal pb-2'>Miles bridges vision and execution, aligning strategy, people, and purpose into one seamless roadmap.</p>
                  </div>
                  <div className='mt-2'>
                    <ul className='flex justify-center items-center gap-2'>
                      <li><BsFacebook className='text-2xl text-black' /></li>
                      <li><RiInstagramFill className='text-2xl text-black' /></li>
                      <li><TbBrandLinkedinFilled className='text-2xl text-black' /></li>
                      <li><FaXTwitter className='text-2xl text-black' /></li>
                    </ul>
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