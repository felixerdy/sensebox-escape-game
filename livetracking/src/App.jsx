import React, { useState } from "react";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import TrackingIDModal from "./components/TrackingIDModal";
import Map from "./components/Map";
import TrackingInfoCard from "./components/TrackingInfoCard";
import LoginModal from "./components/LoginModal";
import DetailPage from "./components/DetailPage";
import "./App.css";

const MapContainer = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  background-color: green;
`;

const StyledTrackingInfoCard = styled.div`
  position: absolute;
  bottom: 0;
  margin: 2rem;
`;

export const AppContext = React.createContext();

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {showMap ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Livetracking
            </Typography>
          ) : (
            <Button
              variant="contained"
              sx={{ margin: "1rem" }}
              onClick={() => setShowMap(true)}
            >
              ⬅ Zurück zur Karte
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <AppContext.Provider
        value={{
          modalOpen,
          setModalOpen,
          loginModalOpen,
          setLoginModalOpen,
          showMap,
          setShowMap,
        }}
      >
        {showMap ? (
          <MapContainer>
            <Map></Map>
          </MapContainer>
        ) : (
          <DetailPage />
        )}
        <TrackingIDModal></TrackingIDModal>
        <LoginModal></LoginModal>
        {!modalOpen && showMap && (
          <StyledTrackingInfoCard>
            <TrackingInfoCard></TrackingInfoCard>
          </StyledTrackingInfoCard>
        )}
      </AppContext.Provider>
    </>
  );
}

export default App;
