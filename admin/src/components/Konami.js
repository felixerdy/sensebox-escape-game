import { useEffect, useState } from "react";

import {
  ArwesThemeProvider,
  StylesBaseline,
  Button,
  FrameCorners,
  Text,
} from "@arwes/core";

function Konami() {
  const konamiCode = "u-u-d-d-l-r-l-r-b-a";

  const [lastClick, setLastClick] = useState(new Date());
  const [clickCode, setClickCode] = useState([]);

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
      alert("success");
    }
  }, [clickCode]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button
          style={{ margin: "1rem", width: "32px", height: "32px" }}
          FrameComponent={FrameCorners}
          onClick={() => addButtonClick("u")}
        >
          <Text>⬆</Text>
        </Button>
        <Button
          style={{ margin: "1rem", width: "32px", height: "32px" }}
          FrameComponent={FrameCorners}
          onClick={() => addButtonClick("d")}
        >
          <Text>⬇</Text>
        </Button>
        <Button
          style={{ margin: "1rem", width: "32px", height: "32px" }}
          FrameComponent={FrameCorners}
          onClick={() => addButtonClick("r")}
        >
          <Text>➡</Text>
        </Button>
        <Button
          style={{ margin: "1rem", width: "32px", height: "32px" }}
          FrameComponent={FrameCorners}
          onClick={() => addButtonClick("l")}
        >
          <Text>⬅</Text>
        </Button>
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
    </>
  );
}

export default Konami;
