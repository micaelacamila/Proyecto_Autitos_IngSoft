export function executeCommands(commands){
    let grid =[5,5]
    let position = [0,0]
    let direction = " N";
    let quantityOfCommands = commands.length
    let currentPosition =0
    while(currentPosition<quantityOfCommands){
        let command = commands[currentPosition];
        if(command=="A"){
            currentPosition=currentPosition+1
            if(direction==" N"){
                if(position[1]+1<=grid[1]){
                    position[1]=position[1]+1
                }
            }
            if(direction==" E"){
                if(position[0]+1<=grid[0]){
                    position[0]=position[0]+1
                }
            }
            if(direction==" O"){
                if(position[0]-1>=0){
                    position[0]=position[0]-1
                }
            }
            if(direction==" S"){
                if(position[1]-1>=0){
                    position[1]=position[1]-1
                }
            }
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