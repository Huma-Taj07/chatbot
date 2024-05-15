
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Bot from '../assets/bot.png'
import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <Transition
            show={isOpen}
            enter="transition-transform ease-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <div style={{ backgroundColor: '#f9f9f9' }} className="fixed left-0 top-0 h-full w-64  z-50 overflow-y-auto">
                <div className="p-4 border-b">
                    <h1 className="text-lg font-bold">French Chatbot</h1>
                </div>
                <div className="p-4">
                    <button style={{ backgroundColor: "#5e35b1 " }} className=" text-white px-4 py-2 rounded mb-4">
                        <AddCommentTwoToneIcon className=" mr-2 w-10 h-10" />
                        Add New Chat
                    </button>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>

                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>


                    <button onClick={toggleSidebar} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
                        Toggle Sidebar
                    </button>
                    <div>Chat History</div>
                    <h1>usaam</h1>
                </div>
            </div>
        </Transition>
    );
}

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
