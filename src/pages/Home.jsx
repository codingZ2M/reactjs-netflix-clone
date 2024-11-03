import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Row title="Now Playing" type="movie" category="now_playing" />
        <Row title="Popular" type="movie" category="popular" />
        <Row title="Top Rated" type="movie" category="top_rated" />
    </div>
  )
}

export default Home