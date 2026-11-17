import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Header } from '../components/Header'
import { Movies } from '../pages/Movies'
import { Home } from '../pages/Home'
import { TVShows } from '../pages/TVShows'
import { SearchMedia } from '../pages/SearchMedia'
import { NotFound } from '../components/NotFound'

const myrouter = createBrowserRouter([
  {
    element: <Header />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/tv', element: <TVShows /> },
      { path: '/search', element: <SearchMedia /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

function App() {

  return <RouterProvider router={myrouter}/>
}

export default App