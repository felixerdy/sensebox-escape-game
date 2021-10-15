import React from "react";

import { LoadingBars, Text } from "@arwes/core";

import { useHistory } from "react-router-dom";

export const Loader = () => {
  const [progress, setProgress] = React.useState(0);
  let history = useHistory();

  const duration = { enter: 1000, exit: 1000 };

  const loadingText = [
    "Warte auf Antwort von Watterott...",
    "Schreibe Antwort an Gerhard Reisinger...",
    "Starte die openSenseMap neu...",
    "Suche Parkplatz fürs senseBox Mobil...",
    "Gieße die Blumen im Büro...",
  ];

  const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);

  const loadingTime = 6000;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 10000 / loadingTime);
      }
      const i = Math.floor(progress * (loadingText.length / 100));
      if (i < loadingText.length) {
        setLoadingTextIndex(i);
      }
      console.log(progress);
      if (progress >= 100) {
        window.location.href = "/main";
      }
    }, loadingTime / 100);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <LoadingBars
        animator={{ activate: true }}
        determinate
        progress={progress}
        length={30}
      />
      <Text animator={{ duration, activate: true }}>
        {loadingText[loadingTextIndex]}
      </Text>
    </div>
  );
};
