import { jobData } from "@/assets/Jobs_Data/jobs-data";

export const useGetJobs = () => {
    const getJobIndustries = () => {
        return Array.from(new Set(jobData.map((job) => job.industry)));
      };
    
      const getJobLocations = () => {
        return Array.from(new Set(jobData.map((job) => job.location)));
      };

    return {getJobIndustries, getJobLocations}
}