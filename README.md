# Lyka Coding Exercise

### Part One - First Round Technical Test - Warehouse Robot

#### Assumption:
- Program is set up to take in commands to guide the robot moving in the warehouse
- One command will be skipped to next command if it causes the robot to move out of the boundary
- Commands sequence will be dropped as whole if there is any invalid command
- Result output is the concluded coordinates of the robot in the warehouse
- Warehouse grid size is default to 10x10 and the robot will start at coordinates of 1:1
- Coordinate system is running from left to right, down to bottom start from 1:1 to 10:10

### Quick Start

#### Install dependency
```
yarn
```

#### Run program
```
yarn start [options]
```

Eg.
```
yarn start -s 10:10 -p 1:1 -c "S W S W N E"

Output:
------ BEGIN ------
ROBOT:  { x: 1, y: 1 }
------ END ------
ROBOT:  { x: 2, y: 2 }
```

```
Options:
  -s, --warehouse-size <num>:<num>  Warehouse grid size (default: {"x":10,"y":10})
  -p, --position <num>:<num>        Initial position of the robot (default: {"x":1,"y":1})

  -c, --commands <string>           [REQUIRED] Commands for robot to move
                                    Commands: N(North) S(South) E(East) W(West)
                                    eg. N E N E W S

  -h, --help                        Display help for command

```

### Run unit test
```
yarn test:unit
```

### Run compiling test
```
yarn test:compile
```
