export enum EMoveCommand {
  N = 'N',
  S = 'S',
  E = 'E',
  W = 'W',
}

export type TVector = {
  x: number;
  y: number;
};

export type TProgramConfiguration = {
  warehouseSize: TVector;
  position: TVector;
  commands: string;
};
