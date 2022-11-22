import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-color-white max-w-1280 p-2rem">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener">
          <img src="/vite.svg" className="inline-block h-6em p-1.5em will-change-filter filter hover:drop-shadow-xl" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener">
          <img src={reactLogo} className="inline-block h-6em p-1.5em will-change-filter filter hover:drop-shadow-md animate-spin animate-duration-6s" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="p-2em">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p color="#888">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
