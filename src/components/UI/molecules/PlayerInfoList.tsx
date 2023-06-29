import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { TPlayer } from "../../../types";
import { calculateAge, formatDate } from "../../../utils";
import { colorConfigs } from "../../../configs/colorConfigs";

interface PlayerInfoListProps {
  player: TPlayer;
  showAge?: boolean;
  showDob?: boolean;
}

const PlayerInfoList: React.FC<PlayerInfoListProps> = ({
  player,
  showAge = true,
  showDob = false,
}) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 120 }}>
          <Typography component="span" color="textSecondary" fontWeight="bold">
            Type:
          </Typography>
        </ListItemIcon>
        <ListItemText
          primary={player.type}
          sx={{
            textTransform: "capitalize",
            color: colorConfigs.primaryText,
          }}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 120 }}>
          <Typography component="span" color="textSecondary" fontWeight="bold">
            Points:
          </Typography>
        </ListItemIcon>
        <ListItemText
          primary={player.points}
          sx={{
            textTransform: "capitalize",
            color: colorConfigs.primaryText,
          }}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 120 }}>
          <Typography component="span" color="textSecondary" fontWeight="bold">
            Rank:
          </Typography>
        </ListItemIcon>
        <ListItemText
          primary={player.rank}
          sx={{
            textTransform: "capitalize",
            color: colorConfigs.primaryText,
          }}
        />
      </ListItem>
      {showDob && (
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 120 }}>
            <Typography
              component="span"
              color="textSecondary"
              fontWeight="bold"
            >
              Date of Birth:
            </Typography>
          </ListItemIcon>
          <ListItemText
            primary={formatDate(player.dob)}
            sx={{
              textTransform: "capitalize",
              color: colorConfigs.primaryText,
            }}
          />
        </ListItem>
      )}
      {showAge && (
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 120 }}>
            <Typography
              component="span"
              color="textSecondary"
              fontWeight="bold"
            >
              Age:
            </Typography>
          </ListItemIcon>
          <ListItemText
            primary={calculateAge(player.dob)}
            sx={{
              textTransform: "capitalize",
              color: colorConfigs.primaryText,
            }}
          />
        </ListItem>
      )}
    </List>
  );
};

export default PlayerInfoList;
