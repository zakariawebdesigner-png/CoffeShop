   

   import { SugarInput } from "../CalcElements.js";
    

     import { OrderObject } from "../Data/OrderRecord.js"; 

    function SugarShots(){

         let SugarPriceReturned=0;

        if(Number(SugarInput.value)>=0){

        SugarPriceReturned=0;

        }


        if(Number(SugarInput.value)==0){

        OrderObject.option.Sugar.Shot="No Sugar";
        

        }

         else if(Number(SugarInput.value)==1){

        OrderObject.option.Sugar.Shot="1";

        }
         if(Number(SugarInput.value)==2){

        OrderObject.option.Sugar.Shot="2";

        }

         if(Number(SugarInput.value)==3){

        OrderObject.option.Sugar.Shot="3";

        }



    }


    export{SugarShots};