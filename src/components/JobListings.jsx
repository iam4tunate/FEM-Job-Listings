import { Jobs } from '../lib/constants';
import Filter from './Filter';
import JobCard from './JobCard';

export default function JobListings() {
  return (
    <div className='container px-16 max-xl:px-8 max-md:px-6 max-sm:px-4'>
      <Filter />
      <div className='pt-12 max-md:pt-16 max-sm:pt-14 pb-16 space-y-8 max-md:space-y-[70px] max-sm:space-y-14'>
        {Jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
