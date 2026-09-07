 

   import { SearchPic,SearchBar,bars } from "./Favorites-Elements.js";
   import { SearchBarAppear } from "./SearchBar-Appearence.js";
   
   import { NavAppear,NavDisappear } from "../Settings-Bar-Silde.js";
  let SearchPicClicked=false;
        

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



