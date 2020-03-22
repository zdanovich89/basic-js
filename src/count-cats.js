module.exports = function countCats(matrix) {
    let count = 0;  
    let newArr =[];
    matrix.forEach(item => {
        return newArr = newArr.concat(item);
    })
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] == "^^") {            
            count++;
        }             
    }
    // newArr.forEach(item => {
    //     if(item =="^^") {
    //         return count++;
    //     }        
    // })   
    return count;
};
