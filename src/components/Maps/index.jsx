import React, { useEffect } from "react";
import { csvStr } from "./data.jsx";
import csv from "csvtojson";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllSelectedMarker,
  setMapsData,
} from "../../redux/maps/maps.actions";
import Maps from "./Maps.jsx";
import { useSnackbar } from "notistack";

const MapsContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { mapsData } = useSelector((state) => state.maps);

  const convertCsvToJson = async () => {
    const jsonArr = await csv().fromString(csvStr);
    dispatch(setMapsData(jsonArr));
  };

  const onSetAllSelectedMarker = (data) => {
    dispatch(setAllSelectedMarker(data));
    enqueueSnackbar("Added marker", {
      variant: "info",
      anchorOrigin: { horizontal: "center", vertical: "bottom" },
    });
  };

  useEffect(() => {
    convertCsvToJson();
  }, []);

  return (
    <div className="App">
      {!mapsData ? (
        "loading"
      ) : (
        <Maps data={mapsData} setAllSelectedMarker={onSetAllSelectedMarker} />
      )}
    </div>
  );
};

export default React.memo(MapsContainer);
