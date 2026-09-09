  

    
  import { RemoveItem } from "../../Favorites-Folder/Data/Favorits-Data.js";
  //This function is responsible of extracting the dataset-name of the coffee,
  //after the user clicked the Like button on it , and push this name inside an array,
  //  So we can use these String names as a tool to find the liked coffees data,
  //  and use it after that in the Favorites page  
  
  
  
  
    function DeseelectLiked(e){
  
  
  let CoffeeContainer=null; //Stores the Container that holdes the Clikced Like button 
  
  if(e.currentTarget.closest(".coffe-container")){
   CoffeeContainer=e.currentTarget.closest(".coffe-container");
    
  }
  
  else{
   CoffeeContainer=e.currentTarget.closest(".Popular-container");
   
  }
  

   RemoveItem(CoffeeContainer);
  
  
    }
  
  
    export{DeseelectLiked}