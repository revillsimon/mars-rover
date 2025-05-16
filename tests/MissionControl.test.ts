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

    it.each<GridTestInput>(["-1 5", "1 -5"])(
      "should throw error if a specified plateau grid number is negative",
      (grid) => {
        // Arrange
        const config: MissionControlConfig = { grid };

        // Assert
        expect(() => new MissionControl(config)).toThrowError(
          "Negative grid number detected in config. Grid numbers must be positive integers."
        );
      }
    );
  });
});
