import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Footer = () => {
  return (
    <section className='relative overflow-hidden py-10 bg-gray-400 border-t-2 border-black'>
      <div className='relative z-10 mx-auto w-full px-4'>
        <div className='sm:flex sm:justify-between m-6'>
          <div className='flex flex-col justify-between'>
            <div className='mb-4 inline-flex items-center'>
              <Logo width='100px' />
            </div>
            <p className='text-gray-600 text-sm'>
              &copy; Copyright 2023. All Rights R eserved by DevUI.
            </p>
          </div>
          <div className='w-full p-6 md:w-1/2 lg:w-2/12'>
            <p className='text-gray-500 font-semibold uppercase tracking-tight mb-9'>
              Company
            </p>
            <ul className=' text-black'>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Features
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Pricing
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Affiliate Program
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full p-6 md:w-1/2 lg:w-2/12'>
            <p className='text-gray-500 font-semibold uppercase tracking-tight mb-9'>
              Support
            </p>
            <ul className=' text-black'>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Account
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Help
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Contact Us
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full p-6 md:w-1/2 lg:w-2/12'>
            <p className='text-gray-500 font-semibold uppercase tracking-tight mb-9'>
              Legals
            </p>
            <ul className=' text-black'>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Privacy Policy
                </Link>
              </li>
              <li className='mb-4'>
                <Link
                  className='text-base text-gray-900 hover:text-gray-700 font-medium'
                  to='/'
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
