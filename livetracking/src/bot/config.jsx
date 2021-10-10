import React from "react";

import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions, { YesNoOptions } from "./LearningOptions";

const botName = "Booty";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hallo, ich bin ${botName}. Wie kann ich dir helfen?`,
      {
        widget: "learningOptions",
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "yesNoOptions",
      widgetFunc: (props) => <YesNoOptions {...props} />,
    },
  ],
};

export default config;
