'use client';

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

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
                    <h1 className="text-xl leading-[24px] lg:text-[55px] lg:leading-[74px] text-[#92278F] font-bold mb-2 lg:mb-4">Pricing Plans</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
   


      {/* Purchase section start here */}
      <div className="purchase_section py-8 lg:py-20">
         <div className='max-w-6xl mx-auto'>
            <div className="text-center mb-10 lg:mb-10">
               <h2 className="text-2xl lg:text-[45px] lg:leading-[74px] text-[#4B0249] font-bold mb-2 lg:mb-3">Flexible Pricing for Every Professional</h2>
               <p className="text-[#2A2A2A] text-base lg:text-[18px] leading-[28px] font-semibold w-7/12 mx-auto">Whether you’re just starting out or scaling your influence, our plans are built to match your needs.</p>
            </div>
            <div className="subscription_tab_section">
               <Tabs>
                  <TabList>
                     <Tab>Pay Monthly </Tab>
                     <Tab>Pay Yearly </Tab>
                  </TabList>

                  <TabPanel>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white rounded-4xl p-5 mx-4 lg:mx-0">
                        <div className="pt-0 border border-[#92278F] rounded-[26px] bg-white">
                           <div className="py-8 px-6 relative">
                              <div className="bg-[#92278F] text-[12px] leading-[29px] text-white inline-block rounded-[100px] px-3 mb-6">STARTER</div>
                              <h3 className="text-[35px] lg:text-[55px] leading-[55px] text-[#6C0569] pb-4 font-medium">$15/<span className="text-[40px]">mo</span></h3>
                              <p className="text-[16px] leading-[22px] text-[#68708C] font-medium">What’s included</p>
                              <div className="mb-8 py-8">
                                 <div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> SSL Certificate
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Unlimited Bandwidth
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 1 User
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Email Support
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 7 Days Free Trial
                                    </div>
                                 </div>
                              </div>
                              <div className="absolute left-0 bottom-[20px] w-full px-6">
                                 <button className="bg-[#ffffff] hover:bg-[#1B223C] text-[#800080] hover:text-[#ffffff] border border-[#800080] text-[16px] leading-[54px] font-semibold rounded-[15px] w-full cursor-pointer flex justify-center items-center gap-2">Get Started <MdArrowOutward className="text-xl" /></button>
                              </div>
                           </div>
                        </div>
                        <div className="pt-0 border border-[#92278F] rounded-[26px] bg-[#6D176B]">
                           <div className="py-8 px-6 relative">
                              <div className="bg-[#ffffff] text-[12px] leading-[29px] text-[#92278F] inline-block rounded-[100px] px-3 mb-6">STANDARD</div>
                              <h3 className="text-[35px] lg:text-[55px] leading-[55px] text-[#ffffff] pb-4 font-medium">$15/<span className="text-[40px]">mo</span></h3>
                              <p className="text-[16px] leading-[22px] text-[#ffffff] font-medium">What’s included</p>
                              <div className="mb-8 py-8">
                                 <div>
                                    <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> 50GB Storage
                                    </div>
                                    <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> Custom Domain
                                    </div>
                                    <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> Unlimited Users
                                    </div>
                                    <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> SSL Certificate
                                    </div>
                                    <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> Unlimited Bandwidth
                                    </div>
                                 </div>
                              </div>
                              <div className="absolute left-0 bottom-[20px] w-full px-6">
                                 <button className="bg-[#ffffff] hover:bg-[#1B223C] text-[#800080] hover:text-[#ffffff] border border-[#800080] text-[16px] leading-[54px] font-semibold rounded-[15px] w-full cursor-pointer flex justify-center items-center gap-2">Get Started <MdArrowOutward className="text-xl" /></button>
                              </div>
                           </div>
                        </div>
                        <div className="pt-0 border border-[#92278F] rounded-[26px] bg-white">
                           <div className="py-8 px-6 relative">
                              <div className="bg-[#92278F] text-[12px] leading-[29px] text-white inline-block rounded-[100px] px-3 mb-6">PREMIUM</div>
                              <h3 className="text-[35px] lg:text-[55px] leading-[55px] text-[#6C0569] pb-4 font-medium">$30/<span className="text-[40px]">mo</span></h3>
                              <p className="text-[16px] leading-[22px] text-[#68708C] font-medium">What’s included</p>
                              <div className="mb-8 py-8">
                                 <div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> SSL Certificate
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Unlimited Bandwidth
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 1 User
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Email Support
                                    </div>
                                    <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                       <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 7 Days Free Trial
                                    </div>
                                 </div>
                              </div>
                              <div className="absolute left-0 bottom-[20px] w-full px-6">
                                 <button className="bg-[#ffffff] hover:bg-[#1B223C] text-[#800080] hover:text-[#ffffff] border border-[#800080] text-[16px] leading-[54px] font-semibold rounded-[15px] w-full cursor-pointer flex justify-center items-center gap-2">Get Started <MdArrowOutward className="text-xl" /></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white rounded-4xl p-5 mx-4 lg:mx-0">
                     <div className="pt-0 border border-[#92278F] rounded-[26px] bg-white">
                        <div className="py-8 px-6 relative">
                           <div className="bg-[#92278F] text-[12px] leading-[29px] text-white inline-block rounded-[100px] px-3 mb-6">STARTER</div>
                           <h3 className="text-[35px] lg:text-[55px] leading-[55px] text-[#6C0569] pb-4 font-medium">$15/<span className="text-[40px]">mo</span></h3>
                           <p className="text-[16px] leading-[22px] text-[#68708C] font-medium">What’s included</p>
                           <div className="mb-8 py-8">
                              <div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> SSL Certificate
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Unlimited Bandwidth
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 1 User
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Email Support
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 7 Days Free Trial
                                 </div>
                              </div>
                           </div>
                           <div className="absolute left-0 bottom-[20px] w-full px-6">
                              <button className="bg-[#ffffff] hover:bg-[#150c15] text-[#800080] hover:text-[#ffffff] border border-[#800080] text-[16px] leading-[54px] font-semibold rounded-[15px] w-full cursor-pointer flex justify-center items-center gap-2">Get Started <MdArrowOutward className="text-xl" /></button>
                           </div>
                        </div>
                     </div>
                        <div className="pt-0 border border-[#92278F] rounded-[26px] bg-[#6D176B]">
                        <div className="py-8 px-6 relative">
                           <div className="bg-[#ffffff] text-[12px] leading-[29px] text-[#92278F] inline-block rounded-[100px] px-3 mb-6">STANDARD</div>
                           <h3 className="text-[35px] lg:text-[55px] leading-[55px] text-[#ffffff] pb-4 font-medium">$15/<span className="text-[40px]">mo</span></h3>
                           <p className="text-[16px] leading-[22px] text-[#ffffff] font-medium">What’s included</p>
                           <div className="mb-8 py-8">
                              <div>
                                 <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> 50GB Storage
                                 </div>
                                 <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> Custom Domain
                                 </div>
                                 <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> Unlimited Users
                                 </div>
                                 <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> SSL Certificate
                                 </div>
                                 <div className="flex gap-1 text-[#ffffff] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#ffffff]" /> Unlimited Bandwidth
                                 </div>
                              </div>
                           </div>
                           <div className="absolute left-0 bottom-[20px] w-full px-6">
                              <button className="bg-[#ffffff] hover:bg-[#150c15] text-[#800080] hover:text-[#ffffff] border border-[#800080] text-[16px] leading-[54px] font-semibold rounded-[15px] w-full cursor-pointer flex justify-center items-center gap-2">Get Started <MdArrowOutward className="text-xl" /></button>
                           </div>
                        </div>
                     </div>
                        <div className="pt-0 border border-[#92278F] rounded-[26px] bg-white">
                        <div className="py-8 px-6 relative">
                           <div className="bg-[#92278F] text-[12px] leading-[29px] text-white inline-block rounded-[100px] px-3 mb-6">PREMIUM</div>
                           <h3 className="text-[35px] lg:text-[55px] leading-[55px] text-[#6C0569] pb-4 font-medium">$30/<span className="text-[40px]">mo</span></h3>
                           <p className="text-[16px] leading-[22px] text-[#68708C] font-medium">What’s included</p>
                           <div className="mb-8 py-8">
                              <div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> SSL Certificate
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Unlimited Bandwidth
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 1 User
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> Email Support
                                 </div>
                                 <div className="flex gap-1 text-[#380438] text-[16px] leading-[24px] font-semibold mb-5">
                                    <IoCheckmarkCircleOutline className="text-2xl text-[#92278F]" /> 7 Days Free Trial
                                 </div>
                              </div>
                           </div>
                           <div className="absolute left-0 bottom-[20px] w-full px-6">
                              <button className="bg-[#ffffff] hover:bg-[#150c15] text-[#800080] hover:text-[#ffffff] border border-[#800080] text-[16px] leading-[54px] font-semibold rounded-[15px] w-full cursor-pointer flex justify-center items-center gap-2">Get Started <MdArrowOutward className="text-xl" /></button>
                           </div>
                        </div>
                     </div>
                  </div>
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
      {/* Purchase section ends here */}


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