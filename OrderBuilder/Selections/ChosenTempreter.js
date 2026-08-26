  
   
  import { OrderObject } from "../Data/OrderRecord.js"; 
import { CheckTmeperater } from '../Validation/Checking-Temprater.js' ;


    function Temprater(SummaryText){

                 
                  
                  let CheckTempReturns=CheckTmeperater(OrderObject.CoffeeRecord,SummaryText);
                    
      if(CheckTempReturns.isValid==false){
        window.alert("Unvalid order");
        
      }
             
                  if(CheckTempReturns.isValid==false)return;         
         OrderObject.option.Tempreator.name=OrderObject.CoffeeRecord.option.Tempreator[CheckTempReturns.TempIndex].name;
                  OrderObject.option.Tempreator.Price=OrderObject.CoffeeRecord.option.Tempreator[CheckTempReturns.TempIndex].Price;

               






    }

  
export{ Temprater}

















