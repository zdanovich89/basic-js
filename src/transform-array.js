module.exports = function transform(arr) {

    let sortArr = [];
    if (!Array.isArray(arr)) {           
        throw new Error('Error');
    }

    else for (let i = 0; i < arr.length; i++) { 
  
        if (arr[i] == '--discard-next') {
            if (i!= (arr.length - 1)) {      
                i += 1;
            }            
        }           
        else if (arr[i] == '--discard-prev') {
            if (i != 0) {
                sortArr.pop();               
            }            
        } 
        else if (arr[i] == '--double-next') {  
            if (i!= arr.length - 1) {
                sortArr.push(arr[i + 1]); 
            }        
        }
        else if (arr[i] == '--double-prev') {
            if (i != 0) {   
                sortArr.push(arr[i - 1]);
            }           
        } 
        else (sortArr.push(arr[i]));
    }   
    return sortArr; 
};
