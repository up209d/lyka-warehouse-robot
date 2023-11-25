import { IRobot } from '~/models/robots/types';
import { EMoveCommand } from '~/types';

export default class RobotController {
  public robot: IRobot;

  constructor(robot: IRobot) {
    this.robot = robot;
  }

  validateCommands(commands: string[]) {
    return commands.every((command, commandIndex) => {
      const isValid = command in EMoveCommand;
      if (!isValid) {
        console.log(`Command #${commandIndex} "${command}" is not valid!`);
      }
      return isValid;
    });
  }

  processCommands(commands: string[]): void {
    if (this.validateCommands(commands)) {
      commands.forEach((command, commandIndex) => {
        if (!this.processCommand(command)) {
          console.warn(`Command #${commandIndex} ${command} is skipped!`);
        }
      });
    } else {
      throw new Error(`Commands "${commands}" is not valid`);
    }
  }

  processCommand(command: string) {
    if (command === EMoveCommand.N) {
      return this.robot.moveNorth();
    }
    if (command === EMoveCommand.S) {
      return this.robot.moveSouth();
    }
    if (command === EMoveCommand.E) {
      return this.robot.moveEast();
    }
    if (command === EMoveCommand.W) {
      return this.robot.moveWest();
    }
    return false;
  }
}
