 
import { CheckExistMilk } from "../Validation/CheckingMilk.js";
import { OrderObject } from "../Data/OrderRecord.js";

 function MilkText(summary,Milk){

    summary.textContent=Milk.textContent;
            let CheckMilkReturns=CheckExistMilk(OrderObject.CoffeeRecord,summary.textContent);

         if(CheckMilkReturns.isValid==false){
            
             summary.textContent="☰ Choose milk";
         };

    



 }

 export{MilkText}