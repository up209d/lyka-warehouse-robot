import { TVector } from '~/types';
import Warehouse from '~/models/stages/Warehouse';
import RobotController from '~/controllers/RobotController';
import Robot from '~/models/robots/Robot';

export default class App {
  public warehouseSize: TVector;
  public initialPosition: TVector;
  public commands: string;

  constructor(warehouseSize: TVector, initialPosition: TVector, commands: string) {
    this.warehouseSize = warehouseSize;
    this.initialPosition = initialPosition;
    this.commands = commands;
  }

  run() {
    if (!this.commands) {
      console.log('Result: Nothing to move');
      return;
    }

    const board = new Warehouse(this.warehouseSize.x, this.warehouseSize.y);
    const robot = new Robot(this.initialPosition.x, this.initialPosition.y, board);

    console.log('------ BEGIN ------');
    console.log('ROBOT: ', robot.report());

    const robotController = new RobotController(robot);
    robotController.processCommands(this.commands.split(' '));

    console.log('------ END ------');
    console.log('ROBOT: ', robot.report());
  }
}
