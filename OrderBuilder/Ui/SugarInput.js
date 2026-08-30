 

import { SugarInput } from "../CalcElements.js"; 




    function SugarIncrease(){
 
       
      if(Number(SugarInput.value)==3){
            
         SugarInput.value==3;

      };
       SugarInput.value=Number(SugarInput.value)+1;
       
        
            
    }



    function SugarDecrease(){

      if(Number(SugarInput.value)==0)return;

SugarInput.value=Number(SugarInput.value)-1;

    }


    export{SugarIncrease,SugarDecrease}