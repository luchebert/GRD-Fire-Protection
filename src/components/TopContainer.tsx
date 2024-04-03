"use client";
import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import ContactUs from "./ContactUs";
import Social from "./Social";
import Carousel from "./Carousel";

const TopContainer = () => {
  return (
    <>
      <div className="flex space-x-4">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-1">
          <MainNav />
        </div>
        <div className="flex-1 text-center">
          <ContactUs />
        </div>
        <div className="flex-1">
          <Social />
        </div>
      </div>
    </>
  );
};

export default TopContainer;
