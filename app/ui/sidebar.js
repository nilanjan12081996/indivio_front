'use client';

import Image from 'next/image';
import Link from 'next/link'
import React, { useCallback, useEffect, useRef } from 'react'

import logo from '../assets/imagesource/logo.png';
import footer_logo from "../assets/imagesource/footer_logo.png";
import logoAdmin from "../assets/imagesource/logo_admin.png";
import logoSmall from "../assets/imagesource/logo_small.png";

import userFace from "../assets/imagesource/user_face.png";

import { useState } from "react";

import { Poppins } from 'next/font/google';

import { BiSolidDashboard } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { usePathname, useRouter } from 'next/navigation';
import { FaRectangleList } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { getSearchHistory, reset } from '../reducers/SearchHistroySlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/AuthSlice';

import { HiDocumentText } from "react-icons/hi2";
import { HiHome } from "react-icons/hi";

import { RxDashboard } from "react-icons/rx";
import { IoRocketOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { TbBuilding } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Sidebar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch()
  const { historyData, pagination, loading } = useSelector(state => state.his);
  const loaderRef = useRef(null);
  const topLoaderRef = useRef(null);
  //console.log(sidebarOpen,"sidebarOpen");
  const router = useRouter();
  const handleLogout = () => {
    // dispatch(logout())

    try {

      // Dispatch logout action
      dispatch(logout());
      dispatch(reset());

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

  const openMobileMenu = () => {
    setSidebarOpen(prev => !prev);
  }

  // For mobile menu start here
  // Add state to manage navbar collapse
  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle navbar
  const toggleNavbar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to close navbar when menu item is clicked
  const closeNavbar = () => {
    setSidebarOpen(false);
  };
  // For mobile menu ends here
  useEffect(() => {
    dispatch(getSearchHistory({ week: 0 }));
  }, [dispatch]);

  // const handleObserver = useCallback(
  //   (entries) => {
  //     const target = entries[0];
  //     if (target.isIntersecting && pagination.has_next && !loading) {
  //       dispatch(getSearchHistory({ week: pagination.previous_week }));
  //     }
  //   },
  //   [dispatch, pagination, loading]
  // );

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleObserver, {
  //     root: null,
  //     rootMargin: '20px',
  //     threshold: 1.0
  //   });
  //   if (loaderRef.current) observer.observe(loaderRef.current);
  //   return () => {
  //     if (loaderRef.current) observer.unobserve(loaderRef.current);
  //   };
  // }, [handleObserver]);



  { console.log("searchHistory", historyData) }

  return (
    <aside
      style={{ zIndex: 1 }}
      className={`absolute left-0 top-0 lg:top-[50px] z-9999 flex h-screen w-[240px] rounded-[20px] lg:w-auto flex-col border border-[#CECECE] bg-[#F9F9FF] duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <button onClick={openMobileMenu} className={`menu_btn ${sidebarOpen ? 'right-[-24px]' : 'right-[-84px]'}`}>
        <FiMenu className='text-white text-xl' />
      </button>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="px-6 py-5 lg:py-6">
        <Link className='flex justify-center items-center' href="/" passHref>
          {/* <Image src={logoAdmin} alt="logoAdmin" className='w-[199px]' /> */}
          {sidebarOpen ?
            <>
              <div className="text-center mb-8">
                <Image src={logoSmall} alt="logoSmall" className='w-auto' />
              </div>
            </>
            :
            <>
              <div className="text-center mb-8">
                <Image src={logoAdmin} alt="logoAdmin" className='w-[199px]' />
              </div>
            </>
          }
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className={`${poppins.className} sidebar_menu no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none`}>
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-2">
          {/* <!-- Menu Group --> */}
          <div>

            <ul className="mb-6 flex flex-col gap-1.5 mx-4">
              <li onClick={closeNavbar}>
                <Link href="/"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-[#5D596C] duration-300 ease-in-out hover:bg-graydark ${pathname.includes('/') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {sidebarOpen ?
                    <>
                      <RxDashboard className='text-2xl' />
                    </>
                    :
                    <>
                      <RxDashboard className='text-2xl' />
                      Dashboard
                    </>
                  }
                </Link>
              </li>

              <li onClick={closeNavbar}>
                <Link href="/campaigns"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-[#5D596C] duration-300 ease-in-out hover:bg-graydark ${pathname.includes('campaigns') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {sidebarOpen ?
                    <>
                      <IoRocketOutline className='text-2xl' />
                    </>
                    :
                    <>
                      <IoRocketOutline className='text-2xl' />
                      Campaigns
                    </>
                  }
                </Link>
              </li>
              <li onClick={closeNavbar}>
                <Link href="/analytics"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-[#5D596C] duration-300 ease-in-out hover:bg-graydark ${pathname.includes('analytics') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {sidebarOpen ?
                    <>
                      <TbBrandGoogleAnalytics className='text-2xl' />
                    </>
                    :
                    <>
                      <TbBrandGoogleAnalytics className='text-2xl' />
                      Analytics
                    </>
                  }
                </Link>
              </li>
              <li onClick={closeNavbar}>
                <Link href="/personas-audience"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-[#5D596C] duration-300 ease-in-out hover:bg-graydark ${pathname.includes('personas-audience') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {sidebarOpen ?
                    <>
                      <FiUsers className='text-2xl' />
                    </>
                    :
                    <>
                      <FiUsers className='text-2xl' />
                      Personas & Audience
                    </>
                  }
                </Link>
              </li>
              <li onClick={closeNavbar}>
                <Link href="/playbooks"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-[#5D596C] duration-300 ease-in-out hover:bg-graydark ${pathname.includes('playbooks') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {sidebarOpen ?
                    <>
                      <GoBook className='text-2xl' />
                    </>
                    :
                    <>
                      <GoBook className='text-2xl' />
                      Playbooks
                    </>
                  }
                </Link>
              </li>
              <li onClick={closeNavbar}>
                <Link href="/brand-management"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-[#5D596C] duration-300 ease-in-out hover:bg-graydark ${pathname.includes('brand-management') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {sidebarOpen ?
                    <>
                      <TbBuilding className='text-2xl' />
                    </>
                    :
                    <>
                      <TbBuilding className='text-2xl' />
                      Brand Management
                    </>
                  }
                </Link>
              </li>
            </ul>

          </div>


          <div className='mt-[180px]'>
            <ul className="mb-6 flex flex-col gap-1.5 mx-4">
              <li onClick={closeNavbar}>
                <Link href="/settings"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-[#5D596C] duration-300 ease-in-out hover:bg-graydark ${pathname.includes('settings') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>

                  {sidebarOpen ?
                    <>
                      <TbSettings className='text-2xl' />
                    </>
                    :
                    <>
                      <TbSettings className='text-2xl' />
                      Settings
                    </>
                  }
                </Link>
              </li>
            </ul>
            <div className='border border-[#6F6B7D] rounded-[11px] px-2.5 py-2.5 flex items-center gap-4'>
              <div>
                <Image src={userFace} alt="userFace" className='w-[34px]' />
              </div>
              <p className='text-[14px] leading-[35px] font-semibold text-[#5D596C]'>Naman P.</p>
            </div>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  )
}

export default Sidebar