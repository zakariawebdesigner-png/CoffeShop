
import { FavoritesCoffees_Container } from "./Favorites-Elements.js";


function RemoveFavorite(trash){

         let CoffeeFav=trash.closest(".FavoriteCoffee");
           
          FavoritesCoffees_Container.removeChild(CoffeeFav);
          
}

export{RemoveFavorite}