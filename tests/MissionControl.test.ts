import { MissionControl } from "../src/MissionControl";
import { MissionControlConfig } from "../src/types";

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
  });
});
