var directions = require('./enums/directions.js')

/**
 * Valid MOVE is within the map (5x5)¨
 * @param {*} direction 
 * 
 * @returns boolean
 */
var isValidMove = function(position){
    //TODO: range is expressed two times, should have "map" object...
    var range = new Set([0,1,2,3,4])

    if(range.has(position.x) && range.has(position.y)){
        return true
    }
    else return false
}

/**
 * Valid directions are NORTH, EAST, SOUTH, WEST. Check enum directions.js
 * @param {*} direction 
 */
var isValidDirection = function(direction){
    if(direction == directions.NORTH || direction == directions.EAST || direction == directions.SOUTH || direction == directions.WEST){
        return true;
    }
    else return false;
}

/**
 * Commands for the robot 
 */
module.exports = {
    /**
     * Put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST
     * 
     * @param {number} x, e.g. 0-4
     * @param {number} y, 
     * @param {directions} direction, north, south, east, west
     * 
     * @returns position
     */
    place: function(x, y, direction){
        //Map is 5x5...
        var range = new Set([0,1,2,3,4])

        if(range.has(x) && range.has(y) && isValidDirection(direction)){
            var position = {
                'x': x, 
                'y': y, 
                'direction': direction
            }
            return position;
        }
        else{
            throw new Error("Invalid place action")
        }
    },

    /**
     * Reports current position
     * @param {*} position 
     */
    report: function(position){
        var report = "Output: " + position.x + "," + position.y + "," + position.direction
        console.log(report)
    },
    
    /**
     * Rotate the robot 90 degrees left
     * @param {*} position 
     * @returns position
     */
    turnLeft: function(position){
        switch(position.direction) {
            case directions.NORTH:
                position.direction = directions.WEST
                break;
            case directions.WEST:
                position.direction = directions.SOUTH
                break;
            case directions.SOUTH:
                position.direction = directions.EAST
                break;
            case directions.EAST:
                position.direction = directions.NORTH
                break;
            default:
                throw new Error("Could not turn left...")
        }
            
        return position
    },

    /**
     * Rotate the robot 90 degrees right
     * @param {*} position 
     * @returns position
     */
   turnRight: function(position){
        switch(position.direction) {
            case directions.NORTH:
                position.direction = directions.EAST
                break;
            case directions.EAST:
                position.direction = directions.SOUTH
                break;
            case directions.SOUTH:
                position.direction = directions.WEST
                break;
            case directions.WEST:
                position.direction = directions.NORTH
                break;
            default:
                throw new Error("Could not turn right...")
        }
            
        return position
    },

    /**
     * Move robot 1 "step" forward in current direction
     * @param {*} position
     * @returns position 
     */
    move: function(position){
        switch(position.direction) {
            case directions.NORTH:
                position.y = position.y + 1;                 
                break;
            case directions.EAST:
                position.x = position.x + 1;  
                break;
            case directions.SOUTH:
                position.y = position.y + -1;  
                break;
            case directions.WEST:
                position.x = position.x - 1;
                break;
            default:
                throw new Error("Could not MOVE forward in this direction")
        }

        if(isValidMove(position)){
            return position
        }
        else throw new Error("Not valid move")
    }
};