import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContestPage from './Pages/ContestPage'
import Navbar from './Components/Navbar';
import FreelancerPage from './Pages/FreelancerPage';
import ProjectsPage from './Pages/ProjectsPage';
import ListPage from './Pages/ListPage';
import MyProject from './Pages/MyProject';

function App() {

  
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<ProjectsPage />} />
                <Route path="/freelancer" element={<FreelancerPage />} />
                <Route path="/contest" element={<ContestPage />} />
                <Route path="/List" element={<ListPage />} /> 
                <Route path="/myproject" element={<MyProject />} /> {/* Default route */}
            </Routes>
           
        </div>
    </Router>
);
}

export default App;
