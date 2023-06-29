import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams, useNavigate } from "react-router-dom";
import ButtonComponent from "../UI/atoms/Button";
import SpinnerComponent from "../UI/atoms/Spinner";
import PlayerInfoList from "../UI/molecules/PlayerInfoList";
import CricketerList from "../UI/organisms/CricketerList";
import usePlayers from "../../hooks/usePlayers";
import { colorConfigs } from "../../configs/colorConfigs";

export default function MediaControlCard() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { allPlayers, loading, error } = usePlayers();
  const player = allPlayers.find((player) => player.id === id);

  const getSimilarPlayers = () => {
    if (!player) return [];
    return allPlayers
      .filter((p) => p.type === player.type && p.id !== player.id)
      .slice(0, 5);
  };

  const similarPlayers = getSimilarPlayers();

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box sx={{ py: 0, px: 2 }}>
      <ButtonComponent
        variant="outlined"
        color={"info"}
        startIcon={<ArrowBackIosIcon />}
        onClick={() => navigate(-1)}
      >
        Back to Cricketers
      </ButtonComponent>
      {!player && !loading ? (
        <div>Player not found</div>
      ) : (
        <>
          <Card sx={{ display: "flex", mt: 4 }}>
            <CardMedia
              component="img"
              sx={{ width: "40%" }}
              image="https://source.unsplash.com/random?wallpapers"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                background: colorConfigs.cardBg,
                p: 4,
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="h1" variant="h1">
                  {player?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {player?.description}
                </Typography>{" "}
                <Box sx={{ py: 2 }}>
                  <PlayerInfoList player={player || {}} showDob={true} />
                </Box>
              </CardContent>
            </Box>
          </Card>
          {similarPlayers.length > 0 && (
            <Box sx={{ py: 2 }}>
              <Typography
                gutterBottom
                variant="h5"
                color="textSecondary"
                sx={{
                  m: 0,
                  p: 4,
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                similar players
              </Typography>
              <CricketerList cricketers={similarPlayers} showAge={false} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
