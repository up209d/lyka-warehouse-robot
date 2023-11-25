import { TVector } from '~/types';

export interface IRobot {
  moveNorth: () => boolean;
  moveSouth: () => boolean;
  moveEast: () => boolean;
  moveWest: () => boolean;
  report: () => TVector;
}
