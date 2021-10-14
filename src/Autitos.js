export function executeCommands(commands){
    
    let elements = getElements(commands)

    commands=elements[0]
    let grid=elements[1]
    let gridPosition=elements[2]

    grid=getGridSize(grid);
    let direction=getDirection(gridPosition);
    gridPosition=getGridPosition(gridPosition);

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
            case "S":{
                currentPosition=currentPosition+1;
                //console.log("Grid y"+gridPosition[1])
                if(gridPosition[1]+2<=grid[1]){
                    //console.log("Ingresa")
                    gridPosition[1]=gridPosition[1]+2;
                }
                
                break;
            }
            default:{
                //The command is ignored
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

    let grid=""
    let gridPosition =""

    if(commands.includes("/")){
        let parts=commands.split("/")
    
        commands=parts[0]
        if(parts.length>=2){
            grid=parts[1]
        }
        if(parts.length==3){
            gridPosition=parts[2]
        }
    }
    else{
        commands=commands;
    }
    elements[0]=commands;
    elements[1]=grid;
    elements[2]=gridPosition;
    return elements;  
}
function getGridSize(literalGrid){
    let grid=[5,5]
    if(literalGrid!=""){
        grid[0]=Number(literalGrid[0])
        grid[1]=Number(literalGrid[2])
    }   
    return grid;
}
function getDirection(literalGridPosition){
    let direction=" N"
    if(literalGridPosition!=""){
        direction=" "+literalGridPosition[3]
    }
    return direction;
}
function getGridPosition(literalGridPosition){
    let gridPosition=[0,0]
    if(literalGridPosition!=""){
        gridPosition[0]=Number(literalGridPosition[0])
        gridPosition[1]=Number(literalGridPosition[2])
    }
    return gridPosition;           
}