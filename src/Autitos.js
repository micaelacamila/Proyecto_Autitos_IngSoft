export function executeCommands(commands){
    
    let elements = getElements(commands)

    commands=elements[0]
    let direction=elements[1]
    let grid=elements[2]
    let gridPosition=elements[3]
    let quantityOfCommands = commands.length
    let currentPosition =0

    while(currentPosition<quantityOfCommands){
        let command = commands[currentPosition];
        switch (command){
            case "A":{
                currentPosition=currentPosition+1
                gridPosition=moveForward(direction,gridPosition,grid);
                break;
            }
            case "I":{
                currentPosition=currentPosition+1
                direction=turnLeft(direction);
                break;
            }
            case "D":{
                currentPosition=currentPosition+1
                direction= turnRight(direction);
                break;
            }
            default:{
                console.log("Command no entra "+command)
                currentPosition=currentPosition+1
                break;
            }
        }
    }
    let finalPosition = ""+gridPosition[0]+","+gridPosition[1]+direction;
    return finalPosition;
}
function turnLeft(direction){
    switch(direction){
        case " N": {
            direction=" O";
            break;}
        case " O":{
            direction=" S"
            break;
        }
        case " S":{
            direction=" E"
            break;
        }
        case " E":{
            direction=" N"
            break;
        }
    }
    return direction;
}
function turnRight(direction){
    switch(direction){
        case " N":{
            direction=" E"
            break;
        }
        case " E":{
            direction=" S"
            break;
        }
        case " S":{
            direction=" O"
            break;
        }
        case " O":{
            direction=" N"
            break;
        }
    }
    return direction;
}
function moveForward(direction,position,grid){
    switch (direction){
        case " N":{
            if(position[1]+1<=grid[1]){
                position[1]=position[1]+1
            }
            break;
        }
        case " E":{
            if(position[0]+1<=grid[0]){
                position[0]=position[0]+1
            }
            break;
        }
        case " O":{
            if(position[0]-1>=0){
                position[0]=position[0]-1
            }
            break;
        }
        case " S":{
            if(position[1]-1>=0){
                position[1]=position[1]-1
            }
            break;
        }

    }
    return position;
}
function getElements(commands){
    let elements=[]

    let grid=[5,5]
    let direction=" N"
    let gridPosition =[0,0]

    if(commands.includes("/")){
        let parts=commands.split("/")
    
        commands=parts[0]
        if(parts.length>=2){
            let  literalGrid=parts[1]
            grid[0]=Number(literalGrid[0])
            grid[1]=Number(literalGrid[2])
        }
        if(parts.length==3){
            let  literalGridPosition=parts[2]
            gridPosition[0]=Number(literalGridPosition[0])
            gridPosition[1]=Number(literalGridPosition[2])
            direction=" "+literalGridPosition[3]
        }
    }
    else{
        commands=commands;
    }
    elements[0]=commands;
    elements[1]=direction;
    elements[2]=grid;
    elements[3]=gridPosition;
    return elements;  
}