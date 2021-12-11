import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { Text, Button, Blockquote } from "@arwes/core";

import CombinationLock from "combination-lock-react";
import "combination-lock-react/dist/index.css";

export const Lock = () => {
  let history = useHistory();

  const [boxCount, setBoxCount] = useState("");
  const [password, setPassword] = useState("");

  const [passwordCorrect, setPasswordCorrect] = useState(false);

  useEffect(() => {
    if (passwordCorrect) {
      alert("Enter your 2FA code");
    }
  }, [passwordCorrect]);

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
      }}
    >
      <Text as="h2" style={{ margin: "1rem" }}>
        Login with your password
      </Text>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          style={{ margin: "1rem" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={() => {
            setPasswordCorrect(password === "clueless");
            if (password !== "clueless") {
              alert("Wrong password!");
            }
          }}
        >
          <Text>Login</Text>
        </Button>
      </div>

      {passwordCorrect && (
        <>
          <Text as="h2" style={{ margin: "1rem" }}>
            Please enter the 2FA code
          </Text>
          <div
            style={{
              color: "black",
              marginTop: "1rem",
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
        </>
      )}
    </div>
  );
};
