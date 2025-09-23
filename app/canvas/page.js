'use client';

import React, { useEffect, useState } from 'react';

import { Poppins } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { Select, Table, TextInput, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination } from 'flowbite-react';
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
import single_logo from "../assets/imagesource/single_logo.png";
import design_small_icon01 from "../assets/imagesource/design_small_icon01.png";
import design_small_icon02 from "../assets/imagesource/design_small_icon02.png";
import filter_icon from "../assets/imagesource/filter_icon.png";
import magic_studio_img from "../assets/imagesource/magic_studio_img.png";
import filters_img from "../assets/imagesource/filters_img.png";


import magic_studio_01 from "../assets/imagesource/magic_studio_01.png";
import magic_studio_02 from "../assets/imagesource/magic_studio_02.png";
import magic_studio_03 from "../assets/imagesource/magic_studio_03.png";
import magic_studio_04 from "../assets/imagesource/magic_studio_04.png";
import magic_studio_05 from "../assets/imagesource/magic_studio_05.png";
import empty_block from "../assets/imagesource/empty_block.png";







import { BiEdit } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg";

import { FiEdit2 } from "react-icons/fi";
import { SiHackthebox } from "react-icons/si";
import { TbTextResize } from "react-icons/tb";
import { PiUploadSimpleLight } from "react-icons/pi";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";
import { RxButton } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { TbClick } from "react-icons/tb";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiShoppingBagOpenLight } from "react-icons/pi";

