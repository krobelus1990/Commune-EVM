import React from 'react';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import homepageLogo from '../../assets/images/commune.gif';
import Switcher from '../../switcher';
const HomePage = () => {
  const navigate = useNavigate();
  const OpenDashboard = () => {
    navigate('/app/dashboard/default');
  };
  return (
    <React.Fragment>
      <div id='home' className='tw-w-full tw-z-[2] dark:tw-bg-[rgb(18,18,18)] tw-transition-all tw-h-screen'>
        <div className='tw-flex tw-justify-center tw-items-center tw-h-full'>
          <div className=' tw-absolute tw-top-[50px] sm:tw-right-[200px] tw-right-[50px]'>
            <Switcher />
          </div>
          <div className='tw-w-full tw-mx-auto main-visual tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-h-full'>
            <div className='tw-w-full tw-flex tw-flex-row tw-items-center tw-justify-center main-visual tw-mt-[-100px]'>
              <div className='sm:tw-w-[50%] tw-w-[90%]'>
                <Fade right cascade>
                  <div className='tw-pt-[0px] tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-2'>
                    <h1
                      className=' tw-text-[2rem] tw-w-full sm:tw-text-[3rem] tw-pb-3 dark:tw-text-white tw-text-center'
                      style={{ fontFamily: 'Smack' }}
                    >
                      Welcome to the{' '}
                      <span className='tw-text-[#ffb4ed] dark:tw-text-[#FFD6F5] hover:tw-animate-pulse tw-duration-500'>commune</span>!
                    </h1>
                    <p className='hero__subtitle sm:tw-text-2xl tw-text-xl tw-text-center dark:tw-text-white'>
                      The most <span className='tw-text-[#ffb4ed] dark:tw-text-[#FFD6F5]'>popular</span>{' '}
                      <span className='tw-text-[#6db1ff] dark:text-[#6db1ff]'>smart</span>{' '}
                      <span className='tw-text-[#FF8F8F]  dark:tw-text-[#FF8F8F]'>contracts</span> on{' '}
                      <span className='tw-text-[#ffef40] dark:tw-text-[#FFF7A1]'>evm</span>.
                    </p>
                    <button
                      onClick={OpenDashboard}
                      className='relative tw-transition-all inline-flex items-center px-12 tw-py-3 tw-mt-[50px] tw-overflow-hidden tw-text-lg tw-font-medium tw-text-indigo-600 tw-border-2 dark:tw-text-white tw-border-indigo-600 hover:tw-text-white dark:tw-border-white tw-rounded-full dark:hover:tw-text-[rgb(18,18,18)] tw-group hover:tw-bg-gray-50 dark:tw-bg-[rgb(18,18,18)]'
                    >
                      <span
                        className='tw-absolute tw-left-0 tw-block tw-w-full tw-h-0 tw-transition-all tw-bg-indigo-600 dark:tw-bg-white tw-opacity-100 group-hover:tw-h-full tw-top-1/2 group-hover:tw-top-0 tw-duration-400 tw-ease'
                        style={{}}
                      ></span>
                      <span className='tw-absolute tw-right-0 tw-flex tw-items-center tw-justify-start tw-w-10 tw-h-10 tw-duration-300 tw-transform tw-translate-x-full group-hover:tw-translate-x-0 tw-ease'>
                        <svg
                          className='tw-w-5 tw-h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
                        </svg>
                      </span>
                      <span className='tw-relative'>Get Started</span>
                    </button>
                  </div>
                </Fade>
              </div>
              <div className='tw-hidden md:tw-flex md:tw-flex-col tw-items-center tw-justify-end tw-w-[50%] '>
                <Fade right cascade>
                  <img src={homepageLogo} className='tw-mt-[0px] tw-max-w-[720px] tw-max-h-[680px] tw-w-[50%]' alt='' />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
