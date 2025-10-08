'use client';

import React, { useEffect, useState } from 'react';

import { Poppins } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { Select, Table, TextInput, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination, Textarea, FileInput, Label, Progress } from 'flowbite-react';
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

import shapes_01 from "../assets/imagesource/shapes_01.png";
import shapes_02 from "../assets/imagesource/shapes_02.png";
import shapes_03 from "../assets/imagesource/shapes_03.png";

import graphics_01 from "../assets/imagesource/graphics_01.png";
import graphics_02 from "../assets/imagesource/graphics_02.png";
import graphics_03 from "../assets/imagesource/graphics_03.png";

import generator_01 from "../assets/imagesource/generator_01.png";

import stickers_01 from "../assets/imagesource/stickers_01.png";
import stickers_02 from "../assets/imagesource/stickers_02.png";
import stickers_03 from "../assets/imagesource/stickers_03.png";
import stickers_04 from "../assets/imagesource/stickers_04.png";

import small_tar from "../assets/imagesource/small_tar.png";

import text_ai_icon from "../assets/imagesource/text_ai_icon.png";




import magic_studio_01 from "../assets/imagesource/magic_studio_01.png";
import magic_studio_02 from "../assets/imagesource/magic_studio_02.png";
import magic_studio_03 from "../assets/imagesource/magic_studio_03.png";
import magic_studio_04 from "../assets/imagesource/magic_studio_04.png";
import magic_studio_05 from "../assets/imagesource/magic_studio_05.png";
import empty_block from "../assets/imagesource/empty_block.png";

import assets_slide_03 from "../assets/imagesource/assets_slide_03.png";

import modules_01 from "../assets/imagesource/modules_01.png";
import modules_02 from "../assets/imagesource/modules_02.png";
import modules_03 from "../assets/imagesource/modules_03.png";
import modules_04 from "../assets/imagesource/modules_04.png";








import { BiEdit } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg";

import { FaPlus } from "react-icons/fa6";
import { GoUpload } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCircleCheckFilled } from "react-icons/tb";
import { PiImageThin } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiDraggable } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { TfiAlignLeft } from "react-icons/tfi";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiAlignCenter } from "react-icons/tfi";

