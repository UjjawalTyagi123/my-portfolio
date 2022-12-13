import React from "react";
import Header from "./components/header/Header";
import Projects from "./components/projects/projects";
import About from "./components/about/About";
import Contacts from "./components/contact/contacts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contacts />
    </div>
  );
};

export default App;
