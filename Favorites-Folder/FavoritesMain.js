 

  import { SearchPic,SearchBar,bars,NavBar,FavoritesCoffees_Container } from "./Ui/Favorites-Elements.js";
  import { SearchBarAppear } from "./Ui/SearchBar-Appearence.js";
   
   import { NavAppear,NavDisappear } from "../Settings-Bar-Silde.js";
  let SearchPicClicked=false;


import { CreateFavorite } from "./Ui/Create-Favorite.js";
import { EmptyState } from "./Ui/Empty-State.js";
        import { LikedCoffeesArray, RemoveItem ,GetLikedStorage} from "./Data/Favorits-Data.js";







window.addEventListener("load",()=>{

           GetLikedStorage();

     


      CreateFavorite(LikedCoffeesArray);
 
     EmptyState(FavoritesCoffees_Container);

         


});


import { OrderFav } from "./Ui/Order-From-Favorite.js";
import { RemoveFavorite } from "./Ui/RemoveFav.js";

FavoritesCoffees_Container.addEventListener("click",(e)=>{

    let OrderFavorit=e.target.closest(".OrderFavorit");

        
    let trash=e.target.closest(".fa-solid.fa-trash-can");

        if(!OrderFavorit && !trash)return;

        if(OrderFavorit){
              let FavoriteCoffee= OrderFavorit.closest(".FavoriteCoffee");
        
               OrderFav(FavoriteCoffee.dataset.name);

        }

        else if(trash){

                let FavoriteCoffee= trash.closest(".FavoriteCoffee");
                 
                  RemoveFavorite(trash);
                 EmptyState(FavoritesCoffees_Container);
          RemoveItem(FavoriteCoffee);
         
            
        }
         





});


      

window.addEventListener("click",(e)=>{

    const SearchPic=e.target.closest(".SearchPic");

    const SearchBarElement=e.target.closest(".SearchBar");
        
            if(!SearchPic && !SearchBarElement && SearchPicClicked) {

                SearchBar.classList.remove("Appearence");
       
            
                      }

             
                                  
      });


   SearchPic.addEventListener("click",()=>{
    SearchPicClicked=true;
          SearchBarAppear();
    



   });

 let ToggleClicked=false;
   bars.addEventListener("click",(e)=>{

    const bars=e.target.closest(".bars");
    if(!bars)return;
     
     if(ToggleClicked){
        NavDisappear(NavBar);
        ToggleClicked=!ToggleClicked;
      }
      else if(!ToggleClicked){
           NavAppear(NavBar);
               ToggleClicked=!ToggleClicked;
    
      }
    


   });


   






