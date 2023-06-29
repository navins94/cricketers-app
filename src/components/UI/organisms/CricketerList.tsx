import React from "react";
import CricketerItem from "../molecules/CricketerItem";
import Grid from "@mui/material/Grid";
import { TPlayer } from "../../../types";

interface CricketerListProps {
  cricketers: TPlayer[];
  showAge?: boolean;
}

const CricketerList: React.FC<CricketerListProps> = ({
  cricketers,
  showAge,
}) => {
  return (
    <Grid container spacing={4} alignItems="stretch">
      {cricketers.map((cricketer) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={12 / 5}
          key={cricketer.id}
          sx={{ display: "flex" }}
        >
          <CricketerItem
            key={cricketer.id}
            cricketer={cricketer}
            showAge={showAge}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CricketerList;
