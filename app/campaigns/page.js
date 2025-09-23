'use client';

import React, { useEffect, useState } from 'react';

import { Poppins } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { Select, Table, TextInput, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination, Label, Datepicker, Textarea } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { checkAvilableSearch, getCoins, setIsClick } from '../reducers/CoinSlice';
import { FaArrowRightLong } from 'react-icons/fa6';
import { getSearchHistory } from '../reducers/SearchHistroySlice';
import { toast, ToastContainer } from 'react-toastify';

import Create_Resume_plus from "../assets/imagesource/Create_Resume_plus.png";
import Improve_existing_resume_icon from "../assets/imagesource/Improve_existing_resume_icon.png";
import jd_based_resume from "../assets/imagesource/jd_based_resume.png";

import Star01 from "../assets/imagesource/Star01.png";

import welcome_email01 from "../assets/imagesource/welcome_email01.png";
import welcome_email02 from "../assets/imagesource/welcome_email02.png";
import welcome_email03 from "../assets/imagesource/welcome_email03.png";
import welcome_email04 from "../assets/imagesource/welcome_email04.png";

import ImagesLarge1Columns from "../assets/imagesource/ImagesLarge1Columns.png";

import { BiEdit } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'], // or ['latin-ext'] etc.
  weight: ['400', '500', '600', '700'], // specify desired weights
  variable: '--font-inter', // optional, for Tailwind usage
})

const Page = () => {
  const { coins, avilableData } = useSelector((state) => state?.coinData)
  const { historyData } = useSelector((state) => state?.his)
  const dispatch = useDispatch()
  const [isclick, setIsclick] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedCoin, setSelectedCoin] = useState('');
  const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    dispatch(getSearchHistory({ page: currentPage, limit }));
  }, [dispatch, currentPage]);
  const list = historyData?.data?.list || [];
  const totalPage = historyData?.data?.pagination?.pages || 1;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  console.log("historyData", historyData);

  useEffect(() => {
    dispatch(getCoins())
  }, [])
  // console.log("coinsd", coins)


  const coinItems = Array.isArray(coins)
    ? coins?.map((coin) => coin).filter(Boolean)
    : [];

  // Filter coins based on search term
  const filteredCoins = coinItems.filter((coin) =>
    coin?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin?.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleCoinSelect = (coin) => {
    console.log(coin, "coin");

    setSelectedCoin(coin.name);
    setSelectedCoinSymbol(coin.symbol.toLowerCase());
    // setSearchTerm(''); // Clear search after selection
    setSearchTerm(coin.name);
    setShowDropdown(false);

  };
  useEffect(() => {
    dispatch(checkAvilableSearch())
  }, [])
  console.log("Avil", avilableData);

  const handlePredictClick = () => {
    // Set isclick to true in Redux before navigation
    dispatch(setIsClick(true));
  };

  return (
    <div className={`${inter.className} antialiased`}>
      <div className='flex'>
        <div className='w-4/12 border-r-2 border-[#E5E5E5] pr-10'>
           <p className='text-[14px] leading-[28px] font-medium text-[#6D6D6D] pb-2'>STEPS 1 OF 6</p>
           <h2 className='text-[#5D596C] text-[24px] leading-[24px] font-bold pb-2'>Create Email Campaign</h2>
           <p className='text-[12px] leading-[20px] font-normal text-[#6F6B7D] pb-3'>Describe your campaign & let AI recommend templates</p>
           <div>
                <div className='form_area mb-3'>
                    <div className="mb-1 block">
                    <Label htmlFor="base">Campaign Name *</Label>
                    </div>
                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Name' />
                </div>
                <div className='mb-2'>
                    <div className='flex items-center gap-2 mb-3'>
                        <Image src={Star01} alt="Star01" className='' />
                        <h3 className='text-[16px] leading-[32px] font-semibold text-[#5D596C]'><span className='text-[26px]'>AI</span> Description</h3>
                    </div>
                    <div className='border-6 border-[#e64b85] bg-[#F5F5FF] rounded-[15px] p-2'>
                        <div className='form_area mb-3'>
                            <Textarea id="comment" placeholder="Describe" required rows={3} />
                        </div>
                        <div className='form_area mt-1 flex justify-end'>
                            <button className='next_btn'>Generate</button>
                        </div>
                    </div>
                </div>
                <div className='form_area mb-3'>
                    <div className="mb-1 block">
                    <Label htmlFor="base">Senders Name *</Label>
                    </div>
                    <TextInput id="base" type="text" sizing="md" placeholder='Enter Name' />
                </div>
                <div className='form_area mb-3'>
                    <div className="mb-1 block">
                    <Label htmlFor="base">Senders Email *</Label>
                    </div>
                    <TextInput id="base" type="email" sizing="md" placeholder='Enter Email' />
                </div>
                <div className='form_area mb-3'>
                    <div className="mb-1 block">
                    <Label htmlFor="base">Send Date *</Label>
                    </div>
                    <Datepicker />
                </div>
                <div className='form_area mb-3'>
                    <div className="mb-1 block">
                    <Label htmlFor="base">Select Language*</Label>
                    </div>
                    <Select required>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Bengali</option>
                    </Select>
                </div>
                <div className='form_area mt-10 flex justify-end'>
                    <button className='next_btn'>Next <IoIosArrowForward /></button>
                </div>
           </div>
        </div>
        <div className='w-8/12 pl-10'>
            <div className='search_section_wrap mb-4'>
                <div className="mb-1 block">
                   <Label className='text-[#a7a7a7]' htmlFor="base">Search</Label>
                </div>
                <div className='search_section flex items-center gap-2'>
                    <CiSearch className='text-2xl mx-2' />
                    <TextInput id="base" type="text" sizing="md" placeholder='Search Template' />
                </div>
            </div>
            <div className='item_scroll_section'>
              <div className='grid grid-cols-2 gap-8'>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email01} alt="welcome_email01" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email02} alt="welcome_email02" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email03} alt="welcome_email03" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email04} alt="welcome_email04" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email01} alt="welcome_email01" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email02} alt="welcome_email02" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email03} alt="welcome_email03" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
                <div className='rounded-[12px] overflow-hidden shadow-xl list_item_box'>
                    <Image src={welcome_email04} alt="welcome_email04" className='rounded-[12px] overflow-hidden' />
                    <div className='list_item_box_cont'>
                        <div className='flex justify-center items-center h-full'>
                            <button className='view_btn'>View</button>
                        </div>
                    </div>
                </div>
               </div>
            </div>

            <div className='item_details_box'>
                <div className='bg-[#ffffff] rounded-[18px] p-4 relative'>
                    <div className='absolute right-4 top-4'>
                        <button className='text-3xl text-black hover:text-[#c7488a] cursor-pointer'><IoCloseCircleOutline /></button>
                    </div>
                    <div className='text-center mb-4'>
                        <Image src={ImagesLarge1Columns} alt="ImagesLarge1Columns" className='inline-block' />
                    </div>
                    <div className='w-6/12 mx-auto text-center'>
                        <p>Make any purchase over $1500 and get cool headphones as a gift</p>
                    </div>
                    <div className='form_area mt-10 flex justify-end'>
                        <button className='next_btn'>Next <IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page;