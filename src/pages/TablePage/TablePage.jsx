import React from "react";
import StyledTablePage from "./StyledTablePage";
import AcccessibleTable from "../../utils/material/table/Table";
import { PickMarker } from "../../components/PickMarker/PickMarker";

const TablePage = ({ allSelectedMarker }) => {
  return (
    <StyledTablePage>
      {allSelectedMarker ? (
        <AcccessibleTable allSelectedMarker={allSelectedMarker} />
      ) : (
        <PickMarker />
      )}
    </StyledTablePage>
  );
};

export default TablePage;
