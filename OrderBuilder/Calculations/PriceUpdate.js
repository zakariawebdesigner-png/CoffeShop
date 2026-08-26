 import { DisplayPrice } from "../Ui/PriceText.js";
   import { ptotal } from "../CalcElements.js";
import { OrderObject } from "../Data/OrderRecord.js";
   let CurrentPrice=0;
 function PriceCounter(Price){

CurrentPrice=OrderObject.Price;
    CurrentPrice+=Price;
       DisplayPrice(ptotal,CurrentPrice);

 }


 export{PriceCounter}