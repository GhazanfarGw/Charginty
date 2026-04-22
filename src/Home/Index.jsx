import React from 'react'
import Navbar from '../header&footer&loader/Navbar'
import Dashboard from './Dashboard'
import About from './About'
import Footer from '../header&footer&loader/Footer'
import Choose from './Choose'

export default function Index() {
  return (
    <>
        <Navbar/>
        <div className='w-full justify-center mx-auto overflow-hidden'>
            <Dashboard/>
            <About/>
            <Choose/>
            <Footer/>
        </div>
    </>
    
  )
}