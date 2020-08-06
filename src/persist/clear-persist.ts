/*
    clearPersist
    Utitlity function that clears or resets state that is marked with persist.
*/

const clearPersist = (key: string) => {
    
    try{
        if(typeof key !== 'string'){
            throw new TypeError('clearPersist must take a string');
        }
    }catch(error){
        throw error;
    }

    localStorage.removeItem(key);
}

export default clearPersist;