import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom"; // Use 'useNavigate' for navigation
import { Menu, X, ChevronDown } from "lucide-react";
import Cookies from 'js-cookie'; // Assuming token is stored in cookies
import { useLogoutMutation } from "@/services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { jobData } from "@/pages/Jobs/jobs-data";

const Navbar = () => {
  const navigate = useNavigate();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutt] = useLogoutMutation();
  const dispatch=useDispatch();


  const extractUniqueIndustries = () => {
    return Array.from(new Set(jobData.map((job) => job.industry))).slice(0, 6);
  };

  const extractUniqueLocations = () => {
    return Array.from(new Set(jobData.map((job) => job.location))).slice(0, 6);
  };

  const handleSearchRedirect = (type, value) => {
    const params = new URLSearchParams();
    params.set(type, value);
    navigate(`/jobs?${params.toString()}`);
  };


  const menuItems = [
    { label: "Home", link: "/" },
    {
      label: "Find a Job",
      dropdown: [
        {
          title: "Popular Categories",
          items: extractUniqueIndustries().map((industry) => ({
            label: industry,
            action: () => handleSearchRedirect("industries", industry),
          })),
        },
        {
          title: "By Location",
          items: extractUniqueLocations().map((location) => ({
            label: location,
            action: () => handleSearchRedirect("location", location),
          })),
        },
      ],
    },
    {
      label: "Candidates",
      dropdown: [
        {
          title: "Career Tools",
          items: [
            { label: "My Applications", link: "/candidates/applications" },
            { label: "Job Alerts", link: "/candidates/job-alerts" },
            { label: "Resume Builder", link: "/candidates/resume-builder" },
          ],
        },
        {
          title: "Resources",
          items: [
            { label: "Interview Tips", link: "/resources/interview-prep" },
            { label: "Salary Guide", link: "/resources/salary-guide" },
            { label: "Career Advice", link: "/blogs" },
          ],
        },
      ],
    },
    {
      label: "Companies",
      dropdown: [
        {
          title: "Explore",
          items: [
            { label: "Browse Companies", link: "/companies" },
            { label: "Top Companies", link: "/companies/top" },
            { label: "Company Reviews", link: "/companies/reviews" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      dropdown: [
        {
          title: "Guides & Help",
          items: [
            { label: "FAQ", link: "/faq" },
            { label: "Resume Writing", link: "/resources/resume-tips" },
            { label: "Privacy Policy", link: "/privacy-policy" },
          ],
        },
      ],
    },
    { label: "Blogs", link: "/blogs" }, // Moved Blogs here
    { label: "Contact", link: "/contact" },
  ];

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Handle login state based on token
  const { isAuthenticated} = useSelector((state) => state.auth);
  console.log(isAuthenticated)
  const handleLogout = async () => {
    try {
      await logoutt() // Ensure mutation completes successfully
      dispatch(logout());
      Cookies.remove('user')
      Cookies.remove('token')
       // Update Redux state
      navigate("/signin"); // Redirect to signin page

    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    // <nav
    //   className={`relative ${window.location.pathname !== "/" ? "bg-transparent" : "bg-primary-ultra/30"} w-full z-10`}
    // >
    <nav className="w-full" >
      <div className="container flex justify-between items-center py-4 w-full max-w-6xl mx-auto px-4 ">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary-light">
          <a href="/">JobSquad</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <div className="flex items-center cursor-pointer">
                {item.link ? (
                  <Link to={item.link} className="text-base font-medium hover:text-primary-ultra ">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-base font-medium hover:text-primary-ultra">{item.label}</span>
                )}
                {item.dropdown && <ChevronDown className="ml-2 w-4 h-4" />}
              </div>
              {item.dropdown && (
                <motion.div
                  className="absolute top-6 left-0 bg-base-white shadow-lg rounded-lg py-4 invisible group-hover:visible group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="grid grid-cols-2 gap-8 px-6 py-4 min-w-[400px] max-w-screen-lg">
                    {item.dropdown.map((section, sectionIdx) => (
                      <div key={sectionIdx}>
                        {section.title && (
                          <h3 className="font-bold text-primary-dark mb-2">{section.title}</h3>
                        )}
                        <ul>
                          {section.items.map((dropdownItem, idx) => (
                            <li key={idx}>
                              {dropdownItem.link ? (
                                <Link to={dropdownItem.link} className="text-sm hover:text-white hover:bg-grey-muted rounded-md px-2 py-1 block">
                                  {dropdownItem.label}
                                </Link>
                              ) : (
                                <span onClick={dropdownItem.action} className="text-sm hover:text-white hover:bg-grey-muted rounded-md px-2 py-1 block cursor-pointer">
                                  {dropdownItem.label}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {isAuthenticated ? (
            <Button onClick={handleLogout} className="bg-primary-light text-white hover:bg-primary-dark">
              Logout
            </Button>
          ) : (
            <>
              <Link to="/register">
                <Button variant="transparent" className="">
                  Register
                </Button>
              </Link>
              <Link to="/signin">
                <Button className="bg-primary-light text-white hover:bg-primary-dark">
                  Sign in
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        {!isMobileMenuOpen && (
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-primary-light">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-0 left-0 h-screen bg-base-white rounded-tr-3xl shadow-lg z-20"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ width: "75%" }}
        >
          <div className="flex flex-col space-y-4 px-6 py-4 z-20">
            <div className="lg:hidden flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-primary-light">
                JobSquad
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-2xl text-primary-light"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
            {menuItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleMobileDropdown(index)}
                >
                  {item.link ? (
                    <Link
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-lg font-medium hover:text-primary-ultra"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-lg font-medium">{item.label}</span>
                  )}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </div>
                {item.dropdown && mobileDropdownOpen[index] && (
                  <ul className="pl-4 mt-2">
                    {item.dropdown.map((section, sectionIdx) =>
                      section.items.map((nestedItem, nestedIdx) => (
                        <li key={nestedIdx}>
                          <Link
                            to={nestedItem.link}
                            className="text-gray-700 hover:text-primary-ultra hover:bg-grey-muted rounded-md px-2 py-1 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {nestedItem.label}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>
            ))}
            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-4 mt-4">
              {isAuthenticated ? (
                <>
                <h1>Welcome {user.firstName}</h1>
                <button onClick={handleLogout} className="bg-primary-light text-white hover:bg-primary-dark">
                  Logout
                </button>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <Button
                      variant="a"
                      className="underline hover:border-primary-dark hover:no-underline border"
                    >
                      Register
                    </Button>
                  </Link>
                  <Link to="/signin">
                    <Button className="bg-primary-light text-white hover:bg-primary-dark">
                      Sign in
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
