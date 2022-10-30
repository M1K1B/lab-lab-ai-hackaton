import { ReactComponentElement, useState } from "react";
import axios from "axios";

import Button from "../components/Button/Button";
import Message from "../components/Message/Message";

import "./andjelika.css";

const Andjelika = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      message: "Hey there! My name's Andjelika. How may i help you?",
    },
  ]);
  const [userMessage, setUserMessage] = useState("");

  var nesto = messages;

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleRequest(event);
    }
  };

  const handleChange = (event) => {
    setUserMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handleRequest = async () => {
    var m = userMessage;
    setUserMessage("");

    setMessages(messages.push({ sender: "person", message: m }));
    setMessages([...messages]);

    const response = await axios.post("http://127.0.0.1:5000/andjelika", {
      message: m,
    });

    console.log("response", response.data);
    nesto.push({ sender: "bot", message: response.data });
    //setMessages(messages.push({ sender: "bot", message: response.data }));
    //setMessages([...messages]);
    setMessages(nesto);
    console.log("messages", nesto);
  };

  return (
    <div className="container">
      <div className="poruke">
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            message={message.message}
          />
        ))}
      </div>
      <div className="input">
        <input
          placeholder="Send message to Andjelika"
          value={userMessage}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <div className="buttons">
          <Button onClick={handleRequest} />
        </div>
      </div>
    </div>
  );
};

export default Andjelika;
