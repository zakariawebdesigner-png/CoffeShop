let Count=0;

import { small,midium,large,xl,xxl } from "../CalcElements.js";


 const  SizesArray=[small,midium,large,xl,xxl];


function HandleClicks(Size){

   Count+=1;

    SizesArray.forEach(element => {
        
          if(element!==Size){
            element.dataset.Clicked="false";
            Count=0;          //The counter tracks clicks on the size buttons. When a different size is clicked, the counter resets to 0. When the same size is clicked twice (Count === 2), that size's click is blocked. Choosing another size resets the counter, allowing clicks again.
          }
                
     });

   if(Count==2){
      Count=0;
                return Size.dataset.Clicked="true";

   };

   return Size.dataset.Clicked="false";

}

export{HandleClicks}