export type Heading = "N" | "W" | "S" | "E";

export type TurnDirection = "L" | "R";

export type NextHeadingsLookup = Record<TurnDirection, Heading[]>;

export interface RoverConfig {
  initialHeading: Heading;
  initialXPosition: number;
  initialYPosition: number;
}

export interface MissionControlConfig {
  grid: string;
}

export type UpperRightPlateauCoordinates = {
  x: number;
  y: number;
};

export type ParsedGridCoordinates = [number, number];
