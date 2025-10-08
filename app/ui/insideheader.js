'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'

import userFace from "../assets/imagesource/user_face.png";

import { Poppins } from 'next/font/google';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/AuthSlice';
import { useRouter } from 'next/navigation';
import { getProfile } from '../reducers/ProfileSlice';
import { FaRectangleList } from 'react-icons/fa6';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';

import { CiBellOn } from "react-icons/ci";
import { TbBell } from "react-icons/tb";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Insideheader = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { profileData } = useSelector((state) => state?.profile)
  const handleLogout = () => {
    // dispatch(logout())

    try {

      // Dispatch logout action
      dispatch(logout());

      // Navigate to home page
      router.push("/");

      // Force reload to ensure clean state
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback: still navigate to home
      router.push("/");
    }

  };
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  console.log("headrr", profileData);


  return (
    <div className='bg-[#ffffff] rounded-[14px] py-4 px-6 mb-6 border-l border-[#f3f4f6] dash_header'>
      <div className='lg:flex justify-between items-center'>
        <div className='pl-[50px] lg:pl-0 hidden lg:block'>
          &nbsp;
        </div>
        <div>
          <div className='flex justify-end items-center gap-3'>
            {/* <button onClick={handleLogout} className='mr-4 text-black cursor-pointer'>Logout</button> */}
            <p className='text-base text-[#CDCDCD] ${leagueSpartan.className}'>{profileData?.data?.fullname}</p>
            <div className='user_face relative'>
              <div className='w-[6px] h-[6px] bg-[#71FF76] rounded-full absolute right-[-1px] top-[-1px]'>&nbsp;</div>
              <TbBell className='text-2xl text-[#ffffff]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insideheader