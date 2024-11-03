import { Link } from 'react-router-dom';

function MovieCard({type, movie }) {

    const mediaType = type === 'tv' ? 'tv' : 'movie'; 

    return (
        <div>
            <Link to={`/${mediaType}/${movie.id}`} className="block relative cursor-pointer">
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
                <h3 className="text-center mt-2 text-white font-semibold">{movie.title}</h3>
            </Link>
        </div>
    );
}

export default MovieCard;
