
import { CheckExistMilk } from "../Validation/CheckingMilk.js"; 
 import { MilkHolder } from "../CalcElements.js";
   function MilkOrdered(OrderObject){

        let CheckMilkReturns=CheckExistMilk(OrderObject.CoffeeRecord,MilkHolder.textContent);
                           

               if(CheckMilkReturns.isValid==false){
                 
                   window.alert("Unvalid Milk");
          
                return;
                
               }
                OrderObject.option.Milk.name=OrderObject.CoffeeRecord.option.Milk[CheckMilkReturns.MilkIndex].name;
                  OrderObject.option.Milk.Price=OrderObject.CoffeeRecord.option.Milk[CheckMilkReturns.MilkIndex].Price;
                           
                 




   }

   export{MilkOrdered}