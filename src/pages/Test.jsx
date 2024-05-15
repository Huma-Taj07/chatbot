
import React, { useState } from "react";
import Bot from '../assets/bot.png'
import Sidebar from "../Components/sidebar";


function MainContent() {
    const [chatMessage, setChatMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const handleSendMessage = (e) => {
        e.preventDefault()
        if (chatMessage.trim() !== "") {
            setChatHistory([...chatHistory, chatMessage]);
            setChatMessage("");
        }
    };
    return (
        <div className="ml-0 md:ml-64 p-8">
            <div className="">
                <form className="flex items-center mb-4" action="" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        className="border rounded px-4 py-2 w-full mr-2"
                        placeholder="Type your message..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                    />
                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"

                    >
                        Send
                    </button>
                </form>
            </div>
            <div>
                {chatHistory.map((message, index) => (
                    <div key={index} className="flex items-start mb-4">
                        <img src={Bot} alt="Chatbot" className="chatimg mr-2 w-10 h-10 object-cover " />
                        <div className="bg-gray-200 rounded-lg p-2">
                            {message}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Test() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <button
                className="bg-gray-300 p-2 fixed top-4 left-4 rounded"
                onClick={toggleSidebar}
            >
                Toggle Sidebar
            </button>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent />
        </div>
    );
}

export default Test;
