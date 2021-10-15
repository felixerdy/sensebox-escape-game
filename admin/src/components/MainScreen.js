import { useEffect, useState } from "react";
import BlocklyCodes from "../data/BlocklyCodes";

import {
  Text,
  FrameHexagon,
  CodeBlock,
  Blockquote,
  Button,
  Card,
} from "@arwes/core";
import Konami from "./Konami";

const MainScreen = () => {
  const [blocklyCode, setBlocklyCode] = useState("");

  useEffect(() => {
    const index = Math.floor(Math.random() * (BlocklyCodes.length - 1));
    setBlocklyCode(BlocklyCodes[index]);

    setInterval(() => {
      const index = Math.floor(Math.random() * (BlocklyCodes.length - 1));
      setBlocklyCode(BlocklyCodes[index]);
    }, Math.floor(Math.random() * 1000) + 50);
  }, []);

  return (
    <>
      <Text as="h1">senseBox Admin Panel</Text>
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <FrameHexagon
          animator={{ activate: true }}
          style={{ padding: "2rem", margin: "1rem" }}
          palette="error"
        >
          <div style={{ textAlign: "center" }}>
            <Text as="h2">501.207</Text>
            <br />
            <Text>E-Mails unbeantwortet von Watterott</Text>
          </div>
        </FrameHexagon>
        <FrameHexagon
          animator={{ activate: true }}
          style={{ padding: "2rem", margin: "1rem" }}
          palette="secondary"
        >
          <div style={{ textAlign: "center" }}>
            <Text as="h2">95%</Text>
            <br />
            <Text>Festplattenauslastung openSenseMap</Text>
          </div>
        </FrameHexagon>
        <FrameHexagon
          animator={{ activate: true }}
          style={{ padding: "2rem", margin: "1rem" }}
          palette="success"
        >
          <div style={{ textAlign: "center" }}>
            <Text as="h2">4.723</Text>
            <br />
            <Text>offene Bestellungen senseBox Weihnachtsedition</Text>
          </div>
        </FrameHexagon>
      </div>
      <hr />

      <div style={{ margin: "1rem" }}>
        <Text as="h1">Nachrichten</Text>

        <Card
          animator={{ activate: true }}
          image={{
            src: "/wp.jpeg",
            alt: "A nebula",
          }}
          title="von: Werner Pfeil"
          options={
            <Button palette="secondary">
              <Text>Antworten</Text>
            </Button>
          }
          landscape={window.innerWidth > 400}
          hover
          style={{ maxWidth: 800 }}
        >
          <Text>
            Das Archiv läuft schon wieder nicht. Kann das einer von euch
            reparieren?
          </Text>
        </Card>
      </div>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap-reverse" }}>
        <div style={{ flex: "1 1 0px", margin: "1rem" }}>
          <Text as="h1">Blockly</Text>
          <Blockquote palette="success">
            <Text>Alle Blockly Systeme laufen</Text>
          </Blockquote>
          <Button
            animator={{ activate: true }}
            onClick={(event) => console.log(event)}
          >
            <Text>Blockly öffnen</Text>
          </Button>
        </div>
        <div
          style={{ flex: "1 1 0px", width: 0, margin: "1rem", minWidth: 250 }}
        >
          <Text as="h3">Letzter Sketch</Text>

          <CodeBlock
            animator={{ activate: true }}
            lang="arduino"
            style={{ height: 350 }}
          >
            {blocklyCode}
          </CodeBlock>
        </div>
      </div>

      <hr />
      <Konami />
    </>
  );
};

export default MainScreen;
