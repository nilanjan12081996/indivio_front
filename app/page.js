'use client';

import Image from "next/image";

import bannerImg from "../app/assets/imagesource/banner_img.png";
import banner01 from "../app/assets/imagesource/banner01.png";
import howItWorksImg from "../app/assets/imagesource/how_it_works_img.png";
import hw01 from "../app/assets/imagesource/hw01.png";
import hw02 from "../app/assets/imagesource/hw02.png";
import hw03 from "../app/assets/imagesource/hw03.png";

import bitCoinIcon from "../app/assets/imagesource/bit_coin_icon.png";
import etherum_icon from "../app/assets/imagesource/etherum_icon.png";
import x_coins_icon from "../app/assets/imagesource/x_coins_icon.png";
import Tether_icon from "../app/assets/imagesource/Tether_icon.png";
import bn_binance_coin_icon from "../app/assets/imagesource/bn_binance_coin_icon.png";
import solana_coin from "../app/assets/imagesource/solana_coin.png";
import usdc_icon from "../app/assets/imagesource/usdc_icon.png";
import Create_New_Resume_icon from "../app/assets/imagesource/Create_New_Resume_icon.png";
import ResumeTemplates_icon from "../app/assets/imagesource/ResumeTemplates_icon.png";
import sub01 from "../app/assets/imagesource/sub01.png";
import sub02 from "../app/assets/imagesource/sub02.png";
import Check from "../app/assets/imagesource/Check.png";
import hiring_icon from "../app/assets/imagesource/hiring_icon.png";
import check_point from "../app/assets/imagesource/check_point.png";

import dashboard_img from "../app/assets/imagesource/dashboard_img.png";

import post_01 from "../app/assets/imagesource/post_01.png";
import post_02 from "../app/assets/imagesource/post_02.png";

import face01 from "../app/assets/imagesource/face01.png";
import face02 from "../app/assets/imagesource/face02.png";
import face03 from "../app/assets/imagesource/face03.png";
import face04 from "../app/assets/imagesource/face04.png";


import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import Link from "next/link";

import { Poppins } from 'next/font/google';
import { Bricolage_Grotesque, Nunito_Sans } from 'next/font/google';

import Testimonial from "./testimonial/page";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5"
import { IoMdSave } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";
import { SlCloudUpload } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { GrSettingsOption } from "react-icons/gr";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button, Select, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlans } from "./reducers/PlanSlice";
import { features } from "process";
import { getCoins } from "./reducers/CoinSlice";
import { useRouter } from "next/navigation";
import LoginModal from "./modal/LoginModal";
import TradingCoinList from "./TradingCoinList";
import FreeResumeTemplates from "./FreeResumeTemplates/page";


import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";




const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'], // specify desired weights
   display: 'swap',
});

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




export default function Home() {
   const { plans } = useSelector((state) => state?.planst)
   const { coins } = useSelector((state) => state?.coinData)
   const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState('USD');
   const [selectedCoin, setSelectedCoin] = useState('');
   const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('');
   const [showDropdown, setShowDropdown] = useState(false);
   const router = useRouter();
   const [openLoginModal, setOpenLoginModal] = useState(false);

   const hanleloginModal = () => {
      setOpenLoginModal(true)
   }


   useEffect(() => {
      dispatch(getPlans())
   }, [])
   console.log("plan", plans);
   useEffect(() => {
      dispatch(getCoins())
   }, [])
   console.log("coinsd", coins)
   // const coinItems = coins?.coins?.map((coin) => coin.item) || [];

   // // Your filtering logic looks correct
   // const filteredCoins = coinItems.filter((coin) =>
   //    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
   // );

   const coinItems = Array.isArray(coins?.coins)
      ? coins.coins.map((coin) => coin.item).filter(Boolean)
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
   // const handleTryForFree = async () => {
   //    console.log("select currency", selectedCoinSymbol);
   //    console.log("select coin symbol", selectedCoinSymbol);
   //    // router.push("/details")

   //    router.push({
   //       pathname: '/details',
   //       query: {
   //          coin: selectedCoinSymbol,
   //          currency: selectedCurrency
   //       }
   //    });



   // };
   useEffect(() => {
      console.log("currency", selectedCurrency);
   }, [selectedCurrency])


   return (
      <div className={`${bricolage.variable} ${nunito.variable} antialiased home_wrapper_arera`}>
         Dashboard
      </div>

   );
}
