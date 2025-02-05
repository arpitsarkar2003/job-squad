import React from 'react';
import { motion } from 'framer-motion';
import SearchBarApp from '@/components/SearchBarApp';

const JobBanner = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <motion.div
            className="w-full max-w-6xl mx-auto min-h-[300px] md:px-8 lg:px-16 py-8 md:py-12 relative overflow-hidden rounded-lg"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className=''>
                {/* Left illustration */}
                <motion.div
                    className="hidden md:block absolute left-0 bottom-0"
                    variants={itemVariants}
                >
                    <div className="relative w-48 h-48">
                        <div className="absolute bottom-0 left-0">
                            <motion.img
                                src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/right-job-head.20bf0a8a.svg"
                                alt="Left illustration"
                                className="w-48 h-48 object-contain"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right illustration */}
                <motion.div
                    className="hidden md:block absolute right-0 bottom-0"
                    variants={itemVariants}
                >
                    <div className="relative w-48 h-48">
                        <div className="absolute top-0 right-0">
                            <motion.img
                                src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/left-job-head.15bb41c5.svg"
                                alt="Right illustration"
                                className="w-48 h-48 object-contain"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    className="max-w-4xl mx-auto text-center space-y-6"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-2xl md:text-4xl font-bold text-gray-900"
                        variants={itemVariants}
                    >
                        <motion.span className="text-primary-dark">22 Jobs</motion.span> Available Now
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Vero repellendus magni, atque delectus molestias quis?
                    </motion.p>

                    <motion.div
                        className="w-full max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        <SearchBarApp />
                    </motion.div>
                </motion.div>
            </div>

        </motion.div>
    );
};

export default JobBanner;