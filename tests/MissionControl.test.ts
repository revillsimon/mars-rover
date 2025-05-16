import { MissionControl } from "../src/MissionControl";
import { MissionControlConfig } from "../src/types";
import { GridTestInput } from "./test-utils/types";

describe("MissionControl", () => {
  describe("initialise plateau grid", () => {
    it('should set up the upper-right coordinates of the plateau given an input of "5 5"', () => {
      // Arrange
      const config: MissionControlConfig = { grid: "5 5" };
      const missionControl = new MissionControl(config);

      // Assert
      expect(missionControl.upperRightPlateauCoordinates).toEqual({
        x: 5,
        y: 5,
      });
    });

    it.each<GridTestInput>(["", "1", "2 "])(
      "should throw error if there are less than 2 grid coordinate integers passed to the config",
      (grid) => {
        // Arrange
        const config: MissionControlConfig = { grid };

        // Assert
        expect(() => new MissionControl(config)).toThrowError(
          "Invalid grid coordinates detected in config. Please enter two positive integers greater than or equal to 2, separated by a space."
        );
      }
    );

    it.each<GridTestInput>(["1 2", "2 1"])(
      "should throw error if a specified plateau grid number is less than 2",
      (grid) => {
        // Arrange
        const config: MissionControlConfig = { grid };

        // Assert
        expect(() => new MissionControl(config)).toThrowError(
          "Invalid grid size detected in config. Grid dimensions must be greater than or equal to 2."
        );
      }
    );
  });
});
