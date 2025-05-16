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

    it("should", () => {});
  });
});
