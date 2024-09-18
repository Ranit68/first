import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FreelancerPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sortOption, setSortOption] = useState('Highest Review');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); 

    const freelancers = [
        {
            photo: 'path/to/user-photo1.jpg',
            name: 'John Doe',
            about: 'Experienced web developer specializing in front-end technologies.',
            hourlyRate: '50',
            location: 'New York, USA',
            skills: ['JavaScript', 'React', 'CSS'],
            rating: 4.5,
            reviews: 30
        },
        {
            photo: 'path/to/user-photo2.jpg',
            name: 'Jane Smith',
            about: 'Skilled designer with a focus on UX/UI design.',
            hourlyRate: '40',
            location: 'San Francisco, USA',
            skills: ['Design', 'Figma', 'Photoshop'],
            rating: 4.8,
            reviews: 45
        },
        {
            photo: 'path/to/user-photo1.jpg',
            name: 'John Doe',
            about: 'Experienced web developer specializing in front-end technologies.',
            hourlyRate: '50',
            location: 'New York, USA',
            skills: ['JavaScript', 'React', 'CSS'],
            rating: 4.5,
            reviews: 30
        },
        {
            photo: 'path/to/user-photo2.jpg',
            name: 'Jane Smith',
            about: 'Skilled designer with a focus on UX/UI design.',
            hourlyRate: '40',
            location: 'San Francisco, USA',
            skills: ['Design', 'Figma', 'Photoshop'],
            rating: 4.8,
            reviews: 45
        },
        {
            photo: 'path/to/user-photo1.jpg',
            name: 'John Doe',
            about: 'Experienced web developer specializing in front-end technologies.',
            hourlyRate: '50',
            location: 'New York, USA',
            skills: ['JavaScript', 'React', 'CSS'],
            rating: 4.5,
            reviews: 30
        },
        {
            photo: 'path/to/user-photo2.jpg',
            name: 'Jane Smith',
            about: 'Skilled designer with a focus on UX/UI design.',
            hourlyRate: '40',
            location: 'San Francisco, USA',
            skills: ['Design', 'Figma', 'Photoshop'],
            rating: 4.8,
            reviews: 45
        },
        // Add more freelancers as needed
    ];

    const resultsCount = freelancers.length;
    const totalPages = Math.ceil(resultsCount / itemsPerPage);

    const currentFreelancers = freelancers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="container mx-auto mt-4 flex flex-col lg:flex-row">
            <div
                className={`bg-white shadow-lg p-4 mb-4 mr-10 lg:w-72 w-full flex-shrink-0 ${
                    showFilters ? 'block' : 'hidden'
                } lg:block`}
            >
                <h2 className="text-xl font-bold mb-4">Filter Freelancers</h2>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">Hourly Charge</h3>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="number"
                                placeholder="Min"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Skills</h3>
                        <input
                            type="text"
                            placeholder="Search skills"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="flex flex-col max-h-32 overflow-y-auto">
                            {['JavaScript', 'React', 'CSS', 'Design', 'Figma'].map(skill => (
                                <label key={skill} className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">{skill}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Online/Offline</h3>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                            <option>All</option>
                            <option>Online</option>
                            <option>Offline</option>
                        </select>
                    </div>

                    <div>
                        <h3 className="font-semibold">Location</h3>
                        <input
                            type="text"
                            placeholder="Enter Location"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold w-full mb-2 ">Rating</h3>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                            <option>All</option>
                            <option>4 Stars & Up</option>
                            <option>3 Stars & Up</option>
                            <option>2 Stars & Up</option>
                            <option>1 Star & Up</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex-grow bg-white shadow-lg p-4">
                <h2 className="text-xl font-bold mb-4">Top Freelancers</h2>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600">Showing {resultsCount} results</p>
                    <div className="relative">
                        <button
                            className="bg-blue-500 text-white p-2 rounded-lg flex items-center"
                            onClick={toggleDropdown}
                        >
                            <span className="mr-2">{sortOption}</span>
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Highest Review'); setDropdownOpen(false); }}
                                >
                                    Highest Review
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Lowest Review'); setDropdownOpen(false); }}
                                >
                                    Lowest Review
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Highest Hourly Rate'); setDropdownOpen(false); }}
                                >
                                    Highest Hourly Rate
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Lowest Hourly Rate'); setDropdownOpen(false); }}
                                >
                                    Lowest Hourly Rate
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-4">
                    {currentFreelancers.map((freelancer, index) => (
                        <div key={index} className="bg-white border-t border-gray-200 p-4 ">
                            <div className="flex items-center mb-4">
                                <img
                                    src={freelancer.photo}
                                    alt={freelancer.name}
                                    className="w-16 h-16 rounded-full border border-gray-300"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">{freelancer.name}</h3>
                                    <p className="text-gray-600">{freelancer.about}</p>
                                    <p className="text-gray-800 mt-1">Hourly Rate: ₹{freelancer.hourlyRate}</p>
                                    <p className="text-gray-800 mt-1">Location: {freelancer.location}</p>
                                    <div className="flex space-x-2 mt-2">
                                        {freelancer.skills.map(skill => (
                                            <span key={skill} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg font-bold">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="text-yellow-500 mr-2">
                                           
                                            {'★'.repeat(Math.floor(freelancer.rating))}{'☆'.repeat(5 - Math.floor(freelancer.rating))}
                                        </span>
                                        <span>{freelancer.rating} ({freelancer.reviews} reviews)</span>
                                        <button className="ml-4 text-blue-500">See Reviews</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
                <div className="flex justify-center mt-6">
                    <button
                        className="p-2 bg-blue-500 text-white rounded-lg mr-2"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`p-2 border rounded-lg mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className="p-2 bg-blue-500 text-white rounded-lg ml-2"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    >
                        Next
                    </button>
                </div>
            </div>

            <button
                className="lg:hidden fixed top-85 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                onClick={() => setShowFilters(!showFilters)}
            >
                <FaFilter />
            </button>
        </div>
    );
};

export default FreelancerPage;
