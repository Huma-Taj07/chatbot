import React from "react";

const Maintextarea = () => {
  return (
    <div className="maindiv">
      <div className="chatfooter">
        <div className="inp">
          <input
            type="text"
            name="input"
            id="input"
            placeholder="Send a message"
          />
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
      <div className="chatbot">
        <div className="chat two">
          <p className="txt1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cumque
            voluptatum adipisci, vero eius minus consequuntur, saepe temporibus
            perspiciatis blanditiis, facilis ipsa earum. Esse doloremque eaque
            sit tempora itaque debitis?
          </p>
          <img src={bot} alt="" className="chatimg one" />
        </div>
        <div className="chat">
          <img src={user1} alt="" className="chatimg" />
          <p className="txt2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            commodi dicta consequuntur! Recusandae libero obcaecati id mollitia
            vel ut? Amet dolorem, fugiat placeat sapiente tenetur aperiam ex ea
            corrupti necessitatibus saepe quidem aliquid officiis harum
            repudiandae, perspiciatis quas provident! Voluptas distinctio
            debitis dignissimos nihil aut mollitia laborum rem maxime pariatur
            veritatis ipsum fugiat officia a fuga, reprehenderit ut nulla culpa,
            quo quibusdam sunt, obcaecati sapiente consequatur expedita eos?
            Enim, culpa ex? Culpa at quas accusantium cum iure aliquam
            repellendus beatae ipsa eligendi mollitia, animi numquam illum
            consequatur officiis iste possimus distinctio ab vitae laudantium,
            facere autem doloremque. Eum, tenetur soluta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintextarea;
