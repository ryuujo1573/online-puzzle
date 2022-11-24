import React from 'react'
import { TopBar } from '@comps/TopBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <div className='absolute bottom-1em left-0 right-0 text-center'>
        ryuujo1573  © 2022. The project is under <a href='https://raw.githubusercontent.com/ryuujo1573/online-puzzle/main/LICENSE'>BSD-3-Clause license</a>.
      </div>
    </>
  )
}