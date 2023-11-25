import RobotController from '~/controllers/RobotController/index';
import Warehouse from '~/models/stages/Warehouse';
import Robot from '~/models/robots/Robot';

describe('RobotController tests', () => {
  let warehouse: Warehouse;
  let robot: Robot;
  let robotController: RobotController;

  beforeEach(() => {
    warehouse = new Warehouse(10, 10);
    robot = new Robot(1, 1, warehouse);
    robotController = new RobotController(robot);
  });

  describe('validateCommands', () => {
    it('should return TRUE if commands are valid', () => {
      expect(robotController.validateCommands(['W', 'E', 'W', 'N', 'S'])).toEqual(true);
    });
    it('should return FALSE if commands are invalid', () => {
      expect(robotController.validateCommands(['N', 'E', 'W', 'INVALID'])).toEqual(false);
      expect(robotController.validateCommands(['EEE', 'E', 'W', 'N', 'S'])).toEqual(false);
    });
  });

  describe('processCommands', () => {
    it('should process command as calling to correct robot moving method', () => {
      robot.moveEast = jest.fn();
      robot.moveWest = jest.fn();
      robot.moveSouth = jest.fn();
      robot.moveNorth = jest.fn();
      robotController.processCommands(['N', 'N', 'N', 'N', 'E', 'E', 'E', 'W', 'W', 'S']);
      expect(robot.moveSouth).toHaveBeenCalledTimes(1);
      expect(robot.moveWest).toHaveBeenCalledTimes(2);
      expect(robot.moveEast).toHaveBeenCalledTimes(3);
      expect(robot.moveNorth).toHaveBeenCalledTimes(4);
    });

    it('should process command as robot move to correct location', () => {
      robotController.processCommands(['N', 'N', 'N', 'N', 'E', 'E', 'E', 'W', 'W', 'S']);
      expect(robot.report()).toEqual({ x: 3, y: 2 });
      robotController.processCommands(['N', 'E']);
      expect(robot.report()).toEqual({ x: 2, y: 1 });
      robotController.processCommands(['W', 'S']);
      expect(robot.report()).toEqual({ x: 3, y: 2 });
    });

    it('should throw if command is not valid', () => {
      expect(() => {
        robotController.processCommands(['N', 'N', 'E', 'RRR']);
      }).toThrow();
      expect(() => {
        robotController.processCommands(['N', 'X', 'N', 'E', 'W']);
      }).toThrow();
      expect(() => {
        robotController.processCommands(['N', 'X', 'N', 'E', 'W']);
      }).toThrow();
    });
  });

  describe('processCommand', () => {
    it('should call correct robot method', () => {
      robot.moveNorth = jest.fn();
      robot.moveSouth = jest.fn();
      robot.moveWest = jest.fn();
      robot.moveEast = jest.fn();
      robotController.processCommand('N');
      robotController.processCommand('S');
      robotController.processCommand('E');
      robotController.processCommand('W');

      expect(robot.moveNorth).toHaveBeenCalledTimes(1);
      expect(robot.moveSouth).toHaveBeenCalledTimes(1);
      expect(robot.moveWest).toHaveBeenCalledTimes(1);
      expect(robot.moveEast).toHaveBeenCalledTimes(1);
    });
    it('should return FALSE if command is not valid', () => {
      expect(robotController.processCommand('NOT_VALID')).toEqual(false);
    });
  });
});
