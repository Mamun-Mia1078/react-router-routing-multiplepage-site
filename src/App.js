import {BrowserRouter, Route, Routes} from "react-router-dom";

import Blog from "./Pages/Blog";
import Blogs from "./Pages/Blogs";
import CSS from  "./components/App.css"
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import React from "react"

function App(){

  
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path ="/blogs" element = {<Blogs/>} />

      <Route path ="/blogs/:title" element = {<Blog/>} />

      <Route path ="/" element = {<Home/>} />
      <Route path ="/home" element = {<Home/>} />
      <Route path ="/contact" element = {<Contact/>} />
      <Route path ="*" element = {<Error/>} />

      

    </Routes>
    </BrowserRouter>
  )
}
export default App;
