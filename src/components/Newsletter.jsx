import React from 'react';
import Spring from './Spring.jsx';
const Newsletter = () => {
  return (
    <div id='newsletter' className='scroll-smooth w-full py-16 text-white px-4'>
        <Spring/>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 h-fit '>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-first sm:items-center justify-start w-full sm:gap-4'>
            <input
              className='bg-white p-3 flex w-[200px] max-w-[300px] rounded-md text-black '
              type='email'
              placeholder='Enter Email'
            />
            <button className='cursor-pointer bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <a href="" className='cursor-pointer underline text-[#00df9a]'>Privacy Policy.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;