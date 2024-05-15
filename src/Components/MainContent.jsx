import { useState } from "react";
import axios from 'axios';
import '../styles/MainContent.css';
import Bot from '../assets/user1.png';
import { ArrowDropDownOutlined, ExitToApp, MenuOpen, SendOutlined, SettingsApplications } from "@mui/icons-material";
import { Transition } from "@headlessui/react";

export default function MainContent({ isSidebarOpen, toggleSidebar }) {
    const [isPlansOpen, setIsPlansOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [chatMessage, setChatMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [error, setError] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (chatMessage.trim() !== "") {
            try {
                const response = await axios.post('http://localhost:5000/generate', { prompt: chatMessage });
                const generatedResponse = response.data.response;
                setChatHistory([...chatHistory, { type: 'user', message: chatMessage }, { type: 'bot', message: generatedResponse }]);
                setChatMessage("");
                setError("");
            } catch (error) {
                setError("Error generating response. Please try again.");
            }
        }
    };

    return (
        <div className={`maincontent ${isSidebarOpen ? 'ml-64' : 'ml-0'} p-8`}>
            {/* <div className="flex justify-between items-center p-4 z-50 bg-gray-100 border-b">
                <div className="relative">
                    <button onClick={() => setIsPlansOpen(!isPlansOpen)} className="flex items-center space-x-2">
                        <span>French Chatbot</span>
                        <ArrowDropDownOutlined />
                    </button>
                    <Transition
                        show={isPlansOpen}
                        enter="transition-opacity duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg rounded-sm p-5">
                            <div className="p-2">Plan One</div>
                            <div className="p-2">Plan Two</div>
                            <div className="p-2">Plan Three</div>
                            <div className="p-2">Plan Four</div>
                        </div>
                    </Transition>
                </div>

                <div className="relative">
                    <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center space-x-2">
                        <img src={Bot} alt="User" className="w-8 h-8 rounded-full object-cover" />
                    </button>
                    <Transition
                        show={isUserMenuOpen}
                        enter="transition-opacity duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 p-5 rounded-sm">
                            <div className="p-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-100">
                                <SettingsApplications />
                                <span>Settings</span>
                            </div>
                            <div className="p-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-100">
                                <ExitToApp />
                                <span>Logout</span>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div> */}
            <form className="relative flex mt-0 items-center mb-4" onSubmit={handleSendMessage}>
                <div onClick={toggleSidebar}>
                    <MenuOpen />
                </div>
                <input
                    type="text"
                    className="border bg-white rounded-lg px-4 z-0 py-2 w-full shadow-sm pr-10 outline-none"
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                />
                <button type="submit" className="absolute right-2 top-2">
                    <SendOutlined style={{ color: "#5e35b1" }} className=" w-8 h-8" />
                </button>
            </form>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div>
                {chatHistory.map((messageObj, index) => (
                    <div key={index} className={`flex items-start mb-4 ${messageObj.type === 'bot' ? 'flex-row-reverse' : ''}`}>
                        <img src={Bot} alt="Chatbot" className="chatimg mr-2 w-10 h-10 object-cover" />
                        <div className="bg-gray-200 p-3 rounded-xs">
                            {messageObj.message}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
