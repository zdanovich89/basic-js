module.exports = function createDreamTeam(members) {   
     if (Array.isArray(members)) {
        let newArr = [];
        let dreamTeam;
        members.forEach(item => {   
            if(typeof item == "string") {
                newArr.push(item.trim().toUpperCase()[0]);                                              
            }                          
        })
        newArr.sort();         
        dreamTeam = newArr.join('');         
        return dreamTeam;  
     }    
    return false;
};