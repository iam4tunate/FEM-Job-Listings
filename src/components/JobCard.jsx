export default function JobCard({ job }) {
  console.log(job);
  return (
    <div className='bg-white flex max-lg:flex-col items-center max-lg:items-stretch justify-between gap-x-16 px-14 py-8 max-md:pt-0 max-lg:gap-x-8 max-xl:px-8 max-md:px-6 max-sm:px-4 rounded-md drop-shadow-xl'>
      <div className='flex max-md:flex-col items-center max-md:items-start gap-x-6'>
        <img
          src={job.logo}
          alt=''
          className='w-[88px] h-[88px] max-sm:w-[48px] max-sm:h-[48px] object-cover max-md:-translate-y-9 max-sm:-translate-y-5 max-md:-mb-9 max-sm:-mb-5'
        />
        <div className='space-y-1 max-md:space-y-2.5 max-sm:space-y-1.5 max-md:pt-5 max-sm:pt-2'>
          <div className='text-lg max-md:text-[13px] text-desaturatedDarkCyan font-bold'>
            {job.company}
          </div>
          <div className='text-[22px] max-sm:text-[15px] font-bold text-varyDarkGrayishCyan hover:text-desaturatedDarkCyan cursor-pointer'>
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
        <span className='bg-desaturatedDarkCyan hover:bg-opacity-100 hover:text-white bg-opacity-15 h-[32px] flex items-center px-2 rounded cursor-pointer'>
          {job.role}
        </span>
        <span className='bg-desaturatedDarkCyan hover:bg-opacity-100 hover:text-white bg-opacity-15 h-[32px] flex items-center px-2 rounded cursor-pointer'>
          {job.level}
        </span>
        {job.tools.map((tool, i) => (
          <span
            key={i}
            className='bg-desaturatedDarkCyan hover:bg-opacity-100 hover:text-white bg-opacity-15 h-[32px] flex items-center px-2 rounded cursor-pointer'>
            {tool}
          </span>
        ))}
        {job.languages.map((language, i) => (
          <span
            key={i}
            className='bg-desaturatedDarkCyan hover:bg-opacity-100 hover:text-white bg-opacity-15 h-[32px] flex items-center px-2 rounded cursor-pointer'>
            {language}
          </span>
        ))}
      </div>
    </div>
  );
}
