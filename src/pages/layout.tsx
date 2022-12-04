
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  useEffect(() => {
    return () => { }
  }, []);

  return (
    <div className='absolute inset-0 flex flex-col'>
      <Outlet />
      <footer className='space-y-1 inset-x-0 text-center'>
        ryuujo1573  © 2022. The project is under <a href='https://raw.githubusercontent.com/ryuujo1573/online-puzzle/main/LICENSE'>BSD-3-Clause license</a>.
      </footer>
    </div>
  )
}