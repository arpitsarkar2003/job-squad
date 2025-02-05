import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import img1 from '../image2.png'
import { Link } from 'react-router';
const JobMatchHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const waveVariants = {
    animate: (i) => ({
      x: [0, 16],
      opacity: [0.75, 0],
      transition: {
        x: {
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.3
        },
        opacity: {
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.3
        }
      }
    })
  };

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8 font-ubuntu font-bold">
      <motion.div 
        className="max-w-6xl mx-auto rounded-[32px] bg-primary-50/50 backdrop-blur-sm overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div 
              className="flex-1 text-center md:text-left"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                Get Your
                <br />
                Matched Jobs in
                <br />
                <span className="text-primary-light">a Few Minutes</span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 mb-8 text-lg md:text-xl"
                variants={itemVariants}
              >
                Find your dream job! Level up your job search,
                <br className="hidden md:block" />
                browse over <span className="font-semibold">125,000+ jobs</span>
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to='/upload-cv'>
                <Button
                  size="lg"
                  className="bg-primary-light hover:bg-primary-700 text-white rounded-full px-8 h-12 md:h-14 text-base md:text-lg font-medium"
                >
                  Upload Your CV 
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="flex-1 relative"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.img
                  src={img1}
                  alt="Job seeker"
                  className="w-full h-auto rounded-3xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Decorative Wave Elements */}
                {/* <div className="absolute -left-4 top-1/4">
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="absolute left-0 w-3 h-3 bg-primary-500 rounded-full"
                      custom={index}
                      variants={waveVariants}
                      animate="animate"
                    />
                  ))}
                </div> */}

                {/* Decorative Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-600/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JobMatchHero;