import React, { useContext, useState } from "react";
import ReactMapGL, { Source, Layer, Marker } from "react-map-gl";
import { AppContext } from "../App";

const rotterdam = [4.445216, 51.884931];

const geojson = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [[-74.728585, 5.928071], [-79.529245, 8.965607], rotterdam],
  },
};

const plannedGeojson = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [rotterdam, [7.543431, 51.99356]],
  },
};

const layerStyle = {
  id: "route",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#2566f1",
    "line-width": 8,
  },
};

const plannedLayerStyle = {
  id: "route-planned",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#2566f1",
    "line-width": 6,
    "line-dasharray": [2, 4],
  },
};

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

  const { modalOpen } = useContext(AppContext);

  return (
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1IjoiZmVsaXhhZXRlbSIsImEiOiI2MmE4YmQ4YjIzOTI2YjY3ZWFmNzUwOTU5NzliOTAxOCJ9.nshlehFGmK_6YmZarM2SHA"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {!modalOpen && (
        <>
          <Marker
            latitude={rotterdam[1]}
            longitude={rotterdam[0]}
            offsetLeft={-10}
            offsetTop={-10}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                borderColor: "white",
                borderWidth: "4px",
                borderStyle: "solid",
                backgroundColor: "#2566f1",
                animation: "pulse 1s infinite alternate",
                transformOrigin: "center",
              }}
            ></div>
          </Marker>
          <Source id="my-data" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
          <Source id="my-data-planned" type="geojson" data={plannedGeojson}>
            <Layer {...plannedLayerStyle} />
          </Source>
        </>
      )}
    </ReactMapGL>
  );
};

export default Map;
