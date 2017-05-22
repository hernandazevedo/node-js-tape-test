module.exports = function(food){
    
    if(food === 'chocolate')
        throw new Error('Cats cannot be fed with chocolate!');
    
    return 'yum';
}