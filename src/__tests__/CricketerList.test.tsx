import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CricketerList from "../components/UI/organisms/CricketerList";
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
