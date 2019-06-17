var robot = require('../src/robot.js');

function testPlace(){
    console.log(" ")
    var position1 = {
        'x': 0, 
        'y': 0, 
        'direction': 'NORTH'
    }
    var testPath = __dirname + '\\testCommands\\place.txt' //PLACE 0,0,NORTH
    
    var position2=robot(testPath)
    console.log('executeCommand()[0] should contain position object with 0,0,NORTH')
    console.log(JSON.stringify(position1) + ' should equal ' + JSON.stringify(position2[0]))
    

    if(JSON.stringify(position1) == JSON.stringify(position2[0])){
        console.log("Passed")
        return true;
    }
    else{
        console.log("Failed")
        return false;
    }
}

function testMove(){
    console.log(" ")
    var position1 = {
        'x': 0, 
        'y': 1, 
        'direction': 'NORTH'
    }
    var testPath = __dirname + '\\testCommands\\move.txt' //PLACE 0,0,NORTH
    
    var position2= robot(testPath)
    console.log('executeCommand()[1] should contain position object with 0,1,NORTH')
    console.log(JSON.stringify(position1) + ' should equal ' + JSON.stringify(position2[1]))

    if(JSON.stringify(position1) == JSON.stringify(position2[1])){
        console.log("Passed")
        
        return true;
    }
    else{
        console.log("Failed")
        return false;
    }
}

function testTurnLeft(){
    console.log(" ")
    var position1 = {
        'x': 0, 
        'y': 0, 
        'direction': 'WEST'
    }
    var testPath = __dirname + '\\testCommands\\turnleft.txt' //PLACE 0,0,NORTH
    
    var position2= robot(testPath)
    console.log('executeCommand()[1] should contain position object with 0,0,WEST')
    console.log(JSON.stringify(position1) + ' should equal ' + JSON.stringify(position2[1]))

    if(JSON.stringify(position1) == JSON.stringify(position2[1])){
        console.log("Passed")
        return true;
    }
    else{
        console.log("Failed")
        return false;
    }
}

function testTurnRight(){
    console.log(" ")
    var position1 = {
        'x': 0, 
        'y': 0, 
        'direction': 'EAST'
    }
    var testPath = __dirname + '\\testCommands\\turnright.txt' //PLACE 0,0,NORTH
    
    var position2= robot(testPath)
    console.log('executeCommand()[1] should contain position object with 0,0,EAST')
    console.log(JSON.stringify(position1) + ' should equal ' + JSON.stringify(position2[1]))

    if(JSON.stringify(position1) == JSON.stringify(position2[1])){
        console.log("Passed")
        return true;
    }
    else{
        console.log("Failed")
        return false;
    }
}

function testCommandBeforePlace(){
    console.log(" ")
    var msg = 'Not supported command';
    var testPath = __dirname + '\\testCommands\\commandBeforePlace.txt' //PLACE 0,0,NORTH

    try{        
        robot(testPath)
    }
    catch(err){
        console.log(err.message + ' should equal ' + msg)
        if(msg === err.message){
            console.log('Passed')
            return true
        }
        else {
            console.log('Failed')
            return false
        }
    }
}

function testsNotValidMove(){
    console.log(" ")
    var msg = 'Not valid move'
    var testPath = __dirname + '\\testCommands\\notValidMove.txt' //PLACE 0,0,NORTH
    
    try{        
        robot(testPath)
    }
    catch(err){
        console.log(err.message + ' should equal ' + msg)
        if(msg === err.message){
            console.log('Passed')
            return true
        }
        else {
            console.log('Failed')
            return false
        }
    }
}

function testsNotValidPlace(){
    console.log(" ")
    var msg = 'Invalid place action'
    var testPath = __dirname + '\\testCommands\\notValidPlace.txt' //PLACE 0,0,NORTH
    
    try{        
        robot(testPath)
    }
    catch(err){
        console.log(err.message + ' should equal ' + msg)
        if(msg === err.message){
            console.log('Passed')
            return true
        }
        else {
            console.log('Failed')
            return false
        }
    }
}

/**
 * Only tested on windows env
 */
function runTests(){
    var tests = 0; 
    
    if(testPlace()){
        tests++
    }
    if(testMove()){
        tests++
    }
    if(testTurnLeft()){
        tests++
    }
    if(testTurnRight()){
        tests++
    }
    if(testCommandBeforePlace()){
        tests++
    }
    if(testsNotValidMove()){
        tests++
    }
    if(testsNotValidPlace()){
        tests++
    }
    
    console.log('-----UNIT TEST RESULT-----')
    if(tests===7){
        console.log('OK')
    }
    else{
        console.log(7-tests + ' of 7 tests failed')
    }
}

runTests()

