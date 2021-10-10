import React from "react";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";

const TrackingInfoCard = () => {
  const { setLoginModalOpen } = useContext(AppContext);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            Hacienda Nápoles, Columbia
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ↓
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            Carl-Neuendorff-Weg, Münster, Germany
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Ankunft: in zwei Tagen
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setLoginModalOpen(true)}>
          Weitere Informationen
        </Button>
      </CardActions>
    </Card>
  );
};

export default TrackingInfoCard;
