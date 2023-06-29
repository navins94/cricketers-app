import React, { useEffect } from "react";
import CricketerList from "../UI/organisms/CricketerList";
import usePlayers from "../../hooks/usePlayers";
import SpinnerComponent from "../UI/atoms/Spinner";
import { Box, Typography } from "@mui/material";

const CricketersPage: React.FC = () => {
  const { players, loading, error, currentPage } = usePlayers();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Box
        sx={{
          py: 4,
          px: 2,
        }}
      >
        {players.length === 0 ? (
          <Typography variant="h6" color="textSecondary">
            No results found
          </Typography>
        ) : (
          <>
            <CricketerList cricketers={players} />
          </>
        )}
      </Box>
    </>
  );
};

export default CricketersPage;
