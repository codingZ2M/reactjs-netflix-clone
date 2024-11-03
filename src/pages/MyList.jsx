import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import { FaTrash } from 'react-icons/fa';

const MyList = () => {
  const { mylist, removeMovie } = useMovieContext();

  if (mylist.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p className="text-2xl">Your list is empty. Add movies to see them here!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <h1 className="text-3xl font-semibold text-white text-center mb-8">My List</h1>
      <div className="max-w-7xl mx-auto px-6 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {mylist.map((movie) => (
          <div key={movie.id} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            {/* Movie Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
            {/* Movie Details */}
            <div className="p-4">
              <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
              <p className="text-gray-400 text-xs mt-1 truncate">{movie.release_date}</p>
            </div>
            {/* Remove Button */}
            <button
              onClick={() => removeMovie(movie.id)}
              className="absolute top-2 right-2 text-gray-200 bg-gray-700 hover:bg-red-600 p-1 rounded-full"
            >
              <FaTrash className="text-xs" />
            </button>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default MyList;
