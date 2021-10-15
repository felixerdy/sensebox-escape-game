import React from "react";

import { LoadingBars, Text } from "@arwes/core";

export const Destructure = () => {
  const [progress, setProgress] = React.useState(100);

  const duration = { enter: 1000, exit: 1000 };

  const loadingText = [
    "🎄 Frohe Weihnachten 🎄 Sie können dieses Fenster jetzt schließen",
    "Du hast das Spiel gewonnen",
    "Herzlichen Glückwunsch",
    "Produktion wird zuerstört",
    "Rechner werden heruntergefahren",
    "Kommunikation mit Watterott wird abgebrochen",
  ];

  const [loadingTextIndex, setLoadingTextIndex] = React.useState(0);

  const loadingTime = 8000;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (progress > 0) {
        setProgress(progress - 10000 / loadingTime);
      }
      const i = Math.ceil(progress * (loadingText.length / 100));
      console.log(i);
      if (i <= loadingText.length) {
        setLoadingTextIndex(i);
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
