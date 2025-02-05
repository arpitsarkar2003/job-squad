import HeroImg1 from "@/assets/hero1.jpg";
import { useState } from "react";
import SearchBarApp from "@/components/SearchBarApp";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const popularSearches = ["Designer", "Web", "iOS", "Developer", "PHP", "Senior", "Engineer"];

  const handleSearchClick = (query) => {
    navigate(`/jobs?query=${query}`);
  };

  return (
    <div className="bg-primary-ultra/30 w-full pt-10">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between  py-20 gap-12 w-full max-w-6xl mx-auto px-4">
        {/* Left Content */}
        <div className="lg:w-[60%] space-y-12">
          <div className="lg:w-[75%]" >
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              The <span className="text-primary-light">Easiest Way</span> to Get Your
              New Job
            </h1>
            <p className="text-md text-grey-muted leading-relaxed">
              Each month, more than 3 million job seekers turn to our website in
              their search for work, making over 140,000 applications every single
              day.
            </p>
          </div>

          {/* Search Bar */}
          <div>
            <SearchBarApp />
          </div>

          {/* Popular Searches */}
          <div>
            <strong>Popular Searches:</strong>{" "}
            {popularSearches.map((search, index) => (
              <span
                key={index}
                className="text-primary-light underline cursor-pointer mx-1"
                onClick={() => handleSearchClick(search)}
              >
                {search}
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="lg:w-[35%] flex flex-col lg:flex-row gap-4 items-center justify-center relative">
          <div
            className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden z-0 border-l-4 border-b-4 border-primary-light"
            style={{
              borderLeftWidth: "6px",
              borderBottomWidth: "6px",
              borderRadius: "50px 40px 8px 0",
            }}
          >
            <img
              src={HeroImg1}
              alt="Teamwork"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          <div
            className="hidden lg:block w-full max-w-[200px] bg-white shadow-lg rounded-lg overflow-hidden absolute -bottom-16 -right-16 z-1 transform translate-x-4 translate-y-4 border-l-4 border-b-4 border-primary-light"
            style={{
              borderLeftWidth: "6px",
              borderBottomWidth: "6px",
              borderRadius: "50px 40px 40px 0",
            }}
          >
            <img
              src={HeroImg1}
              alt="Collaboration"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
