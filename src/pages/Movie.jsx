import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { useMovieContext } from '../context/MovieContext';
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

function Movie() {
    const { id } = useParams();
    const location = useLocation();
    const { addMovie } = useMovieContext(); // Access addMovie from context
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const type = location.pathname.includes('/movie/') ? 'movie' : 'tv';

        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovieDetails();
    }, [id, location.pathname]);

    const handleAddToList = () => {
        addMovie(movie);
        toast.success(`${movie.title} added to your list!`); // Display toast notification
    };

    if (isLoading || !movie) return <div className="text-white text-center">Loading...</div>;

    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
        >
            <Toaster position="top-center" reverseOrder={false} /> {/* Toast container */}
            
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:flex lg:items-center lg:justify-between text-white">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                <div className="lg:w-2/3 space-y-6 lg:px-10">
                    <h1 className="text-4xl lg:text-5xl font-bold">{movie.title}</h1>
                    <p className="text-gray-300 text-lg">{movie.overview}</p>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center px-6 py-3 bg-red-600 rounded-md hover:bg-red-700 transition duration-300">
                            <FaPlay className="mr-2" /> Play
                        </button>
                        <button
                            onClick={handleAddToList} // Call handleAddToList on click
                            className="flex items-center px-6 py-3 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
                        >
                            <FaPlus className="mr-2" /> Add to List
                        </button>
                    </div>

                    <div className="text-gray-400 space-y-2">
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                        <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
                        <p><strong>Runtime:</strong> {movie.runtime} min</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;
