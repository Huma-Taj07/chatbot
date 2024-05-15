import React, { useState, useEffect } from 'react';
import './App.css';
import MainContent from './Components/MainContent';
import Sidebar from "./Components/SideBar.jsx";
import { ToggleOnOutlined, ToggleOffOutlined } from '@mui/icons-material';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [windowWidth]);

  return (
    <div className='page'>
      {/* <button
        className="bg-transparent mt-7 p-2 fixed top-4 left-4 rounded"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <ToggleOffOutlined /> : <ToggleOnOutlined />}
      </button> */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default App;
