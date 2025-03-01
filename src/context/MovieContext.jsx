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
        setMylist((prevList) => {   // Using Function Update Pattern
            // "some()" -  Test whether at least one element in an array meets a specific condition.
            if (!prevList.some((item) => item.id === movie.id)) {
                const updatedList = [...prevList, movie];
                localStorage.setItem('mylist', JSON.stringify(updatedList));
                return updatedList; // 🟢 State is updated with the new list that includes the added movie.
            }
            return prevList; // 🔴 No change to state
        });
    };

    // Function to remove a movie from mylist
    const removeMovie = (id) => {
        setMylist((prevList) => {  // Using Function Update Pattern
            const updatedList = prevList.filter((movie) => movie.id !== id);
            localStorage.setItem('mylist', JSON.stringify(updatedList)); 
            return updatedList;
        });
    };

    return (
        <MovieContext.Provider value={{ mylist, addMovie, removeMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);
