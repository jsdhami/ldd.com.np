import Link from 'next/link';
import React from 'react';

const footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-slate-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        {/* Copyright Information */}
        <div className="text-center text-sm font-medium">
          ©2024 <Link className="font-bold hover:text-gray-600 dark:hover:text-gray-400" href="/">LDD Notes</Link>. All rights reserved.
        </div>

        {/* Powered By */}
        <div className="text-center text-sm font-medium mt-3 md:mt-0">
          Powered by <Link className="font-bold hover:text-gray-600 dark:hover:text-gray-400" href="https://www.sudur.tech/">SudurTech</Link>
        </div>

        {/* Developer Info */}
        <div className="text-center text-sm font-medium mt-3 md:mt-0">
          Developed by <Link className="font-bold hover:text-gray-600 dark:hover:text-gray-400" href="https://dev.jsdhami.com.np">Janak S. Dhami</Link>
        </div>
      </div>
    </>
  );
};

export default footer;
