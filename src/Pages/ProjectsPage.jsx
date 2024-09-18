import React, { useState } from 'react';
import { FaFilter, FaStar, FaComment } from 'react-icons/fa';

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sortOption, setSortOption] = useState('Latest');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const skills = ['JavaScript', 'Python', 'React', 'Django', 'Node.js', 'Ruby on Rails', 'Angular', 'Vue.js'];

    
    const filteredSkills = skills.filter(skill =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const projects = [
        {
            title: "Service Business Website Design",
            budget: "50000",
            description: "Design a professional website for a service-oriented business. Requirements include a modern, clean look with a focus on user experience and ease of navigation.",
            skills: ["Web Design", "HTML", "CSS", "JavaScript"],
            rating: 4,
            reviews: 15
        },
        {
            title: "E-commerce Platform Development",
            budget: "75000",
            description: "Develop a full-featured e-commerce platform with shopping cart, payment gateway, and product management functionalities.",
            skills: ["E-commerce", "React", "Node.js", "MongoDB"],
            rating: 5,
            reviews: 25
        },
        {
            title: "E-commerce Platform Development",
            budget: "75000",
            description: "Develop a full-featured e-commerce platform with shopping cart, payment gateway, and product management functionalities.",
            skills: ["E-commerce", "React", "Node.js", "MongoDB"],
            rating: 5,
            reviews: 25
        },
        {
            title: "E-commerce Platform Development",
            budget: "75000",
            description: "Develop a full-featured e-commerce platform with shopping cart, payment gateway, and product management functionalities.",
            skills: ["E-commerce", "React", "Node.js", "MongoDB"],
            rating: 5,
            reviews: 25
        },
        {
            title: "E-commerce Platform Development",
            budget: "75000",
            description: "Develop a full-featured e-commerce platform with shopping cart, payment gateway, and product management functionalities.",
            skills: ["E-commerce", "React", "Node.js", "MongoDB"],
            rating: 5,
            reviews: 25
        },
        {
            title: "E-commerce Platform Development",
            budget: "75000",
            description: "Develop a full-featured e-commerce platform with shopping cart, payment gateway, and product management functionalities.",
            skills: ["E-commerce", "React", "Node.js", "MongoDB"],
            rating: 5,
            reviews: 25
        },
        {
            title: "E-commerce Platform Development",
            budget: "75000",
            description: "Develop a full-featured e-commerce platform with shopping cart, payment gateway, and product management functionalities.",
            skills: ["E-commerce", "React", "Node.js", "MongoDB"],
            rating: 5,
            reviews: 25
        },
        // Add more project objects here as needed
    ];

    const resultsCount = 150;

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className="container mx-auto mt-4 flex flex-col lg:flex-row">

            <div
                className={`bg-white shadow-lg p-4 mb-4 mr-10 lg:w-72 w-full rounded-3xl flex-shrink-0 ${
                    showFilters ? 'block' : 'hidden'
                } lg:block`}
                style={{height:'80vh'}}
            >
                <h2 className="text-xl font-bold mb-4">Filter Projects</h2>
                <div className="flex flex-col space-y-4">
                   
                    <div>
                        <h3 className="font-semibold mb-2">Project Type</h3>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                            <option>All</option>
                            <option>Fixed Price</option>
                            <option>Hourly Rate</option>
                        </select>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Fixed Price</h3>
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
                        <h3 className="font-semibold mb-2">Hourly Rate</h3>
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
                            {filteredSkills.map((skill) => (
                                <label key={skill} className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">{skill}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Location</h3>
                        <input
                            type="text"
                            placeholder="Enter Location"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-grow bg-white shadow-lg p-4">
                <h2 className="text-xl font-bold mb-4">Top Results</h2>
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
                                    onClick={() => { setSortOption('Latest'); setDropdownOpen(false); }}
                                >
                                    Latest
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Oldest'); setDropdownOpen(false); }}
                                >
                                    Oldest
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Lowest Price'); setDropdownOpen(false); }}
                                >
                                    Lowest Price
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Highest Price'); setDropdownOpen(false); }}
                                >
                                    Highest Price
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => { setSortOption('Most Bids'); setDropdownOpen(false); }}
                                >
                                    Most Bids
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="flex flex-col ">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white  p-4 mb-0 border-t border-gray-300 pb-4 w-full">
                            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-2">Budget: <span className="font-bold text-blue-500">₹{project.budget}</span></p>
                            <p className="text-gray-700 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.skills.map((skill, idx) => (
                                    <span key={idx} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full font-bold">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400">
                                    {Array.from({ length: 5 }, (_, starIdx) => (
                                        <FaStar key={starIdx} className={`mr-1 ${starIdx < project.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">{project.rating} / 5</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <FaComment className="mr-2" />
                                <span>{project.reviews} reviews</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="lg:hidden fixed top-75 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                onClick={() => setShowFilters(!showFilters)}
            >
                <FaFilter />
            </button>
        </div>
    );
};

export default Projects;
