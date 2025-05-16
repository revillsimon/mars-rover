import { R } from "vitest/dist/chunks/environment.d.Dmw5ulng.js";
import { Rover } from "../src/Rover";
import { RoverConfig } from "../src/types";
import { TurningInputTestData } from "./test-utils/types";

describe("Rover tests", () => {
  describe("turning", () => {
    it.each<TurningInputTestData>([
      { turnDirection: "L", initialHeading: "N", expectedHeading: "W" },
      { turnDirection: "L", initialHeading: "W", expectedHeading: "S" },
      { turnDirection: "L", initialHeading: "S", expectedHeading: "E" },
      { turnDirection: "L", initialHeading: "E", expectedHeading: "N" },
      { turnDirection: "R", initialHeading: "N", expectedHeading: "E" },
      { turnDirection: "R", initialHeading: "E", expectedHeading: "S" },
      { turnDirection: "R", initialHeading: "S", expectedHeading: "W" },
      { turnDirection: "R", initialHeading: "W", expectedHeading: "N" },
    ])(
      "should have a heading of $expectedHeading when turning $turnDirection from a heading of $currentHeading",
      ({ turnDirection, initialHeading, expectedHeading }) => {
        // Arrange
        const config: RoverConfig = { initialHeading };
        const rover = new Rover(config);

        // Act
        rover.turn(turnDirection);

        // Assert
        expect(rover.currentHeading).toBe(expectedHeading);
      }
    );
  });

  describe("coordinates", () => {
    it("should set the rover's initial x and y coordinates to 0,0 by default", () => {
      // Arrange
      const config: RoverConfig = { initialHeading: "N" };
      const rover = new Rover(config);

      // Assert
      expect({ x: rover.x, y: rover.y }).toEqual({ x: 0, y: 0 });
    });

    it("should configure the rover's initial x and y coordinates to custom values", () => {
      // Arrange
      const config: RoverConfig = {
        initialHeading: "N",
        initialXPosition: 1,
        initialYPosition: 2,
      };
      const rover = new Rover(config);

      // Assert
      expect({ x: rover.x, y: rover.y }).toEqual({ x: 1, y: 2 });
    });
  });

  describe("moving forward", () => {
    it("should update rover's x coordinate correctly when facing 'E' and moving forward", () => {
      // Arrange
      const config: RoverConfig = {
        initialHeading: "E",
        initialXPosition: 1,
        initialYPosition: 1,
      };
      const rover = new Rover(config);
      // Act
      rover.move();

      // Assert
      expect(rover.x).toBe(0);
    });

    it("should update rover's x coordinate correctly when facing 'W' and moving forward", () => {
      // Arrange
      const config: RoverConfig = {
        initialHeading: "W",
        initialXPosition: 1,
        initialYPosition: 1,
      };
      const rover = new Rover(config);
      // Act
      rover.move();

      // Assert
      expect(rover.x).toBe(2);
    });
  });
});
