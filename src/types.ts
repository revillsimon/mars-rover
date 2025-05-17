export type Heading = "N" | "W" | "S" | "E";

export type TurnDirection = "L" | "R";

export type NextHeadingsLookup = Record<TurnDirection, Heading[]>;

export interface RoverConfig {
  initialHeading: Heading;
  initialXPosition: number;
  initialYPosition: number;
}

export type GridInput = `${number} ${number}`;

export type RoverInput = `${number} ${number} ${Heading}`;

export interface MissionControlConfig {
  grid: GridInput;
  roverA: RoverInput;
}

export type PlateauCoordinates = {
  x: number;
  y: number;
};

export type RoverPosition = {
  x: number;
  y: number;
  heading: Heading;
};

export type ParsedGridCoordinates = [number, number];

export type NextMoveLocationLookup = Record<Heading, number>;

export type ParsedRoverCoordinates = [number, number, Heading];
