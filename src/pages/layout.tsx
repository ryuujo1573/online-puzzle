import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

type TopBarState = {
  title: string,
}

let _setState: React.Dispatch<React.SetStateAction<TopBarState | undefined>>;
export function useTopBar() {
  return _setState;
}

export function Meta(props: { title: string }) {
  _setState({ title: props.title })
  return <></>
}

export default function Layout() {
  const [state, setState] = useState<TopBarState>();
  _setState = setState;
  useEffect(() => {
    return () => { }
  }, []);

  return (
    <div className='absolute inset-0 flex flex-col'>
      <header className='flex py-4 items-center justify-center font-bold'>
        {state ? <h1>
          {state.title}
        </h1> : <></>}
      </header>
      <div className='h-full'>
        <Outlet />
      </div>
      <footer className='space-y-1 inset-x-0 text-center'>
        ryuujo1573  © 2022. The project is under <a href='https://raw.githubusercontent.com/ryuujo1573/online-puzzle/main/LICENSE'>BSD-3-Clause license</a>.
      </footer>
    </div>
  )
}