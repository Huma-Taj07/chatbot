import React from "react";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";
import "./side.css";

class Sample extends React.Component {
  render() {
    return <h1>A Computer Science Portal For Geeks</h1>;
  }
}
const Sidebar = () => {
  return (
    <div class=" bg-white rounded-t-0 rounded-sm mt-3 ml-2 flex flex-col min-h-screen">
      <div>
        <span class="text-[#5E35B1] font-serif text-[1.5rem] mt-6 mb-2 font-extrabold flex items-center justify-center ml-2">
          French Chatbot.
        </span>
      </div>
      <div class="border-b border-black p-2">
        <div class="mr-2 ml-2 gap-6 rounded-lg bg-[#EEF2F6] outline-none flex items-center justify-center text-base h-15 px-2">
          <button class="font-mono font-semibold text-xl">Add New chat</button>
          <AddCommentTwoToneIcon class="text-purple-700 w-4 h-12" />
        </div>
      </div>
      <div class="overflow-auto flex flex-col justify-center items-center p-3 mt-3 gap-4">
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
        <button class="flex justify-center items-center gap-5 m-1 p-4 rounded-xm bg-[#EEF2F6] bg-tran min-h-0 w-30">
          <MessageTwoToneIcon className="icon" /> Cnn model Implementation
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
