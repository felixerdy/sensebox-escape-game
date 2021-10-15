import { useEffect, useState, useContext } from "react";

import {
  Button,
  FrameCorners,
  Text,
  FrameBox,
  FrameHexagon,
} from "@arwes/core";

import { AppContext } from "./../App";

function Konami() {
  const konamiCode = "u-u-d-d-l-r-l-r-b-a";
  // const konamiCode = "u";

  const [lastClick, setLastClick] = useState(new Date());
  const [clickCode, setClickCode] = useState([]);

  const [dummyRotate, setDummyRotate] = useState(0);
  const [dummySkewY, setDummySkewY] = useState(0);
  const [dummyHueRotate, setDummyHueRotate] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [showHelp, setShowHelp] = useState(false);

  const { isDestroyed, setIsDestroyed } = useContext(AppContext);

  useEffect(() => {
    if (isDestroyed) {
      window.location.href = "/destructure";
    }
  }, [isDestroyed]);

  const addButtonClick = (code) => {
    const timestamp = new Date();
    const clickDiff = timestamp - lastClick;
    console.log(clickDiff);
    if (clickDiff > 5000) {
      setClickCode([code]);
    } else {
      setClickCode([...clickCode, code]);
    }
    setLastClick(timestamp);
  };

  useEffect(() => {
    const code = clickCode.join("-");
    if (code.includes(konamiCode)) {
      setShowModal(true);
      setTimeout(() => {
        window.scroll({ top: document.body.scrollHeight, behavior: "smooth" });
      }, 250);
    }

    if (clickCode.length > 25) {
      setShowHelp(true);
    }
  }, [clickCode]);

  return (
    <>
      <Text as="h1">Einstellungen</Text>
      <br />
      <Text as="p">Löse das Rätsel um die Einstellungen zu öffnen</Text>
      <br />
      {showHelp && (
        <button
          style={{ margin: "1rem", width: "32px", height: "32px" }}
          onClick={() => {
            alert(
              'Du kannst das Rätsel nicht lösen? Hilfe findest du bei dem Chatbot mit dem Wort "help"'
            );
          }}
        >
          Hilfe
        </button>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FrameBox
          animator={{ activate: true }}
          linesWidths={2}
          origins={["left", "top", "right", "bottom"]}
          hover
        >
          <div style={{ padding: "1rem" }}>
            <img
              src="/sensebox_logo.svg"
              alt="logo"
              style={{
                transitionDuration: ".2s",
                transform: `rotate(${dummyRotate}deg) rotateX(${dummySkewY}deg)`,
                filter: `hue-rotate(${dummyHueRotate}deg)`,
              }}
            ></img>
          </div>
        </FrameBox>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ margin: "1rem", width: "32px", height: "32px" }}
            FrameComponent={FrameCorners}
            onClick={() => {
              addButtonClick("l");
              setDummyRotate(dummyRotate - 45);
            }}
          >
            <Text>⬅</Text>
          </Button>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              style={{ margin: "1rem", width: "32px", height: "32px" }}
              FrameComponent={FrameCorners}
              onClick={() => {
                addButtonClick("u");
                setDummySkewY(dummySkewY + 45);
              }}
            >
              <Text>⬆</Text>
            </Button>
            <Button
              style={{ margin: "1rem", width: "32px", height: "32px" }}
              FrameComponent={FrameCorners}
              onClick={() => {
                addButtonClick("d");
                setDummySkewY(dummySkewY - 45);
              }}
            >
              <Text>⬇</Text>
            </Button>
          </div>
          <Button
            style={{ margin: "1rem", width: "32px", height: "32px" }}
            FrameComponent={FrameCorners}
            onClick={() => {
              addButtonClick("r");
              setDummyRotate(dummyRotate + 45);
            }}
          >
            <Text>➡</Text>
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ margin: "1rem", width: "32px", height: "32px" }}
            FrameComponent={FrameCorners}
            onClick={() => {
              addButtonClick("a");
              setDummyHueRotate(dummyHueRotate + 45);
            }}
          >
            <Text>A</Text>
          </Button>
          <Button
            style={{ margin: "1rem", width: "32px", height: "32px" }}
            FrameComponent={FrameCorners}
            onClick={() => {
              addButtonClick("b");
              setDummyHueRotate(dummyHueRotate - 45);
            }}
          >
            <Text>B</Text>
          </Button>
        </div>
      </div>
      <div
        style={{
          display: showModal ? "block" : "none",
        }}
      >
        <hr />
        <div
          style={{
            margin: "1rem",
            paddingTop: "8rem",
            paddingBottom: "8rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text as="h1">Danger Area</Text>
          <Button
            FrameComponent={FrameHexagon}
            palette="error"
            onClick={() => {
              const result = window.confirm(
                "Bist du sicher, dass du die Systeme herunterfahren und Produktion zerstören möchtest?"
              );
              setIsDestroyed(result);
            }}
          >
            <Text>Systeme herunterfahren und Produktion zerstören</Text>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Konami;