import { PiListBullets } from "react-icons/pi";
import { LuLayoutList } from "react-icons/lu";
import { GoListOrdered } from "react-icons/go";
import { LuBold } from "react-icons/lu";
import { PiTextItalicLight } from "react-icons/pi";

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
import { LuCopy } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import AssetsSlider from './AssetsSlider';
import AssetsSlider2 from './AssetsSlider2';
import RecentlyUsedSlider from './RecentlyUsedSlider';
import RecentlyUsedSlider2 from './RecentlyUsedSlider2';
import RecentlyUsedSlider3 from './RecentlyUsedSlider3';
import RecentlyUsedSlider4 from './RecentlyUsedSlider4';
import RecentlyUsedSlider5 from './RecentlyUsedSlider5';
import BrandElementsSlider from './BrandElementsSlider';

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

    const [isAssetsVisible, setIsAssetsVisible] = useState(false);
    const handleAssetsClick = () => {
        setIsAssetsVisible(!isAssetsVisible);
    };

    const [isElementsVisible, setIsElementsVisible] = useState(false);
    const handleElementsClick = () => {
        setIsElementsVisible(!isElementsVisible);
    };

    const [isTextVisible, setIsTextVisible] = useState(false);
    const handleTextClick = () => {
        setIsTextVisible(!isTextVisible);
    };

    const [isImportVisible, setIsImportVisible] = useState(false);
    const handleImportClick = () => {
        setIsImportVisible(!isImportVisible);
    };

    const [isCTAVisible, setIsCTAVisible] = useState(false);
    const handleCTAClick = () => {
        setIsCTAVisible(!isCTAVisible);
    };

    const [isModulesVisible, setIsModulesVisible] = useState(false);
    const handleModulesClick = () => {
        setIsModulesVisible(!isModulesVisible);
    };

    const [isGraphicVisible, setIsGraphicVisible] = useState(false);
    const handleGraphicClick = () => {
        setIsGraphicVisible(!isGraphicVisible);
    };

    // 


    const modules = [
        { id: 1, title: "Text" },
        { id: 2, title: "Image" },
        { id: 3, title: "Button" },
        { id: 4, title: "Textarea" },
    ];

    const [canvasItems, setCanvasItems] = useState([]);

    const handleDragOver = (e) => {
      e.preventDefault(); // allow drop
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const moduleData = e.dataTransfer.getData("module");
        if (moduleData) {
            const droppedModule = JSON.parse(moduleData);
            setCanvasItems((prev) => [...prev, droppedModule]);
        }
    };


    // 
    const handleTextChange = (e, index) => {
        const newText = e.target.value;
        setCanvasItems((prev) => {
            const updated = [...prev];
            updated[index].text = newText;
            return updated;
        });
    };


    // Function to update image for a specific item
    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
        const updated = [...canvasItems];
        updated[index].image = URL.createObjectURL(file);
        setCanvasItems(updated);
        }
    };

    // 
    const handleTextareaChange = (e, index) => {
        const newText = e.target.value;
        setCanvasItems((prev) => {
            const updated = [...prev];
            updated[index].text = newText;
            return updated;
        });
    };

    // 
    const handleRemoveItem = (index) => {
        setCanvasItems((prevItems) =>
            prevItems.filter((_, i) => i !== index)
        );
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
        <div className='lg:flex gap-4 bg-white rounded-2xl shadow-xl mt-[0] p-4 w-screen relative'>


            {/* This section for desktop start here */}
            <div className='w-[68px] bg-[#F9F9FF] h-screen hidden lg:block'>
                <div className='border border-[#CECECE] rounded-lg p-2 h-screen'>
                    <button onClick={handleAssetsClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <LuCopy className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Assets</p>
                    </button>
                    <button onClick={handleElementsClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <SiHackthebox className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Elements</p>
                    </button>
                    <button onClick={handleTextClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <TbTextResize className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Text</p>
                    </button>
                    <button onClick={handleImportClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <PiUploadSimpleLight className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Import</p>
                    </button>
                    <button onClick={handleModulesClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <TfiLayoutAccordionSeparated className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Modules</p>
                    </button>
                    <button onClick={handleGraphicClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <Image src={Star01} alt="Star01" className='w-[28px]' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Indivio.AI</p>
                    </button>
                    <button onClick={handleCTAClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <RxButton className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>CTA</p>
                    </button>
                </div>
            </div>
            {/* This section for desktop ends here */}

            {/* This section for mobile start here */}
            <div className='w-full bg-[#F9F9FF] h-auto lg:hidden block absolute left-0 bottom-0'>
                <div className='border border-[#CECECE] rounded-lg p-4 grid grid-cols-5 gap-4'>
                    <button onClick={handleAssetsClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <LuCopy className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Assets</p>
                    </button>
                    <button onClick={handleElementsClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <SiHackthebox className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Elements</p>
                    </button>
                    <button onClick={handleTextClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <TbTextResize className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Text</p>
                    </button>
                    <button onClick={handleImportClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <PiUploadSimpleLight className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Import</p>
                    </button>
                    <button onClick={handleModulesClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <TfiLayoutAccordionSeparated className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Modules</p>
                    </button>
                    <button onClick={handleGraphicClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <Image src={Star01} alt="Star01" className='w-[28px]' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>Indivio.AI</p>
                    </button>
                    <button onClick={handleCTAClick} className='cursor-pointer mb-2'>
                        <div className='w-[48px] h-[48px] rounded-[10px] flex justify-center items-center shadow-md item_btn text-[#4B465C] hover:text-white'>
                            <RxButton className='text-xl' />
                        </div>
                        <p className='text-[#282828] text-xs font-medium pt-0.5'>CTA</p>
                    </button>
                </div>
            </div>
            {/* This section for mobile start here */}


            {/* Assets section start here */}
            <div>
                {isAssetsVisible && (
                    <div className='w-[335px] lg:w-[362px] absolute left-0 lg:left-[100px] bottom-[200px] lg:bottom-[initial] z-20'>
                        <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-[300px] lg:h-screen overflow-y-scroll'>
                            <div className='mb-0'>
                                <h3 className='text-[22px] leading-[32px] text-[#414141] font-medium pb-0'>Assets</h3>
                                <p className='text-[16px] leading-[26px] text-[#818181] font-medium pb-2'>Use assets library</p>
                            </div>

                            <div>
                                <div className='search_section flex items-center gap-2'>
                                    <CiSearch className='text-2xl mx-2' />
                                    <TextInput id="base" type="text" sizing="md" placeholder='Search' />
                                </div>
                                <div className='mt-3'>
                                    <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>Suggested Items</p>
                                    <div className='mb-2'>
                                        <AssetsSlider />
                                    </div>
                                     <div className='mb-2'>
                                        <AssetsSlider2 />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>Recently used</p>
                                    <div className='mb-2'>
                                        <RecentlyUsedSlider />
                                    </div>
                                    <div className='mb-2'>
                                        <RecentlyUsedSlider2 />
                                    </div>
                                    <div className='mb-2'>
                                        <RecentlyUsedSlider3 />
                                    </div>
                                    <div className='mb-2'>
                                        <RecentlyUsedSlider4 />
                                    </div>
                                    <div className='mb-2'>
                                        <RecentlyUsedSlider5 />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>Brand Elements</p>
                                    <div className='mb-2'>
                                        <BrandElementsSlider />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            {/* Assets section ends here */}

            {/* Elements section start here */}
            <div>
                {isElementsVisible && (
                    <div className='lg:w-[362px] absolute left-0 lg:left-[100px] bottom-[200px] lg:bottom-[initial] z-20'>
                        <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-[300px] lg:h-screen overflow-y-scroll'>
                             <div>
                                <div className='search_section flex items-center gap-2'>
                                    <CiSearch className='text-2xl mx-2' />
                                    <TextInput id="base" type="text" sizing="md" placeholder='Search' />
                                </div>
                                <div className='mt-2 grid grid-cols-4 gap-2'>
                                    <div className='border-1 border-[#ADAFB0] rounded-[10px] text-[14px] leading-[40px] text-[#B4ADAD] px-0 inline-block text-center'>
                                        Circle
                                    </div>
                                    <div className='border-1 border-[#ADAFB0] rounded-[10px] text-[14px] leading-[40px] text-[#B4ADAD] px-0 inline-block text-center'>
                                        Frame
                                    </div>
                                    <div className='border-1 border-[#ADAFB0] rounded-[10px] text-[14px] leading-[40px] text-[#B4ADAD] px-0 inline-block text-center'>
                                        Line
                                    </div>
                                    <div className='border-1 border-[#ADAFB0] rounded-[10px] text-[14px] leading-[40px] text-[#B4ADAD] px-0 inline-block text-center'>
                                        Circle
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>Recently used</p>
                                    <div className='mb-2 grid grid-cols-4 gap-2'>
                                        <div className=''>
                                           <Image src={assets_slide_03} alt="assets_slide_03" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={assets_slide_03} alt="assets_slide_03" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={assets_slide_03} alt="assets_slide_03" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={assets_slide_03} alt="assets_slide_03" className='rounded-[5px]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>Shapes</p>
                                        <Link className='text-[12px] leading-[20px] text-[#262626] hover:text-[#c629dd]' href="/" passHref>See all</Link>
                                    </div>
                                    <div className='mb-2 grid grid-cols-3 gap-2'>
                                        <div className=''>
                                           <Image src={shapes_01} alt="shapes_01" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={shapes_02} alt="shapes_02" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={shapes_03} alt="shapes_03" className='rounded-[5px]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>Graphics</p>
                                        <Link className='text-[12px] leading-[20px] text-[#262626] hover:text-[#c629dd]' href="/" passHref>See all</Link>
                                    </div>
                                    <div className='mb-2 grid grid-cols-3 gap-2'>
                                        <div className=''>
                                           <Image src={graphics_01} alt="graphics_01" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={graphics_02} alt="graphics_02" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={graphics_03} alt="graphics_03" className='rounded-[5px]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>AI Image Generator</p>
                                    <div className='mb-2'>
                                        <div className='flex items-center gap-3 mb-2'>
                                            <div className='w-3/12'>
                                                <button className='border-2 border-[#d233c3] rounded-[5px] w-full h-[70px] bg-[#F5F5F5] hover:bg-white flex justify-center items-center cursor-pointer'>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                            <div className='w-9/12 text-[#646464] text-[16px] leading-[20px] font-bold'>Generate your own</div>
                                        </div>
                                        <div className='flex items-center gap-3 mb-2'>
                                            <div className='w-3/12'>
                                                <Image src={generator_01} alt="generator_01" className='' />
                                            </div>
                                            <div className='w-9/12 text-[#646464] text-[16px] leading-[20px] font-bold'>Tshirt ad with modern touch</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[16px] leading-[26px] text-[#696969] font-medium pb-2'>Stickers</p>
                                        <Link className='text-[12px] leading-[20px] text-[#262626] hover:text-[#c629dd]' href="/" passHref>See all</Link>
                                    </div>
                                    <div className='mb-2 grid grid-cols-4 gap-2'>
                                        <div className=''>
                                           <Image src={stickers_01} alt="stickers_01" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={stickers_02} alt="stickers_02" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={stickers_03} alt="stickers_03" className='rounded-[5px]' />
                                        </div>
                                        <div className=''>
                                            <Image src={stickers_04} alt="stickers_04" className='rounded-[5px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            {/* Elements section ends here */}

            {/* Import section start here */}
            <div>
                {isImportVisible && (
                    <div className='lg:w-[362px] absolute left-0 lg:left-[100px] bottom-[200px] lg:bottom-[initial] z-20'>
                        <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-[300px] lg:h-screen overflow-y-scroll'>

                            <div className="flex w-full items-center justify-center">
                                <Label
                                    htmlFor="dropzone-file"
                                    className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-4 border-[#e1e1e1] bg-[#F6F8F9] hover:bg-[#F6F8F9]"
                                >
                                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                        <GoUpload className='text-[#9795a2] text-4xl' />
                                        <p className="mb-2 text-[20px] leading-[24px] text-[#222222]">
                                            <span className="font-semibold">Drag and Drop Image or</span>
                                        </p>
                                        <div className='mb-4 mt-2'>
                                            <button className='grad_btn text-[14px] leading-[40px] text-white font-semibold px-6 rounded-[25px] cursor-pointer'>Choose Image to upload</button>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPEG, JPG - Maximum file size 10 MB</p>
                                    </div>
                                    <FileInput id="dropzone-file" className="hidden" />
                                </Label>    
                            </div>

                            <div className='mt-5'>
                                <p className='text-[16px] leading-[26px] text-[#000000] font-medium pb-3'>Imported Files</p>

                                <div>
                                    <div className='mb-2 border border-[#A6A7A8] rounded-[10px] px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2/12'>
                                                <PiImageThin className='text-[#828282] text-[55px]' />
                                            </div>
                                            <div className='w-7/12'>
                                                <p className='text-[14px] leading-[24px] font-semibold text-[#222222]'>Headphone.png</p>
                                                <div className='flex gap-4'>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>size: 6.4 MB</span>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>Uploaded: Today</span>
                                                </div>
                                            </div>
                                            <div className='w-3/12 flex justify-end items-center gap-2'>
                                                <button className='cursor-pointer text-[#39d84b] hover:text-[#b9fecd]'><TbCircleCheckFilled className='text-[25px]' /></button>
                                                <button className='cursor-pointer text-[#7a7a7a] hover:text-[#ff0000]'><RiDeleteBinLine className='text-[25px]' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-2 border border-[#A6A7A8] rounded-[10px] px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2/12'>
                                                <PiImageThin className='text-[#828282] text-[55px]' />
                                            </div>
                                            <div className='w-7/12'>
                                                <p className='text-[14px] leading-[24px] font-semibold text-[#222222]'>Headphone.png</p>
                                                <div className='flex gap-4'>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>size: 6.4 MB</span>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>Uploaded: Today</span>
                                                </div>
                                            </div>
                                            <div className='w-3/12 flex justify-end items-center gap-2'>
                                                <button className='cursor-pointer text-[#39d84b] hover:text-[#b9fecd]'><TbCircleCheckFilled className='text-[25px]' /></button>
                                                <button className='cursor-pointer text-[#7a7a7a] hover:text-[#ff0000]'><RiDeleteBinLine className='text-[25px]' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-2 border border-[#A6A7A8] rounded-[10px] px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2/12'>
                                                <PiImageThin className='text-[#828282] text-[55px]' />
                                            </div>
                                            <div className='w-7/12'>
                                                <p className='text-[14px] leading-[24px] font-semibold text-[#222222]'>Headphone.png</p>
                                                <div className='flex gap-4'>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>size: 6.4 MB</span>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>Uploaded: Today</span>
                                                </div>
                                            </div>
                                            <div className='w-3/12 flex justify-end items-center gap-2'>
                                                <button className='cursor-pointer text-[#39d84b] hover:text-[#b9fecd]'><TbCircleCheckFilled className='text-[25px]' /></button>
                                                <button className='cursor-pointer text-[#7a7a7a] hover:text-[#ff0000]'><RiDeleteBinLine className='text-[25px]' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-2 border border-[#A6A7A8] rounded-[10px] px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2/12'>
                                                <PiImageThin className='text-[#828282] text-[55px]' />
                                            </div>
                                            <div className='w-7/12'>
                                                <p className='text-[14px] leading-[24px] font-semibold text-[#222222]'>Headphone.png</p>
                                                <div className='flex gap-4'>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>size: 6.4 MB</span>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>Uploaded: Today</span>
                                                </div>
                                            </div>
                                            <div className='w-3/12 flex justify-end items-center gap-2'>
                                                <button className='cursor-pointer text-[#39d84b] hover:text-[#b9fecd]'><TbCircleCheckFilled className='text-[25px]' /></button>
                                                <button className='cursor-pointer text-[#7a7a7a] hover:text-[#ff0000]'><RiDeleteBinLine className='text-[25px]' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-2 border border-[#A6A7A8] rounded-[10px] px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2/12'>
                                                <PiImageThin className='text-[#828282] text-[55px]' />
                                            </div>
                                            <div className='w-7/12'>
                                                <p className='text-[14px] leading-[24px] font-semibold text-[#222222]'>Headphone.png</p>
                                                <div className='flex gap-4'>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>size: 6.4 MB</span>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>Uploaded: Today</span>
                                                </div>
                                            </div>
                                            <div className='w-3/12 flex justify-end items-center gap-2'>
                                                <button className='cursor-pointer text-[#39d84b] hover:text-[#b9fecd]'><TbCircleCheckFilled className='text-[25px]' /></button>
                                                <button className='cursor-pointer text-[#7a7a7a] hover:text-[#ff0000]'><RiDeleteBinLine className='text-[25px]' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-2 border border-[#A6A7A8] rounded-[10px] px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2/12'>
                                                <PiImageThin className='text-[#828282] text-[55px]' />
                                            </div>
                                            <div className='w-7/12'>
                                                <p className='text-[14px] leading-[24px] font-semibold text-[#222222]'>Headphone.png</p>
                                                <div className='flex gap-4'>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>size: 6.4 MB</span>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>Uploaded: Today</span>
                                                </div>
                                            </div>
                                            <div className='w-3/12 flex justify-end items-center gap-2'>
                                                <button className='cursor-pointer text-[#39d84b] hover:text-[#b9fecd]'><TbCircleCheckFilled className='text-[25px]' /></button>
                                                <button className='cursor-pointer text-[#7a7a7a] hover:text-[#ff0000]'><AiOutlineClose className='text-[25px]' /></button>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className='w-11/12'>
                                                <Progress progress={50} color="blue" size="sm" /> 
                                            </div>
                                            <div className='w-1/12'>
                                                <p className='text-[#807d8d] text-[10px] leading-[20px]'>50%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-2 border border-[#A6A7A8] rounded-[10px] px-3 py-2'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2/12'>
                                                <PiImageThin className='text-[#828282] text-[55px]' />
                                            </div>
                                            <div className='w-7/12'>
                                                <p className='text-[14px] leading-[24px] font-semibold text-[#222222]'>Headphone.png</p>
                                                <div className='flex gap-4'>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>size: 6.4 MB</span>
                                                    <span className='text-[10px] leading-[18px] text-[#6F6B7D]'>Uploaded: Today</span>
                                                </div>
                                            </div>
                                            <div className='w-3/12 flex justify-end items-center gap-2'>
                                                <button className='cursor-pointer text-[#39d84b] hover:text-[#b9fecd]'><TbCircleCheckFilled className='text-[25px]' /></button>
                                                <button className='cursor-pointer text-[#7a7a7a] hover:text-[#ff0000]'><RiDeleteBinLine className='text-[25px]' /></button>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className='w-full'>
                                                <Progress progress={0} color="blue" size="sm" /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* {modules.map((mod) => (
                                <div
                                    key={mod.id}
                                    draggable
                                    onDragStart={(e) =>
                                        e.dataTransfer.setData("module", JSON.stringify(mod))
                                    }
                                   className="border rounded-lg p-4 flex items-center gap-3 shadow-sm cursor-grab hover:bg-[#F9F9FF] mb-4"
                                >
                                   <p className="text-[14px] font-medium">{mod.title}</p>
                                </div>
                            ))} */}

                        </div>
                    </div>
                )}
            </div>
            {/* Import section ends here */}  

            {/* Text section start here */}
            <div>
                {isTextVisible && (
                    <div className='lg:w-[362px] absolute right-0 lg:right-[15px] bottom-[200px] lg:bottom-[initial] z-20'>
                        <div className='h-[300px] lg:h-screen overflow-y-scroll'>

                           <div className='border border-[#CFCFCF] bg-white rounded-lg p-3 form_area2 mb-12 shadow-xl'>
                              <div className='pb-3'>
                                <p className='text-[#3C3C3C] text-[14px] leading-[16px] font-semibold'>Typography</p>
                              </div>
                              <div className='mb-2'>
                                <p className='text-[#666666] text-xs leading-[16px] font-semibold pb-1'>Text</p>
                                <div className='mb-2'>
                                    <TextInput id="small" type="text" sizing="sm" placeholder='Enter your text' />
                                </div>
                                <div className='grid grid-cols-3 gap-4 border-b border-[#ebebeb] pb-2'>
                                    <div>
                                        <Select required>
                                            <option>Inter</option>
                                            <option>Arial</option>
                                            <option>Open Sans</option>
                                            <option>Poppins</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <Select required>
                                            <option>Regular</option>
                                            <option>Bold</option>
                                            <option>Semibold</option>
                                            <option>Mediums</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <Select required>
                                            <option>10</option>
                                            <option>12</option>
                                            <option>14</option>
                                            <option>16</option>
                                        </Select>
                                    </div>
                                </div>
                              </div>
                              <div className='flex gap-1 mb-2'>
                                <div className='w-5/12 border-r-2 border-[#d7d7d7] pr-1'>
                                   <p className='text-[#666666] text-xs leading-[16px] font-semibold pb-1'>Alignment</p>
                                   <div className='flex gap-1'>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <TfiAlignLeft />
                                      </button>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <TfiAlignCenter />
                                      </button>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <TfiAlignRight />
                                      </button>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <TfiAlignJustify />
                                      </button>
                                   </div>
                                </div>
                                <div className='w-4/12 border-r-2 border-[#d7d7d7] pr-1'>
                                   <p className='text-[#666666] text-xs leading-[16px] font-semibold pb-1'>List</p>
                                   <div className='flex gap-1'>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <PiListBullets />
                                      </button>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <LuLayoutList />
                                      </button>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <GoListOrdered />
                                      </button>
                                   </div>
                                </div>
                                <div className='w-3/12'>
                                   <p className='text-[#666666] text-xs leading-[16px] font-semibold pb-1'>Style</p>
                                   <div className='flex gap-1'>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <LuBold />
                                      </button>
                                      <button className='border border-[#dddddd] w-[28px] h-[28px] rounded-[3px] cursor-pointer flex items-center justify-center text-[#93909d]'>
                                        <PiTextItalicLight />
                                      </button>
                                   </div>
                                </div>
                              </div>
                              <div>
                                <button className='grad_btn text-[14px] leading-[40px] text-white font-semibold px-6 rounded-[25px] cursor-pointer w-full flex gap-1 items-center justify-center'>
                                    <Image src={text_ai_icon} alt="text_ai_icon" className='' />
                                    Text AI
                                </button>
                              </div>
                           </div>

                            <div className='border border-[#CFCFCF] bg-white rounded-lg p-3 form_area2 mb-10'>
                               <div className='mb-2'>
                                    <div className='flex items-center gap-2 mb-3'>
                                        <Image src={Star01} alt="Star01" className='' />
                                        <h3 className='text-[16px] leading-[32px] font-semibold text-[#5D596C]'><span className='text-[26px]'>Refine with AI</span></h3>
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

                                <div className='bg-[#eae5e5] border-2 border-[#b4b2be] p-2 rounded-[5px]'>

                                    <div className='bg-[#FFFFFF] rounded-[10px] px-4 py-3 flex items-center gap-4 mb-3'>
                                        <div className='w-1/12'>
                                            <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                        </div>
                                        <div className='w-10/12'>
                                            <p className='text-[13px] leading-[30px] text-[#5E5E5E]'>We Give Headphones</p>
                                        </div>
                                        <div className='w-1/12'>
                                            <button className='text-[#b7b7b7]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                        </div>
                                    </div>

                                    <div className='bg-[#FFFFFF] rounded-[10px] px-4 py-3 flex items-center gap-4 mb-3'>
                                        <div className='w-1/12'>
                                            <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                        </div>
                                        <div className='w-10/12'>
                                            <p className='text-[13px] leading-[20px] text-[#5E5E5E]'>Make any purchase over $1500 and get cool headphones as a gift</p>
                                        </div>
                                        <div className='w-1/12'>
                                            <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                        </div>
                                    </div>

                                    <div className='bg-[#FFFFFF] rounded-[10px] px-4 py-3 flex items-center gap-4 mb-3'>
                                        <div className='w-1/12'>
                                            <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                        </div>
                                        <div className='w-10/12'>
                                            <button className='text-[#6f6b7d] bg-[#F2F2F2] cursor-pointer border-2 border-[#5E5E5E] text-[12px] rounded-[25px] w-[70px] h-[32px] flex items-center justify-between pl-2'>
                                                Buy
                                                <IoIosArrowDroprightCircle className='text-[30px]' />
                                            </button>
                                        </div>
                                        <div className='w-1/12'>
                                            <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                        </div>
                                    </div>

                                </div>
          
                           </div>

                        </div>
                    </div>
                )}
            </div>
            {/* Text section ends here */}

            {/* Modules section start here */}
            <div>
                {isModulesVisible && (
                    <div className='lg:w-[362px] absolute left-0 lg:left-[100px] bottom-[200px] lg:bottom-[initial] z-20'>
                        <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-[300px] lg:h-screen overflow-y-scroll'>
                            <div className='mb-3'>
                                <h3 className='text-[22px] leading-[32px] text-[#414141] font-medium pb-0'>Modules</h3>
                                <p className='text-[16px] leading-[26px] text-[#818181] font-medium pb-2'>Drag & Drop</p>
                            </div>

                            <div className='search_section flex items-center gap-2 mb-5'>
                                <CiSearch className='text-2xl mx-2' />
                                <TextInput id="base" type="text" sizing="md" placeholder='Search' />
                            </div>

                            {modules.map((mod) => (
                                <div
                                    key={mod.id}
                                    draggable
                                    onDragStart={(e) =>
                                        e.dataTransfer.setData("module", JSON.stringify(mod))
                                    }
                                   className="border rounded-lg p-4 flex items-center gap-3 shadow-sm cursor-grab hover:bg-[#F9F9FF] mb-4"
                                >
                                   <p className="text-[14px] font-medium">{mod.title}</p>
                                </div>
                            ))}

                            <div className='mt-3'>
                                <p className='text-[16px] leading-[26px] text-[#414141] font-medium pb-2'>Recommendation Block</p>
                                <div className='text-center border-b border-[#e8e8e8]'>   
                                    <Image src={modules_01} alt="modules_01" className='mb-0 inline-block' />
                                    <p className='text-[16px] leading-[26px] text-[#414141] font-medium pb-2'>Item recommendation Block</p>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div className='text-center border-b border-[#e8e8e8]'>   
                                    <Image src={modules_02} alt="modules_02" className='mb-0 inline-block' />
                                    <p className='text-[16px] leading-[26px] text-[#414141] font-medium pb-2'>Category recommendation Block</p>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div className='text-center border-b border-[#e8e8e8]'>   
                                    <Image src={modules_04} alt="modules_04" className='mb-0 inline-block' />
                                    <p className='text-[16px] leading-[26px] text-[#414141] font-medium pb-2'>Layout 3</p>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p className='text-[16px] leading-[26px] text-[#414141] font-medium pb-2'>Benefit Block</p>
                                <div className='text-center border-b border-[#e8e8e8]'>   
                                    <Image src={modules_03} alt="modules_03" className='mb-0 inline-block' />
                                    <p className='text-[16px] leading-[26px] text-[#414141] font-medium pb-2'>Benefit panel 3   </p>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            {/* Modules section ends here */}

            {/* Indivio.AI section start here */}
            {isGraphicVisible && (
                <div className='lg:w-[400px] absolute left-0 lg:left-[initial] lg:right-4 bottom-[200px] lg:bottom-[initial] z-20'>
                    <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-[300px] lg:h-screen overflow-y-scroll'>
                        <div className='mb-3'>
                            <h3 className='text-[18px] leading-[32px] text-[#121212] font-semibold pb-4'>Graphic</h3>
                        </div>
                        <div className='mb-8'>
                            <p className='text-[#121212] text-base font-semibold pb-3'>Select area</p>
                            <ul>
                                <li className='bg-white hover:bg-[#F2EAFF] border border-[#9FA0B1] rounded-[30px] px-3 lg:px-4 mr-1 lg:mr-3 text-[16px] leading-[45px] text-[#A2A2A9] inline-flex items-center gap-2 cursor-pointer'>
                                    <PiShoppingBagOpenLight className='text-2xl' />
                                    All
                                </li>
                                <li className='bg-white hover:bg-[#F2EAFF] border border-[#9FA0B1] rounded-[30px] mr-1 lg:mr-3 px-3 lg:px-4 text-[16px] leading-[45px] text-[#A2A2A9] inline-flex items-center gap-2 cursor-pointer'>
                                    <TbClick className='text-2xl' />
                                    Click
                                </li>
                                <li className='bg-white hover:bg-[#F2EAFF] border border-[#9FA0B1] rounded-[30px] px-3 lg:px-4 text-[16px] leading-[45px] text-[#A2A2A9] inline-flex items-center gap-2 cursor-pointer'>
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
            {/* Indivio.AI section ends here */}

            {/* CTA section start here */}
            <div>
                {isCTAVisible && (
                    <div className='lg:w-[362px] absolute left-0 lg:left-[100px] bottom-[200px] lg:bottom-[initial] z-20'>
                        <div className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-[300px] lg:h-screen overflow-y-scroll'>
                            <div className='mb-3 flex items-center'>
                                <Image src={small_tar} alt="small_tar" className='mb-0' />
                                <h3 className='text-[16px] leading-[32px] text-[#414141] font-semibold pb-0'>Indivia.AI</h3>
                            </div>

                            <div className='mb-0'>
                                <p className='text-[14px] leading-[26px] text-[#818181] font-medium pb-2'>Layers</p>
                            </div>

                            <div>
                                <div className='bg-[#F0F0F0] rounded-[10px] px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[13px] leading-[30px] text-[#5E5E5E]'>We Give Headphones</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#b7b7b7]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='bg-[#F0F0F0] rounded-[10px] px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[13px] leading-[30px] text-[#5E5E5E]'>We Give Headphones</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#b7b7b7]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='bg-[#F0F0F0] rounded-[10px] px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[13px] leading-[30px] text-[#5E5E5E]'>We Give Headphones</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#b7b7b7]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='bg-[#F0F0F0] rounded-[10px] px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[13px] leading-[30px] text-[#5E5E5E]'>We Give Headphones</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#b7b7b7]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[13px] leading-[20px] text-[#5E5E5E]'>Make any purchase over $1500 and get cool headphones as a gift</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[13px] leading-[20px] text-[#5E5E5E]'>Make any purchase over $1500 and get cool headphones as a gift</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[13px] leading-[20px] text-[#5E5E5E]'>Make any purchase over $1500 and get cool headphones as a gift</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='text-[16px] leading-[20px] text-[#5E5E5E] font-semibold border border-[#5E5E5E] p-1'>We Give Headphones</p>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <button className='text-[#6f6b7d] bg-[#F2F2F2] cursor-pointer border-2 border-[#5E5E5E] text-[12px] rounded-[25px] w-[70px] h-[32px] flex items-center justify-between pl-2'>
                                            Buy
                                            <IoIosArrowDroprightCircle className='text-[30px]' />
                                        </button>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                                <div className='px-4 py-3 flex items-center gap-4 mb-3'>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><RiDraggable className='text-[30px]' /></button>
                                    </div>
                                    <div className='w-10/12'>
                                        <button className='text-[#6f6b7d] bg-[#F2F2F2] cursor-pointer border-2 border-[#5E5E5E] text-[12px] rounded-[25px] w-[70px] h-[32px] flex items-center justify-between pl-2'>
                                            Buy
                                            <IoIosArrowDroprightCircle className='text-[30px]' />
                                        </button>
                                    </div>
                                    <div className='w-1/12'>
                                        <button className='text-[#6f6b7d]'><IoCheckmarkCircleOutline className='text-[28px]' /></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            {/* CTA section ends here */} 

            <div className='lg:flex justify-center w-full gap-4 drag_drop_area'>
                <div className='lg:w-[600px]'>
                    <div   
                        onDrop={handleDrop}
                        onDragOver={handleDragOver} 
                        className='border border-[#CFCFCF] bg-white rounded-lg p-4 h-[400px] lg:h-screen mb-50'
                    >
                        <div className='mb-3'>
                            <p className='text-[16px] leading-[26px] text-[#818181] font-medium pb-2'>Drag & Drop your modules here</p>
                        </div>

                        {/* Render dropped items */}

                        <div className="space-y-3">
                            {canvasItems.map((item, index) => (
                                <div
                                key={index}
                                className="border rounded-md p-6 shadow-sm bg-[#F9F9FF] relative"
                                >
                                {/* Close Button */}
                                <button
                                    onClick={() => handleRemoveItem(index)}
                                    className="absolute top-2 right-2 text-red-500 font-bold text-lg hover:text-red-700 z-10"
                                >
                                    ×
                                </button>

                                <div className="mb-4 form_area">
                                    {item.title === "Text" && (
                                    <TextInput
                                        type="text"
                                        value={item.text || ""}
                                        onChange={(e) => handleTextChange(e, index)}
                                        placeholder="Enter your text here"
                                    />
                                    )}
                                </div>

                                <div className="mb-4">
                                    {item.title === "Image" && (
                                    <div className="w-32 h-20 bg-gray-200 flex items-center justify-center rounded relative overflow-hidden">
                                        {item.image ? (
                                        <img
                                            src={item.image}
                                            alt="Uploaded preview"
                                            className="w-full h-full object-cover"
                                        />
                                        ) : (
                                        <span className="text-xs text-gray-500">Image Placeholder</span>
                                        )}

                                        {/* Upload Button */}
                                        <label className="absolute bottom-1 right-1 bg-white text-xs border px-2 py-0.5 rounded cursor-pointer shadow-sm">
                                        Upload
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageChange(e, index)}
                                        />
                                        </label>
                                    </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    {item.title === "Button" && (
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded">
                                        Click Me
                                    </button>
                                    )}
                                </div>

                                <div className="mb-4 form_area">
                                    {item.title === "Textarea" && (
                                    <Textarea
                                        rows={4}
                                        value={item.text || ""}
                                        onChange={(e) => handleTextareaChange(e, index)}
                                        className="w-full border bg-white rounded px-2 py-1"
                                        placeholder="Enter your text here"
                                    />
                                    )}
                                </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div> 

        </div>
      </div>
    </div>
  )
}

export default Page;