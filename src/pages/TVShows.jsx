// src/pages/TVShows.jsx
import Row from '../components/Row';

function TVShows() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Row title="Airing Today" type="tv" category="airing_today" />
            <Row title="On The Airs"  type="tv" category="on_the_air" />
            <Row title="Popular"  type="tv" category="popular" />
            <Row title="Top Rated"  type="tv" category="top_rated" />
        </div>
    );
}

export default TVShows;
