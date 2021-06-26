import React from "react";
import TableCell from "@material-ui/core/TableCell";

export const TableCells = ({ allSelectedMarker }) => {
  return (
    <>
      {allSelectedMarker &&
        Object.keys(allSelectedMarker[0]).map((key, i) => (
          <TableCell key={i} align="center">
            {key}
          </TableCell>
        ))}
    </>
  );
};
