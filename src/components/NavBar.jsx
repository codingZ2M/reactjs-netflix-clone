// src/components/Navbar.jsx
import { useState } from 'react';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-black text-white shadow-lg">
            {/* Logo */}
           <Link to="/">
                <h1 className="text-5xl font-bold text-red-600 ">Netflix</h1>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
                {['Home', 'TV Shows', 'Movies', 'MyList'].map((item, index) => (
                    <NavLink
                        key={index}
                        to={`/${item.replace(" ", "").toLowerCase()}`}
                        className={({ isActive }) =>
                            `hover:text-red-500 transition-colors duration-200 ${isActive ? 'text-red-600 font-semibold' : ''}`
                        }
                    >
                        {item}
                    </NavLink>
                ))}
            </div>

            {/* Profile Icon */}
            <div className="relative hidden md:block">
                <FaUserCircle size={30} className="cursor-pointer" onClick={toggleProfileMenu} />

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden z-10">
                        <NavLink
                            to="/account"
                            className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                            onClick={() => setIsProfileMenuOpen(false)}
                        >
                            Account
                        </NavLink>
                        <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                            onClick={() => {
                                setIsProfileMenuOpen(false);
                                // Add logout logic here
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-lg z-50">
                    {['Home', 'TV Shows', 'Movies', 'My List'].map((item, index) => (
                        <NavLink
                            key={index}
                            to={`/${item.replace(" ", "").toLowerCase()}`}
                            className={({ isActive }) =>
                                `text-white hover:text-red-500 transition-colors duration-200 ${isActive ? 'text-red-600 font-semibold' : ''}`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </NavLink>
                    ))}

                    {/* Profile Link in Mobile Menu */}
                    <button
                        className="flex items-center text-white hover:text-red-500 transition-colors duration-200 mt-4"
                        onClick={toggleProfileMenu}
                    >
                        <FaUserCircle size={24} className="mr-2" />
                        Profile
                    </button>

                    {isProfileMenuOpen && (
                        <div className="w-48 bg-gray-800 text-white rounded-lg shadow-lg text-center">
                            <NavLink
                                to="/account"
                                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                onClick={() => {
                                    setIsProfileMenuOpen(false);
                                    setIsMenuOpen(false);
                                }}
                            >
                                Account
                            </NavLink>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                                onClick={() => {
                                    setIsProfileMenuOpen(false);
                                    setIsMenuOpen(false);
                                    // Add logout logic here
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
