import React, { useState } from "react";
import { GoogleApiWrapper, Marker } from "google-maps-react";
import googleMapStyles from "./GoogleMapStyles";
import { Items } from "./Items";
import { StyledMap, StyledInfoWindow } from "./StyledMaps";

const googleMapStylesTwo = { mapStyle: googleMapStyles };

const Maps = ({ data, google, mapStyle, setAllSelectedMarker }) => {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onAddSelectedMarker = (selectedObj) => {
    //add for table of second page
    setAllSelectedMarker(selectedObj);
  };

  const onMarkerClick = (props, marker, selectedObj) => {
    onAddSelectedMarker(selectedObj);
    setState({
      selectedPlace: selectedObj,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  return (
    <StyledMap
      styles={mapStyle}
      google={google}
      initialCenter={{ lat: "24.30578", lng: "54.539402" }}
    >
      {data.map((item, i) => {
        return (
          <Marker
            key={i}
            position={{ lat: item.Latitude, lng: item.Longitude }}
            onClick={(props, marker) => onMarkerClick(props, marker, item)}
            name={item.City}
          />
        );
      })}

      <StyledInfoWindow
        marker={state.activeMarker}
        visible={state.showingInfoWindow}
      >
        <div className="lili">
          <Items selectedPlace={state.selectedPlace} />
        </div>
      </StyledInfoWindow>
    </StyledMap>
  );
};
Maps.defaultProps = googleMapStylesTwo;
export default GoogleApiWrapper({
  apiKey: "AIzaSyDP7U6nehjg5-fSvNBq7gleZF6hxR1G8EM",
})(Maps);
