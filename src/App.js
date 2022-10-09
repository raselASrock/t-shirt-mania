
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GrandPa from './Components/GrandPa/GrandPa';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandPa',
          element: <GrandPa></GrandPa>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

// steps 
/* 
01. practise
{
      path: '/',





