import React from "react";

import "./LearningOptions.css";
const LearningOptions = (props) => {
  const options = [
    {
      text: "Lieferstatus",
      handler: props.actionProvider.showLieferstatus,
      id: 1,
    },
    {
      text: "Absenderinformationen",
      handler: props.actionProvider.absenderinformationen,
      id: 2,
    },
    {
      text: "Lieferung ändern",
      handler: props.actionProvider.changeLieferung,
      id: 3,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

const YesNoOptions = (props) => {
  const options = [
    {
      text: "Ja",
      handler: props.actionProvider.askForPassword,
      id: 4,
    },
    {
      text: "Nein",
      handler: props.actionProvider.absenderinformationen,
      id: 5,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export { YesNoOptions };
export default LearningOptions;
