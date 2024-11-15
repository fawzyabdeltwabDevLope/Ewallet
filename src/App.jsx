
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './assets/Homepage';
import Aboutpage from './assets/Aboutpage';
import blogpage from './assets/blogpage';
import Ewallet from './assets/Ewallet';



export default function App() {
  return (
    <div>
{/* <nav>
<a href="./">Home</a>
  <a href="./about">About</a>
  <a href="./blog">Blog</a>
  
</nav> */}

      {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
     <Route path="/about" element={<Aboutpage />}></Route>
    <Route path="/blog" element={<h1>blogpage</h1>}></Route>
    <Route path="*" element={<h1>404 page</h1>}></Route>
  </Routes>
      </BrowserRouter> */}
 <Ewallet/>
</div>
  )
}

// react-router-dom