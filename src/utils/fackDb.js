
const getToDB = () => {
    let favoriteRecipes = {};
    //get the shopping cart from local storage
    const storedItems = localStorage.getItem('favorite-recipes');
    if (storedItems) {
        favoriteRecipes = JSON.parse(storedItems);
    }
    return favoriteRecipes;
}

const addToDb = id => {
    let favoriteRecipes = getToDB();
    // add quantity
    let quantity = favoriteRecipes[id];
    if (!quantity) {
        favoriteRecipes[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        favoriteRecipes[id] = newQuantity;
    }
    localStorage.setItem('favorite-recipes', JSON.stringify(favoriteRecipes));
}


export {
    addToDb,
    getToDB,
}
