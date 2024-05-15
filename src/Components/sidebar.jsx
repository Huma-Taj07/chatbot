import React from 'react'
import { Transition } from "@headlessui/react";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import '../styles/SideBar.css'
import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";
import { ArchiveOutlined, PendingActions, ToggleOffOutlined, ToggleOnOutlined } from '@mui/icons-material';
export default function Sidebar({ isOpen, toggleSidebar }) {
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
            <div className="fixed left-0 top-0 h-full w-64  z-50  overflow-y-auto mysidbar">
                <div className="p-4 border-b flex items-center justify-between">
                    <div onClick={toggleSidebar} className='cursor-pointer'>
                        {isOpen ? <ToggleOffOutlined /> : <ToggleOnOutlined />}
                    </div>
                    <div onClick={toggleSidebar} className='cursor-pointer'>
                        <ArchiveOutlined />
                    </div>
                </div>
                <div className="p-4">
                    <button style={{ backgroundColor: "#5e35b1 " }} className=" text-white px-4 py-2 rounded mb-4">
                        <AddCommentTwoToneIcon className=" mr-2 w-10 h-10" />
                        Add New Chat
                    </button>
                    <div style={{ backgroundColor: "#EEF2F6" }} className="flex items-center mb-4 py-2 px-2 rounded-xs">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div style={{ backgroundColor: "#EEF2F6" }} className="flex items-center mb-4 py-2 px-2 rounded-xs">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div style={{ backgroundColor: "#EEF2F6" }} className="flex items-center mb-4 py-2 px-2 rounded-xs">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div style={{ backgroundColor: "#EEF2F6" }} className="flex items-center mb-4 py-2 px-2 rounded-xs">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>
                    <div style={{ backgroundColor: "#EEF2F6" }} className="flex items-center mb-4 py-2 px-2 rounded-xs">
                        <MessageTwoToneIcon className="w-10 h-5 mr-1" />
                        <p>Chat one</p>
                    </div>



                    <div>Chat History</div>
                    <h1>usaam</h1>
                </div>
            </div>
        </Transition>
    );
}