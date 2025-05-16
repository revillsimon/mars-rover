import { Heading, TurnDirection } from "../../src/types";

export type TurningInputTestData = {
  turnDirection: TurnDirection;
  initialHeading: Heading;
  expectedHeading: Heading;
};
