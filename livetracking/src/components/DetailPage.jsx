import React from "react";
import ActionProvider from "../bot/ActionProvider";
import MessageParser from "../bot/MessageParser";
import config from "../bot/config";
import Chatbot from "react-chatbot-kit";

const DetailPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default DetailPage;
