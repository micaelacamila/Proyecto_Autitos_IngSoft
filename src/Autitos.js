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
            if(position[1]+1<=grid[1]){
                position[1]=position[1]+1
            }
        }
        else{
            if(command=="I"){
                currentPosition=currentPosition+1
                direction=getDirection(direction);
            }
            else{
                if(command=="D"){
                    currentPosition=currentPosition+1
                    //direction=" E";
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
                }
                
            }
        }
        
    }
    let finalPosition = ""+position[0]+","+position[1]+direction;
    return finalPosition;
}
function getDirection(direction){
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