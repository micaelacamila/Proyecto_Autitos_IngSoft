export function executeCommands(commands){
    let grid =[5,5]
    if(commands.includes("/")){
        let elements=commands.split("/")
        commands=elements[0]
        let  literalGrid=elements[1]
        grid[0]=Number(literalGrid[0])
        grid[1]=Number(literalGrid[2])
    }
    
    let position = [0,0]
    let direction = " N";
    let quantityOfCommands = commands.length
    let currentPosition =0
    while(currentPosition<quantityOfCommands){
        let command = commands[currentPosition];
        if(command=="A"){
            currentPosition=currentPosition+1
            position=moveForward(direction,position,grid);
        }
        else{
            if(command=="I"){
                currentPosition=currentPosition+1
                direction=turnLeft(direction);
            }
            else{
                if(command=="D"){
                    currentPosition=currentPosition+1
                    direction= turnRight(direction);
                }   
                else{
                    currentPosition=currentPosition+1
                }
            }
        }
    }
    let finalPosition = ""+position[0]+","+position[1]+direction;
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