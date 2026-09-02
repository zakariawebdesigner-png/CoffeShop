
import { CheckTmeperater } from "../Validation/Checking-Temprater.js";
import { OrderObject } from "../Data/OrderRecord.js";
   function TempText(summary,tem){
       summary.textContent=tem;

          let CheckTempReturns=CheckTmeperater(OrderObject.CoffeeRecord,summary);

        if(CheckTempReturns.isValid==false){
            
             summary.textContent="☰ Choose the tempreture";
         };

        

   }

export{TempText}
   