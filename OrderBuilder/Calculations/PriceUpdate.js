import { OrderObject } from "../Data/OrderRecord.js";

 function PriceCounter(SizePrice,TempPrice,MilkPrice){

   OrderObject.OrderPrice=OrderObject.Price;

   OrderObject.OrderPrice+=SizePrice;

      OrderObject.OrderPrice+=TempPrice;

            OrderObject.OrderPrice+=MilkPrice;

            console.log("Inside f:"+OrderObject.OrderPrice);


    
 }


 export{PriceCounter}