module.exports = function countCats(matrix) {
    let count = 0;  
    let newArr =[];
    matrix.forEach(item => {
        return newArr = newArr.concat(item);
    })
    newArr.forEach(item => {
        if(item =="^^") {
            return count++;
        }        
    })   
    return count;  
};
