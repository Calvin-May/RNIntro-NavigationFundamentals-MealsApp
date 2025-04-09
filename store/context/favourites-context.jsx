import { createContext, useState } from 'react';

export const FavouritesContext = createContext({ 
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
 });

 function favouritesContextProvider( {children} ) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    function addToFavourites(id) {
        setFavouriteMealIds((currentFavouriteIds) => [...currentFavouriteIds, id]);
    }

    function removeFromFavourites(id) {
        setFavouriteMealIds((currentFavouriteIds) => 
            currentFavouriteIds.filter((mealId) => mealId !== id)
        );
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite: addToFavourites,
        removeFavourite: removeFromFavourites
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
 }

 export default favouritesContextProvider;