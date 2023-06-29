import React from "react";
import { TPlayer } from "../../../types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import { colorConfigs } from "../../../configs/colorConfigs";
import LinkComponent from "../atoms/Link";
import PlayerInfoList from "./PlayerInfoList";

interface CricketerItemProps {
  cricketer: TPlayer;
}

const CricketerItem: React.FC<CricketerItemProps> = ({ cricketer }) => {
  return (
    <Card sx={{ p: 2, background: colorConfigs.cardBg, borderRadius: "12px" }}>
      <Box sx={{ borderRadius: "4px", overflow: "hidden" }}>
        <CardMedia
          sx={{ height: 278 }}
          image="https://source.unsplash.com/random?wallpapers"
          title={`${cricketer.name}`}
        />
      </Box>
      <CardContent sx={{ px: 0, paddingBottom: "0px !important" }}>
        <Typography gutterBottom variant="h5" sx={{ m: 0 }}>
          <LinkComponent to={`/players/${cricketer.id}`} color="textSecondary">
            {cricketer.name}
          </LinkComponent>
        </Typography>
        <PlayerInfoList player={cricketer} />
      </CardContent>
    </Card>
  );
};

export default CricketerItem;
