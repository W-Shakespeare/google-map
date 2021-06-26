import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableCells } from "./TableCells";
import { Rows } from "./Rows";
import StyledTableContainer from "./StyledTable";

const useStyles = makeStyles({
  table: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#8080800a",
  },
});

export default function AcccessibleTable({ allSelectedMarker }) {
  const classes = useStyles();

  return (
    <>
      <StyledTableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCells allSelectedMarker={allSelectedMarker} />
            </TableRow>
          </TableHead>
          <TableBody>
            <Rows allSelectedMarker={allSelectedMarker} />
          </TableBody>
        </Table>
      </StyledTableContainer>
      )
    </>
  );
}
