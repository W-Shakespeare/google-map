import * as maps from "./maps.types";

export const setMapsData = (mapsData) => ({
  type: maps.SET_MAPS_DATA,
  mapsData,
});

export const setAllSelectedMarker = (selectedMarkerObj) => ({
  type: maps.SET_ALL_SELECTED_MARKER,
  selectedMarkerObj,
});
