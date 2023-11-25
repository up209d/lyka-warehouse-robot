import Warehouse from '~/models/stages/Warehouse';
import { IRobot } from '~/models/robots/types';
import Robot from '~/models/robots/Robot/index';
import { ROBOT_COORDINATE_ERROR_MESSAGE } from '~/models/robots/Robot/constants';

describe('Robot', () => {
  let warehouse: Warehouse;
  let robot: IRobot;

  beforeEach(() => {
    warehouse = new Warehouse(10, 10);
  });

  describe('constructor', () => {
    it('should create instance with proper initial coordinates', () => {
      expect(() => {
        new Robot(1, 1, warehouse);
      }).not.toThrow();
      expect(() => {
        new Robot(5, 5, warehouse);
      }).not.toThrow();
      expect(() => {
        new Robot(10, 10, warehouse);
      }).not.toThrow();
    });

    it('should throw error with invalid initial coordinates', () => {
      expect(() => {
        new Robot(-1, -1, warehouse);
      }).toThrow(ROBOT_COORDINATE_ERROR_MESSAGE);
      expect(() => {
        new Robot(0, 0, warehouse);
      }).toThrow(ROBOT_COORDINATE_ERROR_MESSAGE);
      expect(() => {
        new Robot(100, 100, warehouse);
      }).toThrow(ROBOT_COORDINATE_ERROR_MESSAGE);
    });
  });

  describe('moveEast', () => {
    it('should move east', () => {
      robot = new Robot(3, 3, warehouse);
      expect(robot.moveEast()).toEqual(true);
      expect(robot.report()).toEqual({ x: 2, y: 3 });
    });

    it('should NOT move east if out of boundary', () => {
      robot = new Robot(1, 1, warehouse);
      expect(robot.moveEast()).toEqual(false);
      expect(robot.report()).toEqual({ x: 1, y: 1 });
    });
  });

  describe('moveWest', () => {
    it('should move west', () => {
      robot = new Robot(3, 3, warehouse);
      expect(robot.moveWest()).toEqual(true);
      expect(robot.report()).toEqual({ x: 4, y: 3 });
    });

    it('should NOT move west if out of boundary', () => {
      robot = new Robot(10, 1, warehouse);
      expect(robot.moveWest()).toEqual(false);
      expect(robot.report()).toEqual({ x: 10, y: 1 });
    });
  });

  describe('moveNorth', () => {
    it('should move north', () => {
      robot = new Robot(3, 3, warehouse);
      expect(robot.moveNorth()).toEqual(true);
      expect(robot.report()).toEqual({ x: 3, y: 2 });
    });

    it('should NOT move north if out of boundary', () => {
      robot = new Robot(1, 1, warehouse);
      expect(robot.moveNorth()).toEqual(false);
      expect(robot.report()).toEqual({ x: 1, y: 1 });
    });
  });

  describe('moveSouth', () => {
    it('should move south', () => {
      robot = new Robot(3, 3, warehouse);
      expect(robot.moveSouth()).toEqual(true);
      expect(robot.report()).toEqual({ x: 3, y: 4 });
    });

    it('should NOT move south if out of boundary', () => {
      robot = new Robot(1, 10, warehouse);
      expect(robot.moveSouth()).toEqual(false);
      expect(robot.report()).toEqual({ x: 1, y: 10 });
    });
  });
});
