import React, { useContext } from "react";

import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";
import { AppContext } from "../App";

const LoginModal = () => {
  const { loginModalOpen, setLoginModalOpen, showMap, setShowMap } =
    useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const [useSecQuestion, setUseSecQuestion] = useState(false);
  const [secQuestionAnswer, setSecQuestionAnswer] = useState("");

  const handleButtonClick = () => {
    if (
      useSecQuestion &&
      username === "underbernd" &&
      secQuestionAnswer === "underberg"
    ) {
      setLoginModalOpen(false);
      setShowMap(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <Modal
      open={loginModalOpen}
      onClose={() => setLoginModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 200,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <br />
        {showError && (
          <>
            <Typography
              id="modal-modal-error"
              variant="body1"
              component="p"
              color="error"
            >
              Nutzername oder {useSecQuestion ? "Antwort" : "Passwort"} falsch
            </Typography>
            <br />
          </>
        )}
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          Nutzername
        </Typography>
        <TextField
          id="outlined-basic-name"
          label="Nutzername"
          variant="outlined"
          onChange={(e) => {
            setShowError(false);
            setUsername(e.target.value);
          }}
        />
        <br />
        {useSecQuestion ? (
          <>
            <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
              Was ist dein Lieblingsgetränk?
            </Typography>
            <TextField
              id="outlined-basic-pass"
              label="Antwort"
              variant="outlined"
              onChange={(e) => {
                setShowError(false);
                setSecQuestionAnswer(e.target.value);
              }}
            />
          </>
        ) : (
          <>
            <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
              Passwort
            </Typography>
            <TextField
              id="outlined-basic-pass"
              label="Passwort"
              variant="outlined"
              type="password"
              onChange={(e) => {
                setShowError(false);
                setPassword(e.target.value);
              }}
            />
          </>
        )}
        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <FormControlLabel
            control={
              <Switch onChange={(e) => setUseSecQuestion(e.target.checked)} />
            }
            label="Sicherheits&shy;frage nutzen"
          />

          <Button
            variant="contained"
            sx={{ margin: "1rem" }}
            onClick={handleButtonClick}
          >
            OK
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
