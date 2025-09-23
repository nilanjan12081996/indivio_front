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

import { BiEdit } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg";

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

  return (
    <div className={`${inter.className} antialiased`}>
      <p>Dashboard</p>
    </div>
  )
}

export default Page;