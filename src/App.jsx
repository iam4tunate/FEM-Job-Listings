import JobListings from './components/JobListings';

const App = () => {
  return (
    <div className='text-7xl text-blue-500 font-spartan'>
      <div className='bg-desaturatedDarkCyan h-[156px]'>
        <img
          src='/images/bg-header-desktop.svg'
          alt=''
          className='w-full h-full max-md:hidden'
        />
        <img
          src='/images/bg-header-mobile.svg'
          alt=''
          className='w-full h-full md:hidden'
        />
      </div>
      <JobListings />
    </div>
  );
};
export default App;
