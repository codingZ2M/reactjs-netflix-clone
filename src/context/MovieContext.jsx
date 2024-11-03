import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    // Load mylist from localStorage if it exists, otherwise use an empty array
    const [mylist, setMylist] = useState(() => {
        const savedList = localStorage.getItem('mylist');
        return savedList ? JSON.parse(savedList) : [];
    });

    // Function to add a movie to mylist
    const addMovie = (movie) => {
        // Check if the movie already exists in mylist
        if (!mylist.some((item) => item.id === movie.id)) {
            const updatedList = [...mylist, movie];
            setMylist(updatedList);
            localStorage.setItem('mylist', JSON.stringify(updatedList)); // Save to localStorage
        }
    };

    // Function to remove a movie from mylist
    const removeMovie = (id) => {
        const updatedList = mylist.filter((movie) => movie.id !== id);
        setMylist(updatedList);
        localStorage.setItem('mylist', JSON.stringify(updatedList)); // Update localStorage
    };

    return (
        <MovieContext.Provider value={{ mylist, addMovie, removeMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);
