import React from 'react'

export default function Art() {
  return (
    <>
        <div className='duration-500 herosection'>
            <div className='mx-auto justify-center overflow-hidden px-5 text-center align-middle md:py-80 py-40'>
                <div className='text-white'>
                    <div className='text-center mx-auto max-w-screen-lg'>
                        <h1 className='second md:text-5xl text-4xl tracking-wider duration-500'>
                            Empowering Every Journey with Fast and Ultra-Fast Charging Solutions
                        </h1>
                        <p className='second font-sans text-xl pt-3 tracking-widest text-[#26C774]'>
                            CHARGINITY
                        </p>
                    </div>
                    <div className='third md:pt-5 pt-5 pb-5 md:pb-0 md:text-2xl text-lg tracking-wider max-w-screen-lg justify-center text-center mx-auto duration-500'>
                        <div className='five border-[#fff] border-l-2 mx-auto items-center relative md:h-32 h-16 md:my-3 my-5 w-0 justify-center text-center flex rounded-sm'/>
                        <a 
                            href="#about" className="fourth text-[#fff] md:text-base text-xs font-semibold scroll-smooth duration-500 hover:border-[#26C774] hover:text-[#26C774] border-transparent border mx-auto items-center relative h-10 tracking-wider uppercase px-4 w-full max-w-xs justify-center text-center flex rounded-sm">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}