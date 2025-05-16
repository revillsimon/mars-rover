import { Heading, TurnDirection } from "../../src/types";

export type TurningInputTestData = {
  turnDirection: TurnDirection;
  currentHeading: Heading;
  expectedHeading: Heading;
};
