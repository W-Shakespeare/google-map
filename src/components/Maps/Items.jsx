import React from "react";

export const Items = ({ selectedPlace }) => {
  return (
    <>
      {Object.entries(selectedPlace).map((it, i) => {
        return (
          <div key={i} style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: 15, fontWeight: 600 }}>{it[0]}</p>
            <p>{it[1]}</p>
          </div>
        );
      })}
    </>
  );
};
