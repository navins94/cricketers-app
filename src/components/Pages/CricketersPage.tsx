import React, { useEffect } from "react";
import CricketerList from "../UI/organisms/CricketerList";
import usePlayers from "../../hooks/usePlayers";
import SpinnerComponent from "../UI/atoms/Spinner";
import { Box, Grid, Typography } from "@mui/material";
import Pagination from "../UI/molecules/Pagination";
import SearchBar from "../UI/molecules/SearchBar";
import { Sorting } from "../UI/molecules/Sorting";

const CricketersPage: React.FC = () => {
  const {
    players,
    loading,
    error,
    currentPage,
    totalPages,
    setCurrentPage,
    searchName,
    setSearchName,
    sortKey,
    setSortKey,
  } = usePlayers();

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
      <Box sx={{ py: 0, px: 2 }}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <SearchBar value={searchName} onChange={setSearchName} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <Sorting value={sortKey} setSortKey={setSortKey} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
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
            <Box
              sx={{
                py: 2,
                px: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(_, page) => setCurrentPage(page)}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default CricketersPage;
