import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function Row({ title, type, category }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMoviesByCategory = async () => {
        try {
            const url = `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.results) {
                setMovies(data.results);
            } else {
                console.error("Error: `data.results` is undefined. Check your API endpoint.");
            }
        } catch (error) {
            console.error("Failed to fetch movies:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMoviesByCategory();
    }, [category]);

    return (
        <section className="px-8 py-6">
            {isLoading ? (
                <div className="flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className='flex flex-col space-y-4'>
                    <h2 className="text-3xl font-semibold mb-4 text-shadow-lg">{title}</h2>
                    <div className="flex overflow-x-auto  scrollbar-custom space-x-6 px-4 w-full">
                        {movies.map((movie) => (
                            <div className="flex-shrink-0 w-48">
                                <MovieCard type={type} key={movie.id} movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Row;
