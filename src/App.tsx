import React from 'react';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom';
import routes from 'route-views';


const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />;
}

export default App
