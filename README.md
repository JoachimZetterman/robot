The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There
are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must
be prevented from falling to destruction. Any movement that would result in the robot falling from the table must
be prevented, however further valid movement commands must still be allowed.

Commands:
PLACE X,Y,F Put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST
MOVE Move the robot one unit forward in the direction it is currently facing
LEFT Rotate the robot 90 degrees left
RIGHT Rotate the robot 90 degrees right
REPORT Announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient

Author:
Joachim Zetterman
