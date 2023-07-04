import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CricketerList from "../UI/organisms/CricketerList";
import usePlayers from "../../hooks/usePlayers";
import { useCricketersData } from "../../hooks/useCricketersData";
import SpinnerComponent from "../UI/atoms/Spinner";
import { Box, Grid, Typography } from "@mui/material";
import Pagination from "../UI/molecules/Pagination";
import SearchBar from "../UI/molecules/SearchBar";
import { Sorting } from "../UI/molecules/Sorting";
import { SortKey } from "../../types";
import PlayerTypeFilter from "../UI/molecules/PlayerTypeFilter";

const CricketersPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const { players, loading, error } = usePlayers();

  const initialPlayerType = searchParams.get("type") || "all";
  const initialSearchName = searchParams.get("q") || "";
  const initialSortKey = (searchParams.get("sortKey") as SortKey) || "name";
  const initialPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;

  const {
    paginatedPlayers,
    currentPage,
    totalPages,
    setCurrentPage,
    playerType,
    setPlayerType,
    searchName,
    setSearchName,
    sortKey,
    setSortKey,
  } = useCricketersData(
    players,
    initialSearchName,
    initialPlayerType,
    initialSortKey,
    initialPage,
    itemsPerPage
  );

  console.log(paginatedPlayers);

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (playerType !== "all") {
      newSearchParams.set("type", playerType);
    }
    if (searchName !== "") {
      newSearchParams.set("q", searchName);
    }

    const options = {
      search: newSearchParams.toString(),
    };
    navigate(options, { replace: true });
  }, [playerType, searchName]);

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
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <PlayerTypeFilter
                  playerType={playerType}
                  handlePlayerTypeChange={setPlayerType}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ py: 4, px: 2 }}>
        {paginatedPlayers.length === 0 ? (
          <Typography variant="h6" color="textSecondary">
            No results found
          </Typography>
        ) : (
          <>
            <CricketerList cricketers={paginatedPlayers} />
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
