import React, { useContext } from "react";

import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { AppContext } from "../App";

const TrackingIDModal = () => {
  const { modalOpen, setModalOpen } = useContext(AppContext);
  const [trackingId, setTrackingId] = useState("");
  const [showError, setShowError] = useState(false);

  const handleButtonClick = () => {
    if (trackingId === "ASDF") {
      setModalOpen(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <Modal
      open={modalOpen}
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
          Tracking ID eingeben
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
              Es wurde keine Lieferung zu "{trackingId}" gefunden
            </Typography>
            <br />
          </>
        )}
        <TextField
          id="outlined-basic"
          label="Tracking ID"
          variant="outlined"
          onChange={(e) => {
            setShowError(false);
            setTrackingId(e.target.value);
          }}
        />
        <br />
        <Button variant="contained" onClick={handleButtonClick}>
          OK
        </Button>
      </Box>
    </Modal>
  );
};

export default TrackingIDModal;
