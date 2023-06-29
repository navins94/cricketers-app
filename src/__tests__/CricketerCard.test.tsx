import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CricketerItem from "../components/UI/molecules/CricketerItem";
import { TPlayer } from "../types";

test("renders cricketer card correctly", () => {
  const player: TPlayer = {
    id: "_1",
    name: "Virat Kohli",
    description: "Test description",
    type: "batsman",
    points: 282,
    dob: 594691200000,
  };

  render(
    <Router>
      <CricketerItem cricketer={player} />
    </Router>
  );

  const linkElement = screen.getByText(/Virat Kohli/i);
  expect(linkElement).toBeInTheDocument();
});
