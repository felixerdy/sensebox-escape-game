import React from "react";
import ActionProvider from "../bot/ActionProvider";
import MessageParser from "../bot/MessageParser";
import config from "../bot/config";
import { Chatbot } from "react-chatbot-kit";

const DetailPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100% - 68.5px)",
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
