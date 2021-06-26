import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const Rows = ({ allSelectedMarker }) => {
  return (
    <>
      {allSelectedMarker.map((row, i) => {
        return (
          <TableRow key={i}>
            <TableCell align="center">{row["Installation date"]}</TableCell>
            <TableCell align="center">{row["Modified_Date"]}</TableCell>
            <TableCell align="center">{row["Account_Number"]}</TableCell>
            <TableCell align="center">{row["Latitude"]}</TableCell>
            <TableCell align="center">{row["Longitude"]}</TableCell>
            <TableCell align="center">{row["City"]}</TableCell>
            <TableCell align="center">{row["Total_Residents"]}</TableCell>
            <TableCell align="center">
              {row["Specical_Above_60_Residents"]}
            </TableCell>
            <TableCell align="center">{row["ATE_Installed_Room"]}</TableCell>
            <TableCell align="center">{row["Device_Type"]}</TableCell>
            <TableCell align="center">{row["Room_Description"]}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
