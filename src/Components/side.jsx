import React from "react";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";

const Sidebar = () => {
  return (
    <div class=" bg-white rounded-t-0 rounded-b-0 m-5 flex flex-col min-h-screen">
      <div>
        <span class="text-[#5E35B1] font-serif text-[2.063rem] font-extrabold flex items-center justify-center ">
          French Chatbot.
        </span>
      </div>
      <div class="mr-2 ml-2 gap-6 rounded-lg bg-transparent border-none outline-none flex items-center justify-center text-base bg-gray-200 h-15 px-2">
        <span class=" font-mono font-semibold text-xl ">Add New chat</span>
        <AddCommentTwoToneIcon class="text-purple-700 w-4 h-12 " />
      </div>
      <div class="flex-grow px-4 mt-4 flex flex-col justify-center items-center">
        <button class="p-1 rounded-lg bg-transparent border-none outline-none flex items-center gap-2 text-lg w-32 h-20 bg-gray-200">
          <MessageTwoToneIcon className="icon" /> Cnn model
        </button>
        <button class="p-1 rounded-lg bg-transparent border-none outline-none flex items-center gap-2 text-lg w-32 h-20 bg-gray-200">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="p-1 rounded-lg bg-transparent border-none outline-none flex items-center gap-2 text-lg w-32 h-20 bg-gray-200">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
