import React from 'react'
<<<<<<< HEAD
import { Route, Router, Routes } from 'react-router-dom'
=======
import { Route, Routes } from 'react-router-dom'
>>>>>>> c1255dd (Function Update Pattern in the Context updated)
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import Footer from './components/Footer'
import Movie from './pages/Movie'
import MyList from './pages/MyList'
import { MovieProvider } from './context/MovieContext'

const App = () => {
  return (
    <div>
      <MovieProvider>
       <NavBar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movie/:id" element={<Movie />} /> 
          <Route path="/tv/:id" element={<Movie />} /> 
          <Route path="/mylist" element={<MyList/>} />
       </Routes>
       <Footer/>
       </MovieProvider>
    </div>
  )
}

export default App