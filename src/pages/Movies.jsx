// src/pages/Movies.jsx
import Row from '../components/Row';

function Movies() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Row title="Now Playing" type="movie" category="now_playing" />
            <Row title="Popular" type="movie" category="popular" />
            <Row title="Upcoming" type="movie" category="upcoming" />
            <Row title="Top Rated" type="movie" category="top_rated" />
        </div>
    );
}

export default Movies;
