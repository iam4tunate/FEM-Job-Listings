import { useFilterStore } from '../store';

export default function JobCard({ job }) {
  const { featured, role, level, languages, tools } = job;
  const tags = [role, level, ...tools, ...languages];

  const addFilterItem = useFilterStore((state) => state.addItem);

  return (
    <div
      className={`bg-white flex max-lg:flex-col items-center max-lg:items-stretch justify-between gap-x-16 px-14 py-8 max-md:pt-0 max-lg:gap-x-8 max-xl:px-8 max-md:px-6 max-sm:px-4 rounded-md drop-shadow-xl ${
        featured && 'border-l-[5px] border-desaturatedDarkCyan'
      }`}>
      <div className='flex max-md:flex-col items-center max-md:items-start gap-x-6'>
        <img
          src={job.logo}
          alt=''
          className='w-[88px] h-[88px] max-sm:w-[48px] max-sm:h-[48px] object-cover max-md:-translate-y-9 max-sm:-translate-y-5 max-md:-mb-9 max-sm:-mb-5'
        />
        <div className='max-md:pt-5 max-sm:pt-2'>
          <div className='flex items-center gap-x-5'>
            <div className='text-lg max-md:text-[13px] text-desaturatedDarkCyan font-bold'>
              {job.company}
            </div>
            <div className='flex items-center gap-x-2'>
              {job.new && (
                <span className='uppercase text-sm font-bold bg-desaturatedDarkCyan text-white rounded-full px-2 py-[2px]'>
                  new!
                </span>
              )}
              {featured && (
                <span className='uppercase text-sm font-bold bg-varyDarkGrayishCyan text-white rounded-full px-2 py-[2px]'>
                  featured
                </span>
              )}
            </div>
          </div>
          <div className='pt-2.5 pb-1.5 text-[22px] max-sm:text-[15px] font-bold text-varyDarkGrayishCyan hover:text-desaturatedDarkCyan cursor-pointer'>
            {job.position}
          </div>
          <div className='text-lg max-sm:text-base text-darkGrayishCyan flex flex-wrap items-center gap-x-4 max-md:gap-x-3'>
            <span>{job.postedAt}</span>
            <div className='bg-darkGrayishCyan rounded-full h-1 w-1' />
            <span>{job.contract}</span>
            <div className='bg-darkGrayishCyan rounded-full h-1 w-1' />
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className='lg:hidden my-8 max-md:my-6 max-sm:my-4 h-[1px] bg-darkGrayishCyan bg-opacity-50' />
      <div className='text-desaturatedDarkCyan text-lg max-sm:text-base flex flex-wrap justify-end max-lg:justify-start gap-x-4 gap-y-2 items-center ml-auto max-lg:ml-0'>
        {tags.map((tag, i) => (
          <span
            key={i}
            onClick={() => addFilterItem(tag)}
            className='bg-desaturatedDarkCyan hover:bg-opacity-100 hover:text-white bg-opacity-15 h-[32px] flex items-center px-2 rounded cursor-pointer'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
