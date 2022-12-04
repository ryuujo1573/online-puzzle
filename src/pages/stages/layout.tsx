import React from 'react';
import { TopBar } from '@comps/TopBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <TopBar />
      <div className='h-full w-full flex justify-center items-center'>
        <Outlet />
      </div>
    </>
  )
}