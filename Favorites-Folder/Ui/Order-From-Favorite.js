 


   function OrderFav(CoffeeName){

 CoffeeName= CoffeeName.replaceAll('"','');
 
     window.location.href=`../${CoffeeName}.html`;

   }

   export{OrderFav}