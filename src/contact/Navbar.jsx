import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <Logo isScrolled={isScrolled} />
      {/* Add your navigation items here */}
    </div>
  );
}

function Logo({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
    
      {isScrolled ? (
      <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#fff] overflow-x-hidden shadow-md md:py-2 scroll-smooth border-opacity-40 border-b border-[#26C774]">
        <div onClick={handleScrollToTop} className="mx-auto items-center overflow-x-hidden duration-500">
          <div className="flex items-center">
            <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
              <div className="flex-shrink-0 py-2 items-center duration-500">
                <a href="/">
                  <img width={140} className='hidden md:block lg:block items-center duration-500' src='./color-logo.png' alt='favicon.png'/>
                  <img width={140} className='block md:hidden lg:hidden items-center duration-500' src='./color-logo.png' alt='favicon.png'/>
                </a>
              </div>
              <div className="hidden lg:block w-full duration-500 scroll-smooth">
                <div className="items-center flex duration-500 justify-end mx-auto gap-x-10">
                  <div className='flex pl-8 items-center'>
                    <a
                      href="#home"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#26C774] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row text-[#000] tracking-wide"
                    >
                      Home
                    </a>
                  </div>
                  <div>
                    <a 
                      href="/quote" className="items-center text-base md:hover:border-b bg-[#26C774] border-[#26C774] relative h-8 pt-0.5 duration-200 md:px-4 rounded-lg px-4 flex justify-center flex-row text-[#000] tracking-wide">
                      Request a quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="py-3 inline-flex items-center justify-center duration-500 rounded-md text-[#000]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden w-full pb-10 mt-3 bg-[#fff] text-black" id="mobile-menu">
              <div ref={ref} className="mx-auto z-10 px-5 flex flex-col">
              <a
                  href="#home"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Home
                </a>
                <a
                  target="_blank"
                  href="" 
                  className="text-black tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#000] border-opacity-10 font-bold text-sm" 
                  rel="noreferrer">Twitter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current stroke-current h-7 w-7"
                    viewBox="0 0 50 50"
                    >
                    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="" 
                  className="text-black tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#000] border-opacity-10 font-bold text-sm" 
                  rel="noreferrer">LindedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-current stroke-current h-7 w-7"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="" 
                  className="text-black tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#000] border-opacity-10 font-bold text-sm" 
                  rel="noreferrer">Office Address
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="19.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                      fill="#fff" stroke="none">
                      <path d="M492 989 c-18 -5 -50 -27 -72 -49 -80 -80 -78 -185 5 -350 37 -73
                        120 -190 135 -190 15 0 84 97 128 180 98 183 92 314 -18 386 -43 29 -125 39
                        -178 23z m123 -154 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
                        80 80 19 0 40 -9 55 -25z"
                      />
                      <path d="M5 867 c-3 -6 -4 -176 -3 -376 l3 -364 129 -65 130 -65 120 60 119
                      60 129 -60 128 -59 117 64 118 63 3 369 c1 218 -2 374 -7 379 -6 6 -44 -9 -99
                      -39 l-90 -48 -11 -56 c-14 -71 -67 -181 -133 -276 -56 -81 -78 -99 -113 -90
                      -52 13 -193 251 -216 365 l-11 60 -28 -14 c-27 -14 -34 -12 -148 45 -66 33
                      -123 60 -126 60 -4 0 -9 -6 -11 -13z"/>
                    </g>
                  </svg>
                </a>
                <div className=''>
                <a 
                  href="/quote" className="text-[#000] hover:bg-[#26C774] hover:text-black border border-[#26C774] mx-auto items-center relative h-10 mt-8 tracking-wider duration-200 px-4 w-full justify-center text-center flex rounded-sm">
                    Request a quote
                 </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </header>
      ) : (
        <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#fff] overflow-x-hidden shadow-md md:py-2 scroll-smooth border-opacity-40 border-b border-[#26C774]">
        <div onClick={handleScrollToTop} className="mx-auto items-center overflow-x-hidden duration-500">
          <div className="flex items-center">
            <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
              <div className="flex-shrink-0 py-2 items-center duration-500">
                <a href="/">
                  <img width={190} className='hidden md:block lg:block items-center duration-500' src='./color-logo.png' alt='favicon.png'/>
                  <img width={140} className='block md:hidden lg:hidden items-center duration-500' src='./color-logo.png' alt='favicon.png'/>
                </a>
              </div>
              <div className="hidden lg:block w-full duration-500 scroll-smooth">
                <div className="items-center flex duration-500 justify-end mx-auto gap-x-10">
                  <div className='flex pl-8 items-center'>
                    <a
                      href="#home"
                      className="
                      
                      items-center text-base md:hover:border-b border-[#26C774] relative h-8 pt-0.5 duration-200 lg:px-4 md:px-2 px-4 flex justify-center flex-row text-[#000] tracking-wide"
                    >
                      Home
                    </a>
                  </div>
                  <div>
                    <a 
                      href="/quote" className="items-center text-base md:hover:border-b bg-[#26C774] border-[#26C774] relative h-8 pt-0.5 duration-200 md:px-4 rounded-lg px-4 flex justify-center flex-row text-[#000] tracking-wide">
                      Request a quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="py-3 inline-flex items-center justify-center duration-500 rounded-md text-[#000]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 duration-500 font-light"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden w-full pb-10 mt-3 bg-[#fff] text-black" id="mobile-menu">
              <div ref={ref} className="mx-auto z-10 px-5 flex flex-col">
              <a
                  href="#home"
                  className="
                  tracking-wider py-3 flex flex-row items-center justify-between duration-200 border-b border-[#000] border-opacity-10 text-sm font-bold"
                >
                  Home
                </a>
                <a
                  target="_blank"
                  href="" 
                  className="text-black tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#000] border-opacity-10 font-bold text-sm" 
                  rel="noreferrer">Twitter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current stroke-current h-7 w-7"
                    viewBox="0 0 50 50"
                    >
                    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="" 
                  className="text-black tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#000] border-opacity-10 font-bold text-sm" 
                  rel="noreferrer">LindedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-current stroke-current h-7 w-7"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="" 
                  className="text-black tracking-widest py-3 flex flex-row duration-200 justify-between items-center border-b border-[#000] border-opacity-10 font-bold text-sm" 
                  rel="noreferrer">Office Address
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="19.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                      fill="#fff" stroke="none">
                      <path d="M492 989 c-18 -5 -50 -27 -72 -49 -80 -80 -78 -185 5 -350 37 -73
                        120 -190 135 -190 15 0 84 97 128 180 98 183 92 314 -18 386 -43 29 -125 39
                        -178 23z m123 -154 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
                        80 80 19 0 40 -9 55 -25z"
                      />
                      <path d="M5 867 c-3 -6 -4 -176 -3 -376 l3 -364 129 -65 130 -65 120 60 119
                      60 129 -60 128 -59 117 64 118 63 3 369 c1 218 -2 374 -7 379 -6 6 -44 -9 -99
                      -39 l-90 -48 -11 -56 c-14 -71 -67 -181 -133 -276 -56 -81 -78 -99 -113 -90
                      -52 13 -193 251 -216 365 l-11 60 -28 -14 c-27 -14 -34 -12 -148 45 -66 33
                      -123 60 -126 60 -4 0 -9 -6 -11 -13z"/>
                    </g>
                  </svg>
                </a>
                <div className=''>
                <a 
                  href="/quote" className="text-[#000] hover:bg-[#26C774] hover:text-black border border-[#26C774] mx-auto items-center relative h-10 mt-8 tracking-wider duration-200 px-4 w-full justify-center text-center flex rounded-sm">
                    Request a quote
                 </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </header>
      )}
    </>
  )};
export default Navbar;
