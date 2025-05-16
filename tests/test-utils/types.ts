import { Heading, TurnDirection } from "../../src/types";

export type TurningInputTestData = {
  turnDirection: TurnDirection;
  initialHeading: Heading;
  expectedHeading: Heading;
};

export type MovingInputTestData = {
  initialHeading: Heading;
  expectedXPosition?: number;
  expectedYPosition?: number;
};

export type GridTestInput = string;