// import ActivateNewSubscriber from "../assets/imagesource/Activate_New_Subscriber.png";
// import BalanceInfo from "../assets/imagesource/Balance_Info.png";
// import QuerySim from "../assets/imagesource/Query Sim.png";
// import DeactivateSim from "../assets/imagesource/Deactivate_Sim.png";
// import ReactivateSim from "../assets/imagesource/Reactivate_Sim.png";
// import AddWFC from "../assets/imagesource/Add_WFC.png";
// import E911Address from "../assets/imagesource/E911_Address.png";
// import GetCoverageInfo from "../assets/imagesource/Get_Coverage-Info.png";
// import purchasePlan from "../assets/imagesource/purchase_plan.png";
// import changePlan from "../assets/imagesource/change_plan.png";


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
  
  const [isVisible, setIsVisible] = useState(false);

    const handleRecentDesignClick = () => {
        setIsVisible(!isVisible);
    };

    const [isModulesVisible, setIsModulesVisible] = useState(false);

    const handleModulesClick = () => {
        setIsModulesVisible(!isModulesVisible);
    };

    const [isGraphicVisible, setIsGraphicVisible] = useState(false);

    const handleGraphicClick = () => {
        setIsGraphicVisible(!isGraphicVisible);
    };

  return (
    <div className={`${inter.className} antialiased`}>
      <div className='flex gap-4 relative'>
        <div className='absolute top-[-67px] left-[20px]'>
            <button onClick={handleRecentDesignClick}>
                <IoIosMenu className='text-white cursor-pointer text-3xl' />
            </button>
        </div>
        {isVisible && (
            <div className='w-[300px] p-3'>
                <Image src={single_logo} alt="single_logo" className='mb-4' />
                <div>
                    <p className='text-[12px] leading-[12px] text-[#6F6B7D] font-medium pb-3'>Recent Design</p>
                    <ul>
                        <li className='bg-[#E6E6FF] rounded-[8px] p-3 flex items-center gap-3 mb-2'>
                            <Image src={design_small_icon01} alt="design_small_icon01" className='mb-0' />
                            <p className='text-[12px] leading-[12px] text-[#000000] font-light'>We Give Headphones</p>
                        </li>
                        <li className='bg-[#E6E6FF] rounded-[8px] p-3 flex items-center gap-3 mb-2'>
                            <Image src={design_small_icon02} alt="design_small_icon02" className='mb-0' />
                            <p className='text-[12px] leading-[12px] text-[#000000] font-light'>Special Offer This ...</p>
                        </li>
                    </ul>
                </div>
            </div>
        )}
        <div className='flex gap-4 bg-white rounded-2xl shadow-xl mt-[0] p-4 w-screen relative'>
            <div className='w-[68px] bg-[#F9F9FF] h-screen'>
                <div className='border border-[#CECECE] rounded-lg p-2 h-screen'>
                    <button className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md bg-white hover:bg-[#c7488a] text-[#4B465C] hover:text-white'>
                            <FiEdit2 className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Edit</p>
                    </button>
                    <button className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md bg-white hover:bg-[#c7488a] text-[#4B465C] hover:text-white'>
                            <SiHackthebox className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Elements</p>
                    </button>
                    <button className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md bg-white hover:bg-[#c7488a] text-[#4B465C] hover:text-white'>
                            <TbTextResize className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Text</p>
                    </button>
                    <button className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md bg-white hover:bg-[#c7488a] text-[#4B465C] hover:text-white'>
                            <PiUploadSimpleLight className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Upload</p>
                    </button>
                    <button onClick={handleModulesClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md bg-white hover:bg-[#c7488a] text-[#4B465C] hover:text-white'>
                            <TfiLayoutAccordionSeparated className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Modules</p>
                    </button>
                    <button onClick={handleGraphicClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md bg-white hover:bg-[#c7488a] text-[#4B465C] hover:text-white'>
                            <Image src={Star01} alt="Star01" className='w-[28px]' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Indivio.AI</p>
                    </button>
                    <button className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md bg-white hover:bg-[#c7488a] text-[#4B465C] hover:text-white'>
                            <RxButton className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>CTA</p>
                    </button>
                </div>
            </div>
            <div>
                {isModulesVisible && (
                    <div className='w-[362px] absolute left-[100px]'>
                        <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-screen'>
                            <div className='mb-3'>
                                <h3 className='text-[22px] leading-[32px] text-[#414141] font-medium pb-0'>Modules</h3>
                                <p className='text-[16px] leading-[26px] text-[#818181] font-medium pb-2'>Drag & Drop</p>
                            </div>
                            <div className='mb-2'>
                                <Image src={empty_block} alt="empty_block" className='' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex justify-center w-full gap-4'>
                <div className='w-[600px]'>
                    <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-screen'>
                        <div className='mb-3'>
                            <p className='text-[16px] leading-[26px] text-[#818181] font-medium pb-2'>Drag & Drop your modules here</p>
                        </div>
                    </div>
                </div>
            </div>
            {isGraphicVisible && (
                <div className='w-[400px] absolute right-4'>
                    <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-screen'>
                        <div className='mb-3'>
                            <h3 className='text-[18px] leading-[32px] text-[#121212] font-semibold pb-4'>Graphic</h3>
                        </div>
                        <div className='mb-8'>
                            <p className='text-[#121212] text-base font-semibold pb-3'>Select area</p>
                            <ul>
                                <li className='bg-white hover:bg-[#F2EAFF] border border-[#9FA0B1] rounded-[30px] px-4 mr-3 text-[16px] leading-[45px] text-[#A2A2A9] inline-flex items-center gap-2 cursor-pointer'>
                                    <PiShoppingBagOpenLight className='text-2xl' />
                                    All
                                </li>
                                <li className='bg-white hover:bg-[#F2EAFF] border border-[#9FA0B1] rounded-[30px] px-4 mr-3 px-4 text-[16px] leading-[45px] text-[#A2A2A9] inline-flex items-center gap-2 cursor-pointer'>
                                    <TbClick className='text-2xl' />
                                    Click
                                </li>
                                <li className='bg-white hover:bg-[#F2EAFF] border border-[#9FA0B1] rounded-[30px] px-4 text-[16px] leading-[45px] text-[#A2A2A9] inline-flex items-center gap-2 cursor-pointer'>
                                    <HiOutlinePaintBrush className='text-2xl' />
                                    Brush
                                </li>
                            </ul>
                        </div>
                        <div className='mb-8'>
                            <div className='flex items-center gap-4'>
                                <Image src={filter_icon} alt="filter_icon" className='' />
                                <p className='text-[#121212] text-base font-semibold pb-0'>Adjust</p>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <div className='flex items-center gap-4 mb-3'>
                                <Image src={magic_studio_img} alt="magic_studio_img" className='' />
                                <p className='text-[#121212] text-base font-semibold pb-0'>BG Remover</p>
                            </div>
                            <div className='flex gap-3'>
                                <div className='text-center'>
                                    <Image src={magic_studio_01} alt="magic_studio_01" className='mb-0.5' />
                                    <p className='text-[#121212] text-base font-semibold pb-0'>BG Remover</p>
                                </div>
                                <div className='text-center'>
                                    <Image src={magic_studio_02} alt="magic_studio_02" className='mb-0.5' />
                                    <p className='text-[#121212] text-base font-semibold pb-0'>BG Generator</p>
                                </div>
                                <div className='text-center'>
                                    <Image src={magic_studio_03} alt="magic_studio_03" className='mb-0.5' />
                                    <p className='text-[#121212] text-base font-semibold pb-0'>Magic Eraser</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className='flex items-center gap-4 mb-3'>
                                <Image src={filters_img} alt="filters_img" className='' />
                                <p className='text-[#121212] text-base font-semibold pb-0'>Filters</p>
                            </div>
                            <div className='flex gap-3'>
                                <div className='text-center'>
                                    <Image src={magic_studio_01} alt="magic_studio_01" className='mb-0.5' />
                                </div>
                                <div className='text-center'>
                                    <Image src={magic_studio_04} alt="magic_studio_04" className='mb-0.5' />
                                </div>
                                <div className='text-center'>
                                    <Image src={magic_studio_05} alt="magic_studio_05" className='mb-0.5' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Page;