// src/components/Banner.jsx
import { useEffect, useState } from 'react';

function Banner() {
    const [movie, setMovie] = useState(null);

    // Ref: https://www.codingz2m.com/post/react-fetch-api
    useEffect(() => {
        const fetchFeaturedMovie = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
            const data = await response.json();
            setMovie(data.results[0]);
        } catch (error) {
            console.error("Error fetching movie:", error);
        }
        };
        fetchFeaturedMovie();
    }, []);

    return (
        <header
            className="relative h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 space-y-6">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg md:text-6xl lg:text-7xl max-w-2xl leading-tight">
                    {movie?.title}
                </h1>
                <p className="text-white text-lg text-justify max-w-2xl md:text-xl lg:text-2xl drop-shadow-md">
                    {movie?.overview}
                </p>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-red-700 transition duration-200">
                        Play
                    </button>
                    <button className="bg-gray-700 bg-opacity-80 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-gray-600 transition duration-200">
                        My List
                    </button>
                    <button className="bg-transparent text-white border border-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-white hover:text-black transition duration-200">
                        Watch Trailer
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Banner;
