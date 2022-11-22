import React from 'react'
import { Outlet } from 'react-router-dom'
import LICENSE from '../../../LICENCE'

export default function Layout() {
  return (
    <>
      outlet!
      <Outlet />
      <div className='absolute bottom-1em'>
        ryuujo © 2022. License: .
      </div>
    </>
  )
}