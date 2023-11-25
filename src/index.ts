require('tsconfig-paths').register();

import { TVector, TProgramConfiguration } from '~/types';
import App from './app';
import { Command } from 'commander';

const program = new Command();

program
  .description('Guide robot moving in warehouse')
  .option<TVector>(
    '-s, --warehouse-size <num>:<num>',
    'Warehouse grid size',
    gridSize => ({
      x: parseInt(gridSize.split(':')[0]),
      y: parseInt(gridSize.split(':')[1]),
    }),
    { x: 10, y: 10 },
  )
  .option<TVector>(
    '-p, --position <num>:<num>',
    'Initial position of the robot',
    initialPosition => ({
      x: parseInt(initialPosition.split(':')[0]),
      y: parseInt(initialPosition.split(':')[1]),
    }),
    { x: 1, y: 1 },
  )
  .requiredOption(
    '-c, --commands <string>',
    '[REQUIRED] Commands for robot to move \n' + 'Commands: N(North) S(South) E(East) W(West)\n' + 'eg. N E N E W S F\n',
  );

program.parse();

const options: TProgramConfiguration = program.opts();

const app = new App(options.warehouseSize, options.position, options.commands);
app.run();
