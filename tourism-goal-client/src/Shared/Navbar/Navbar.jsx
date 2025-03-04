import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links =<>
    <Link to={'/'}><li><a>Home</a></li></Link>
    <Link to={'/topNews'}><li><a>Top News</a></li></Link>
    <Link to={'/destinationToGo'}><li><a>Destination to go</a></li></Link>
    <Link to={'/goalsToDo'}><li><a>Goals to do</a></li></Link>
    <Link to={'/booksNotes'}><li><a>Books & Notes</a></li></Link>
    <Link to={'/'}><li><a>Tourism Association</a></li></Link>
    </>
    return (
        <div className='py-6'>
           <div className='lg:flex md:flex justify-between lg:px-0 px-2 '>
                <div className='flex justify-start lg:mb-0 md:mb-0 mb-4'>
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 opacity-70 text-gray-500"
                        >
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                            />
                        </svg>
                        <input
                            type="text"
                            className="lg:w-[200%] md:w-[300%] w-full pl-10 pr-3 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search here..."
                        />
                    </div>

                    <div className='ml-2 lg:ml-36 md:ml-28'>
                     <button className="btn btn-primary font-bold text-md">Search</button>
                    </div>
                </div>
                <div className='flex justify-end'>
                    {/* <img className='rounded-md lg:w-1/3 md:w-1/2' src={"https://i.ibb.co.com/dJmC8v9t/banner-ads-1.jpg"} alt="" /> */}
                    <img className='rounded-md lg:w-1/3 md:w-1/2' src={"https://i.ibb.co.com/dJmC8v9t/banner-ads-1.jpg"} alt="" />
                </div>
           </div>
           <div>
           <div className="navbar items-center mt-2">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-blue-500 font-semibold text-xl rounded-box z-[1]  w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <button className='font-bold lg:text-4xl md:text-3xl text-xl'>Tourism<span className='text-blue-500'>Goal</span></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mt-2 font-semibold text-end text-lg">
                     {links}
                    </ul>
                </div>
                <div className="navbar-end">
                     <Link to={'/jobs'}><button className="btn btn-primary font-semibold lg:text-lg md:text-lg text-sm lg:py-4 lg:px-6 md:py-4 md:px-6 py-2 px-3">Career/Jobs</button></Link>
                </div>
                </div>
           </div>
           <hr />
        </div>
    );
};

export default Navbar;