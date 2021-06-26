import * as maps from "./maps.types";

const initialState = {
  mapsData: null,
  allSelectedMarker: null,
};

const mapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case maps.SET_MAPS_DATA: {
      return {
        ...state,
        mapsData: action.mapsData,
      };
    }
    case maps.SET_ALL_SELECTED_MARKER: {
      return {
        ...state,
        allSelectedMarker: setAllSelectedMarker(
          state.allSelectedMarker,
          action.selectedMarkerObj
        ),
      };
    }
    default: {
      return state;
    }
  }
};

function setAllSelectedMarker(allSelectedMarker, payload) {
  return !allSelectedMarker ? [payload] : [...allSelectedMarker, payload];
}
export default mapsReducer;
