var commands = require('./commands.js');
var fs = require('fs')

/**
 * Checks if command contains all parameters and that the parameters are valid
 * @param {*} line 
 */
var isValidParameters = function (line){
    var parameterSet = line.split(' ');

    if(parameterSet.length != 2){
        throw new Error("Not valid set of PLACE parameter. ")
    }

    var parameters = parameterSet[1].split(',')

    if(parameters.length != 3){
        throw new Error("Not valid PLACE parameters")
    }

    return parameters
}

module.exports = 
    /**
     * If the commands in the txt file is valid, Robot will listen...
     * 
     * Example: 
     * PLACE 0,0,NORTH
     * MOVE
     * RIGHT
     * REPORT
     * Output: 0,1,EAST
     * 
     * @param {*} filePath 
     * @returns {position} commandLog
     */
function executeCommand (filePath){
    var placed = false
    var position = null
    var commandLog = new Array()

    var text = fs.readFileSync(filePath, 'utf8')
    var textSplit = text.split('\n')

    for (var i = 0; i < textSplit.length; i++) { 
        
        //removes a hidden space for every line except the last
        if(i!=textSplit.length-1){
            textSplit[i] = textSplit[i].slice(0, -1); 
        }

        if(textSplit[i].includes('PLACE')){
            var parameters = isValidParameters(textSplit[i])
            position = commands.place(parseInt(parameters[0], 10), parseInt(parameters[1], 10), parameters[2])
            placed= true
        }
        else if(textSplit[i] === 'MOVE' && placed){
            position = commands.move(position)
        }
        else if(textSplit[i] === 'LEFT' && placed){
            position = commands.turnLeft(position)
        }
        else if(textSplit[i] === 'RIGHT' && placed){
            position = commands.turnRight(position)
        }
        else if(textSplit[i] === 'REPORT' && placed){
            commands.report(position)
        }
        else {
            throw new Error("Not supported command")
        }

        commandLog[i] = position
    }
    return commandLog
}