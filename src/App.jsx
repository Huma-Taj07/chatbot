import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import bot from "./assets/bot.jpg";
import user1 from "./assets/user1.png";
import Sidebar from "./Components/side";

function App() {
  return (
    <div class="flex h-screen gap-3 bg-[#EEF2F6]">
      <div class="bg-[#EEF2F6]">
        <Sidebar />
      </div>
      <div class="bg-[#EEF2F6] flex-grow">
        <div class="bg-white mt-2 mb-2 p-1 mr-2 flex justify-center items-center rounded-lg">
          <input
            type="text"
            id="input"
            placeholder="Send a message....."
            class="bg-white h-14 mt-1 mb-1 ml-4 bg-transparent border-none outline-none px-2 text-black font-bold text-lg w-full"
          />
          <button class="bg-transparent mr-7 border-none text-purple-600 cursor-pointer">
            <SendRoundedIcon />
          </button>
        </div>
        <div class="bg-[#EEF2F6] overflow-hidden overflow-y-auto scroll-smooth w-full ml-3 h-screen">
          <div class="bg-[#cddef1] mt-2 mr-12 ml-4 p-1 text-lg flex items-center justify-start text-justify gap-2 pr-9 rounded-xs rounded">
            <p class="ml-4 font-bold m">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eveniet, eum cupiditate consequuntur labore molestiae dignissimos
              fugit eius odio incidunt dolores velit repellat porro aperiam
              harum a est, totam illum.
            </p>
            <img
              src={bot}
              alt=""
              class="object-cover w-14 ml-4 mr-1 mb-3 mt-2 rounded-md"
            />
          </div>
          <div class="bg-[#cddef1] m-4 mr-12 text-lg flex items-center justify-start text-justify gap-2 pr-9 rounded-tr-md rounded-bl-sm rounded-tl-xs">
            <img
              src={user1}
              alt=""
              class="object-cover w-12 h-12 ml-4 mr-4 mb-8 rounded-full"
            />
            <p class="mt-2 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              eveniet, eum cupiditate consequuntur labore molestiae dignissimos
              fugit eius odio incidunt dolores velit repellat porro aperiam
              harum a est, totam illum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quo eveniet, eum cupiditate consequuntur labore
              molestiae dignissimos fugit eius odio incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;


