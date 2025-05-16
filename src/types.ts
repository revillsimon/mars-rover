export type Heading = "N" | "W" | "S" | "E";

export type TurnDirection = "L" | "R";

export type NextHeadingsLookup = Record<
  TurnDirection,
  Record<Heading, Heading>
>;

export interface RoverConfig {
  initialHeading: Heading;
}
