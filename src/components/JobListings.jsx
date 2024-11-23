import { Jobs } from '../lib/constants';
import { useFilterStore } from '../store';
import Filter from './Filter';
import JobCard from './JobCard';

export default function JobListings() {
  const filters = useFilterStore((state) => state.filters);

  const filterJobsByTags = (jobs, tags) => {
    return jobs.filter((job) => {
      // Combine relevant fields into a single array
      const jobTags = [job.role, job.level, ...job.tools, ...job.languages];
      // Check if every tag in the filter exists in the combined array
      return tags.every((tag) => jobTags.includes(tag));
    });
  };

  const filteredJobs = filterJobsByTags(Jobs, filters);

  return (
    <div className='container px-16 max-xl:px-8 max-md:px-6 max-sm:px-4'>
      <Filter />
      <div className='pt-12 max-md:pt-16 max-sm:pt-14 pb-16 space-y-8 max-md:space-y-[70px] max-sm:space-y-14'>
        {(filters.length ? filteredJobs : Jobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
