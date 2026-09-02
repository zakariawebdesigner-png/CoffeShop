
 
  
   function URL_Transport(CoffeeName){

    if(CoffeeName.includes(" ")){
        CoffeeName=CoffeeName.replace(" ","-");
    }
          
window.location.href=`${CoffeeName}.html`;

   }


   export{URL_Transport}