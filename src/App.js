import { Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import Index from './Home/Index'
import Preloader from './header&footer&loader/Preloader'
import Quote from "./contact/contact-us";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Index/> } />
          <Route path="/quote" element={ <Quote/> } />
        </Routes>
      )}
    </>

  )
}

export default App
