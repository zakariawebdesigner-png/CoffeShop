 export let LikedCoffeesArray=[]; //The Array of Liked Coffees Names



  

//This function is responsible of Adding a new String (Coffee Name)
//  to LikedCoffeesArray(The Array of Liked Coffees Names) , In order to use this array later
//  as a database of the Liked Coffees to handle some functions using this array





  function AddItem(CoffeeContainer){

    LikedCoffeesArray.push(CoffeeContainer.dataset.name);
      localStorage.setItem("LikedCoffeesArray",JSON.stringify(LikedCoffeesArray));
 

  }






   


  function RemoveItem(CoffeeContainer){
     

   let IndexTo_Delete= LikedCoffeesArray.indexOf(CoffeeContainer.dataset.name);

       


       if(IndexTo_Delete!==-1){

        LikedCoffeesArray.splice(IndexTo_Delete, 1);

      }

     

   localStorage.setItem("LikedCoffeesArray",JSON.stringify(LikedCoffeesArray));

  }




 


 function GetLikedStorage(){

let TempArray=JSON.parse(localStorage.getItem("LikedCoffeesArray"))|| [];

 LikedCoffeesArray= TempArray;


 }




  export{RemoveItem,AddItem,GetLikedStorage}











