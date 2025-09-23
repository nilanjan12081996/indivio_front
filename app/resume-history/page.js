'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Inter } from 'next/font/google';

import resume01 from "../assets/imagesource/resume01.png";

import { FaArrowUpWideShort } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { Select, TextInput } from 'flowbite-react';
import { CgFileDocument } from 'react-icons/cg';
import { BiDownload } from "react-icons/bi";
import { RiDraftLine } from "react-icons/ri";
import { BsSave } from "react-icons/bs";

const inter = Inter({
  subsets: ['latin'], // or ['latin-ext'] etc.
  weight: ['400', '500', '600', '700'], // specify desired weights
  variable: '--font-inter', // optional, for Tailwind usage
})

const page = () => {
  return (
    <div className={`${inter.className} antialiased`}>
      <div className='mb-10'>
        <h2 className='text-[30px] leading-[30px] text-[#151515] font-semibold mb-4'>Resume History</h2>
        <p className='text-[16px] leading-[23px] text-[#575757] font-normal mb-0'>Manage and organize all your resumes in one place</p>
      </div>
      <div className='search_section mb-6'>
        <div className='flex items-center gap-4 border border-[#d5d5d5] bg-white p-4 rounded-[10px]'>
            <div className='w-10/12'>
              <div className='bg-[#F3F4F6] rounded-[8px] flex gap-4 items-center'>
                 <button className='w-[42px] h-[42px] flex justify-center items-center cursor-pointer'><RiSearchLine className='text-xl text-[#999999]' /></button>
                 <TextInput id="base" type="text" sizing="md" placeholder='Search resume...' className='w-full' />
              </div>
            </div>
            <div className='w-3/12'>
              <div className='flex justify-center items-center gap-4'>
                <Select id="countries" className='w-[80%]' required>
                    <option>All Status</option>
                    <option>Status</option>
                    <option>Status</option>
                    <option>Status</option>
                </Select>
                <button className='bg-white hover:bg-[#a635a2] text-black hover:text-white border border-[#D5D5D5] rounded-[8px] w-[42px] h-[42px] flex justify-center items-center cursor-pointer'><FaArrowUpWideShort className='text-2xl' /></button>
              </div>
            </div>
        </div>
      </div>
      <div className='mb-6'>
        <div className='w-full grid grid-cols-4 gap-4'>
            <div className='border bg-white border-[#D5D5D5] rounded-[10px] px-4 py-4'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#D5F1FF] rounded-[10px] w-[55px] h-[55px] flex justify-center items-center'>
                        <CgFileDocument className='text-[#0993D0] text-3xl' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] text-[15px]'>Total resumes</p>
                        <h3 className='text-[#151515] text-[22px] font-medium mb-1'>6</h3>
                    </div>
                </div>
            </div>
            <div className='border bg-white border-[#D5D5D5] rounded-[10px] px-4 py-4'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#DEFFD5] rounded-[10px] w-[55px] h-[55px] flex justify-center items-center'>
                        <BiDownload className='text-[#186603] text-2xl' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] text-[15px]'>Total Downloads</p>
                        <h3 className='text-[#151515] text-[22px] font-medium mb-1'>3</h3>
                    </div>
                </div>
            </div>
            <div className='border bg-white border-[#D5D5D5] rounded-[10px] px-4 py-4'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#F7FFD5] rounded-[10px] w-[55px] h-[55px] flex justify-center items-center'>
                        <RiDraftLine className='text-[#AE7100] text-2xl' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] text-[15px]'>Drafts</p>
                        <h3 className='text-[#151515] text-[22px] font-medium mb-1'>1</h3>
                    </div>
                </div>
            </div>
            <div className='border bg-white border-[#D5D5D5] rounded-[10px] px-4 py-4'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[#EFE3FF] rounded-[10px] w-[55px] h-[55px] flex justify-center items-center'>
                        <BsSave className='text-[#92278F] text-2xl' />
                    </div>
                    <div>
                        <p className='text-[#7D7D7D] text-[15px]'>Saved</p>
                        <h3 className='text-[#151515] text-[22px] font-medium mb-1'>2</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='border bg-white border-[#D5D5D5] rounded-[10px]'>
        <div className='px-8 py-8'>
           <p className='text-[#151515] text-[20px] leading-[20px] mb-4'>Your Resumes (6)</p>
        </div>
        <div>
            <div className='border-b border-[#E5E5E5]'>
                dssds
            </div>
        </div>
      </div>
    </div>
  )
}

export default page