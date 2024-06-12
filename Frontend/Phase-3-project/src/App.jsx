import React from 'react'

import { BrowserRouter,Route,Link,Routes,NavLink } from "react-router-dom";
import HomePage from './Components/HomePage';
// import AboutUs from './Components/AboutUs';
import DogBreeds from './Components/DogBreeds';

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <div className='flex flex-row-reverse space-x-4 space-x-reverse mr-16 mt-8 mb-4' id='links'>
        <NavLink to={"/dogbreeds"}>Dog Breeds</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        </div>
      </nav>
    </header>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="dogbreeds" element={<DogBreeds/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App