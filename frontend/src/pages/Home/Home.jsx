import React from 'react';
import { useNavigate } from 'react-router-dom';
import SlidingBanner from "./components/SlidingBanner";
import JobsOfTheDay from "./components/JobsOfTheDay";
import { companies } from "./Home-Data";
import { useGetJobs } from '@/hooks/useGetJobs';
import { jobData } from "@/assets/Jobs_Data/jobs-data";
import { Building2 } from 'lucide-react';
import JobMatchHero from "@/pages/Home/components/Banner1";
import HiringBanner from "@/pages/Home/components/Hiring";
import ExploreMarketplace from "@/pages/Home/components/Marketplace";
import NewsletterSection from "@/pages/Home/components/Newletter";
import TopRecruiters from "@/pages/Home/components/Recrut";
import Hero from "@/pages/Home/components/Hero";
import FAQSection from "./components/Faq";
import StatsSection from "./components/StatsSection";
import RecruiterChoiceCard from "./components/AreyouRecuiter";
import JobPostingBanner from "./components/JobPostingBanner";

const HomePage = () => {
  const navigate = useNavigate();
  const { getJobIndustries } = useGetJobs();

  // Count jobs by industry
  const getIndustryJobCount = (industry) => {
    return jobData.filter(job => job.industry === industry).length;
  };

  // Handle industry click
  const handleIndustryClick = (industry) => {
    const encodedIndustry = encodeURIComponent(industry);
    navigate(`/jobs?industries=${encodedIndustry}`);
  };

  // Transform industries into the format expected by SlidingBanner
  const industryCategories = getJobIndustries().map(industry => ({
    title: industry,
    subtitle: `${getIndustryJobCount(industry)} jobs available`,
    icon: Building2,
    onClick: () => handleIndustryClick(industry)
  }));

  return (
    <div className="">
      <Hero />

      <div>
        <JobPostingBanner />
      </div>

      <div className="py-16">
        <SlidingBanner
          title="Browse by category"
          subtitle="Find the job that's perfect for you. about 800+ new jobs everyday"
          items={industryCategories}
          isVerticalCard={true}
        />
      </div>

      <div>
        <HiringBanner />
      </div>

      <div className="py-16">
        <SlidingBanner
          title="Top companies hiring now"
          items={companies}
          isVerticalCard={false}
        />
      </div>

      <div>
        <StatsSection />
      </div>

      <div className="py-16">
        <ExploreMarketplace />
      </div>

      <div>
        <JobsOfTheDay />
      </div>

      <div className="py-16">
        <TopRecruiters />
      </div>

      <div>
        <JobMatchHero />
      </div>

      <RecruiterChoiceCard />

      <div>
        <FAQSection />
      </div>

      <div className="py-16">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default HomePage;