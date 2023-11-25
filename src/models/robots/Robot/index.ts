import Warehouse from '~/models/stages/Warehouse';
import { IRobot } from '~/models/robots/types';
import { TVector } from '~/types';
import { ROBOT_COORDINATE_ERROR_MESSAGE } from '~/models/robots/Robot/constants';

export default class Robot implements IRobot {
  protected cordX: number;
  protected cordY: number;
  public warehouse: Warehouse;

  constructor(initialCordX: number, initialCordY: number, warehouse: Warehouse) {
    if (!warehouse.validateCord(initialCordX, initialCordY)) {
      throw new Error(ROBOT_COORDINATE_ERROR_MESSAGE);
    }
    this.cordX = initialCordX;
    this.cordY = initialCordY;
    this.warehouse = warehouse;
  }

  moveNorth() {
    if (this.warehouse.validateCord(this.cordX, this.cordY - 1)) {
      this.cordY--;
      return true;
    }
    return false;
  }

  moveSouth() {
    if (this.warehouse.validateCord(this.cordX, this.cordY + 1)) {
      this.cordY++;
      return true;
    }
    return false;
  }

  moveEast() {
    if (this.warehouse.validateCord(this.cordX - 1, this.cordY)) {
      this.cordX--;
      return true;
    }
    return false;
  }

  moveWest() {
    if (this.warehouse.validateCord(this.cordX + 1, this.cordY)) {
      this.cordX++;
      return true;
    }
    return false;
  }

  report(): TVector {
    return { x: this.cordX, y: this.cordY };
  }
}
