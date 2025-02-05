import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import img from "../Home/image2.png";
import img2 from "../Home/image.png";
import HowItWorks from "./HowItWorks";
import WhoLoveUs from "./WhoLoveUs";
import AboutBanner from "./AboutBanner";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0">
          <img
            src={img2}
            alt="Office space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white opacity-80"></div>
        </div>
        <div className="relative flex items-center justify-start pl-10 h-full max-w-6xl">
          <div className="max-w-6xl">
            <h1 className="text-4xl font-bold text-black font-ubuntu">
              About Us
            </h1>
            <h2 className="text-black pt-3">
              Get latest Updates and News Here
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-grey-muted font-ubuntu opacity-15">OUR COMPANY</h2>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 font-ubuntu ">About Our Company</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-lato font-normal">
            Connect with over 80,000 expert freelancers and talented
            professionals on our platform. We help businesses find the perfect
            match for their project needs.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center font-lato font-normal">
            <div className="w-full md:w-1/2">
              <img
                src={img}
                alt="Team collaboration"
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Get over 80,000 expert & talented freelancers in Hi!Jobs
                platform.
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">Superior sourcing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    Fast tax & support for your projects
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    Professional payment experts
                  </span>
                </li>
              </ul>
              <Button className="bg-primary-light hover:bg-primary-dark text-white px-6">
                Learn More
              </Button>

              <div className="flex items-center gap-2 mt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-white">
                      <AvatarImage src={`/api/placeholder/40/40`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-gray-600">+76 users</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How it Works */}
      <HowItWorks />

      {/* Who Love Us */}
      <WhoLoveUs />

      {/* About Banner */}
      <AboutBanner />
    </div>
  );
};

export default AboutUs;
