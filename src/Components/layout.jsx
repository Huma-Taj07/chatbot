import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Maintextarea from "./maintextarea";

const Layout = () => {
  const [isActive, setIsActive] = useState(true); // Initially show sidebar on larger screens

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  // Detect screen size on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 786; // Adjust breakpoint as needed
      if (isMobile && isActive) {
        // Hide sidebar on mobile resize if initially shown
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Call on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex bg-[#EEF2F6] h-screen">
      <Sidebar
        className={`w-25 flex-shrink-0 sidebar bg-red-500 ${
          isActive ? "" : "hidden"
        }`}
      />
      <Maintextarea className="bg-black flex-grow maintextarea">
        {window.innerWidth <= 786 && ( // Show toggle button only on mobile
          <button className="toggle-button text-white" onClick={toggleSidebar}>
            {isActive ? "Close Sidebar" : "Toggle Sidebar"}
          </button>
        )}
      </Maintextarea>
    </div>
  );
};

export default Layout;
