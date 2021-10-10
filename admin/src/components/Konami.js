import { useEffect, useState, useContext } from "react";

import { Button, FrameCorners, Text, FrameBox } from "@arwes/core";

import { AppContext } from "./../App";

function Konami() {
  // const konamiCode = "u-u-d-d-l-r-l-r-b-a";
  const konamiCode = "u";

  const [lastClick, setLastClick] = useState(new Date());
  const [clickCode, setClickCode] = useState([]);

  const [dummyRotate, setDummyRotate] = useState(0);
  const [dummySkewY, setDummySkewY] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const { isDestroyed, setIsDestroyed } = useContext(AppContext);

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
    console.log(code, code.includes(konamiCode));
    if (code.includes(konamiCode)) {
      setShowModal(true);
    }
  }, [clickCode]);

  return (
    <>
      <Text as="p">Master the game to enter the secret settings menu</Text>
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
                transitionDuration: ".1s",
                transform: `rotate(${dummyRotate}deg) rotateX(${dummySkewY}deg)`,
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
              setDummyRotate(dummyRotate - 10);
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
                setDummySkewY(dummySkewY + 10);
              }}
            >
              <Text>⬆</Text>
            </Button>
            <Button
              style={{ margin: "1rem", width: "32px", height: "32px" }}
              FrameComponent={FrameCorners}
              onClick={() => {
                addButtonClick("d");
                setDummySkewY(dummySkewY - 10);
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
              setDummyRotate(dummyRotate + 10);
            }}
          >
            <Text>➡</Text>
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ margin: "1rem", width: "32px", height: "32px" }}
            FrameComponent={FrameCorners}
            onClick={() => addButtonClick("a")}
          >
            <Text>A</Text>
          </Button>
          <Button
            style={{ margin: "1rem", width: "32px", height: "32px" }}
            FrameComponent={FrameCorners}
            onClick={() => addButtonClick("b")}
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
            palette="error"
            onClick={() => {
              const result = window.confirm(
                "Are you sure to destroy the whole production?"
              );
              setIsDestroyed(result);
            }}
          >
            <Text>Shut down all systems</Text>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Konami;
