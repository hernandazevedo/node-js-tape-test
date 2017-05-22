module.exports = function(str, allCAPS,middleCharacter){
    
    if(!str){
        str = "";
    }
    
    if( allCAPS === true )
     str = str.toString().toUpperCase();
     
    if(!middleCharacter){
        middleCharacter = '*';
    }
    
    var edgeStr = '~'+ middleCharacter + '~';
    
    return edgeStr + (str.toString()) + edgeStr ;
}