import { FaTimes } from 'react-icons/fa';

export default function Filter() {
  return (
    <div className='-translate-y-8 -mb-8 min-h-[72px] py-4 bg-white rounded-md px-14 max-xl:px-8 max-md:px-6 max-sm:px-4 flex gap-x-4 items-center justify-between drop-shadow-xl'>
      <div className='flex flex-wrap items-center gap-4'>
        <div className='h-[32px] flex items-center justify-center'>
          <span className='inline-flex items-center text-base text-desaturatedDarkCyan bg-desaturatedDarkCyan bg-opacity-15 px-2 h-full rounded-l'>
            Frontend
          </span>
          <span className='inline-flex items-center bg-desaturatedDarkCyan text-lg h-full rounded-r px-2 cursor-pointer hover:bg-varyDarkGrayishCyan'>
            <FaTimes className='text-white' />
          </span>
        </div>
        <div className='h-[32px] flex items-center justify-center'>
          <span className='inline-flex items-center text-base text-desaturatedDarkCyan bg-desaturatedDarkCyan bg-opacity-15 px-2 h-full rounded-l'>
            Frontend
          </span>
          <span className='inline-flex items-center bg-desaturatedDarkCyan text-lg h-full rounded-r px-2 cursor-pointer hover:bg-varyDarkGrayishCyan'>
            <FaTimes className='text-white' />
          </span>
        </div>
      </div>
      <div className=''>
        <p className='text-base text-varyDarkGrayishCyan hover:text-desaturatedDarkCyan cursor-pointer font-bold'>
          Clear
        </p>
      </div>
    </div>
  );
}
