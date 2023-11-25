import { WAREHOUSE_DEFAULT_SIZE, WAREHOUSE_SIZE_ERROR_MESSAGE } from '~/models/stages/Warehouse/constants';

export default class Warehouse {
  public readonly sizeX: number;
  public readonly sizeY: number;

  constructor(sizeX: number = WAREHOUSE_DEFAULT_SIZE, sizeY: number = WAREHOUSE_DEFAULT_SIZE) {
    if (!sizeX || !sizeY || sizeX <= 0 || sizeY <= 0) {
      throw new Error(WAREHOUSE_SIZE_ERROR_MESSAGE);
    }
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  validateCord(cordX: number, cordY: number) {
    return !!cordX && !!cordY && cordX >= 1 && cordX <= this.sizeX && cordY >= 1 && cordY <= this.sizeY;
  }
}
