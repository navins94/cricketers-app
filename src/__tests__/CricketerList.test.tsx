import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CricketerList from "../components/UI/organisms/CricketerList";
import PlayerTypeFilter from "../components/UI/molecules/PlayerTypeFilter";
import SearchBar from "../components/UI/molecules/SearchBar";
import { TPlayer } from "../types";

test("renders player list", () => {
  const players: TPlayer[] = [
    {
      id: "_1",
      name: "Virat Kohli",
      description: "Test description",
      type: "batsman",
      points: 282,
      dob: 594691200000,
    },
    {
      id: "_2",
      name: "Rohit Sharma",
      description: "Test description",
      type: "batsman",
      points: 300,
      dob: 598066200000,
    },
  ];

  render(
    <Router>
      <CricketerList cricketers={players} />
    </Router>
  );

  players.forEach((player) => {
    if (player.name) {
      const playerElement = screen.getByText(new RegExp(player.name, "i"));
      expect(playerElement).toBeInTheDocument();
    }
  });
});

test("renders filter component correctly", () => {
  const mockHandlePlayerTypeChange = jest.fn();

  render(
    <PlayerTypeFilter
      playerType="all"
      handlePlayerTypeChange={mockHandlePlayerTypeChange}
    />
  );

  const selectElement = screen.getByRole("button");
  expect(selectElement).toBeInTheDocument();
});

test("renders search bar component correctly", () => {
  const mockHandleSearch = jest.fn();

  render(<SearchBar value="" onChange={mockHandleSearch} />);

  const inputElement = screen.getByPlaceholderText(/search/i);
  expect(inputElement).toBeInTheDocument();
  expect(mockHandleSearch).toHaveBeenCalledTimes(0);
});
