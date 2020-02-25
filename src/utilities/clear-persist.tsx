/*
    clearPersist
    Utitlity function that clears or resets state that is marked with persist.
*/

const clearPersist = (key: string) => {
    localStorage.removeItem(key);
}

export default clearPersist;