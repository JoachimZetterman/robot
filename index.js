var robot = require('./src/robot.js')

function run(){
    try{
        if(process.platform === 'win32'){
            robot(__dirname + '\\examples\\exampleA.txt')
        }
    }
    catch(error){
        console.error(error)
    }
}

run()