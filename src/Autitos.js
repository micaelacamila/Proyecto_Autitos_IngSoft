export function executeCommands(commands){
    //return "0,1 N"
    let grid =[5,5]
    let position = [0,0]
    let direction = " N";
    let quantityOfCommands = commands.length
    let currentPosition =0
    while(currentPosition<quantityOfCommands){
        if(position[1]+1<=grid[1]){
            position[1]=position[1]+1
        }
        currentPosition=currentPosition+1
    }
    return ""+position[0]+","+position[1]+direction;
}