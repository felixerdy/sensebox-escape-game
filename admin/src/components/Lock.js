import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import CombinationLock from "combination-lock-react";
import "combination-lock-react/dist/index.css";

export const Lock = () => {
  let history = useHistory();

  const [boxCount, setBoxCount] = useState("");

  useEffect(() => {
    async function fetchBoxCount() {
      const request = await fetch("https://api.opensensemap.org/stats");
      const [count] = await request.json();
      setBoxCount(String(count));
    }
    fetchBoxCount();
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "black",
      }}
    >
      <CombinationLock
        combination={boxCount}
        height={80}
        onMatch={() => {
          window.location.href = "/loader";
        }}
        openText={"Unlocked!"}
      />
    </div>
  );
};
