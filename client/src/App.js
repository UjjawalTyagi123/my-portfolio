import React from "react";
import Header from "./components/header/Header"
import Projects from "./components/projects/projects";
import About from "./components/about/About"
import Contact from "./components/contact/contact"
import Contacts from "./components/contact/contacts"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Practise from "./practise/practise";
import Home from "./components/home/Home";
import Blogs from "./components/blogs/Blogs";



const App=()=>{
return(
  <div>
  {/* <Practise/> */}
 
  <Router>
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Projects" element={<Projects/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contacts" element={<Contacts/>}/>
  <Route path="/blogs" element={<Blogs/>}/>
  </Routes>
  </Router>
  </div>
)
}

export default App