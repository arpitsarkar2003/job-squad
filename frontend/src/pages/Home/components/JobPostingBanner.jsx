import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Briefcase, PlusCircle, Target, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const JobPostingBanner = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user?.role !== 'company') return null;

  const handlePostJob = () => {
    navigate('/dashboard/company/post-job');
  };

  return (
    <div className="relative container mx-auto px-4 my-6 lg:my-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-gradient-to-br from-primary-ultra/10 to-primary-light/10 
        border-2 border-primary-light/20 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl"
      >
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-primary-dark/20 opacity-10 blur-3xl"></div>

        <div className="relative z-20 flex flex-col lg:grid lg:grid-cols-12 gap-6 p-4 md:p-6 lg:p-8 items-center">
          {/* Icon and Dynamic Background */}
          <div className="w-full lg:col-span-2 flex items-center justify-center mb-4 lg:mb-0">
            <div className="relative">
              <motion.div 
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className="absolute -inset-4 bg-primary-light/10 rounded-full blur-xl"
              ></motion.div>
              <Briefcase 
                className="relative text-primary-light w-16 h-16 lg:w-20 lg:h-20 
                bg-primary-light/20 rounded-full p-4 shadow-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:col-span-7 space-y-3 lg:space-y-4 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark flex flex-col lg:flex-row items-center gap-2 lg:gap-3 justify-center lg:justify-start">
              <Target className="text-primary-light w-8 h-8 lg:w-10 lg:h-10" />
              Elevate Your Hiring Strategy
            </h2>
            <p className="text-primary-black/80 text-base lg:text-lg leading-relaxed">
              Transform your recruitment process with our precision-driven platform. 
              Connect with top-tier talent that aligns perfectly with your company's 
              vision and growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-primary-dark/70 text-sm lg:text-base">
              <div className="flex items-center">
                <Rocket className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-primary-light" />
                <span>Fast Hiring</span>
              </div>
              <div className="flex items-center">
                <PlusCircle className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-primary-light" />
                <span>Quality Candidates</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="w-full lg:col-span-3 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                onClick={handlePostJob}
                className="w-full sm:w-auto bg-primary-light hover:bg-primary-dark 
                transition-all duration-300 group flex items-center justify-center
                text-lg lg:text-xl font-semibold text-white px-6 lg:px-8 py-3 lg:py-4 
                rounded-xl shadow-lg hover:shadow-2xl space-x-3"
              >
                <PlusCircle className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-45 transition-transform" />
                <span>Post a Job</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-primary-light/10 rounded-full -mr-12 lg:-mr-16 -mt-12 lg:-mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 lg:w-48 h-32 lg:h-48 bg-primary-dark/10 rounded-full -ml-16 lg:-ml-24 -mb-16 lg:-mb-24 blur-2xl"></div>
      </motion.div>
    </div>
  );
};

export default JobPostingBanner;