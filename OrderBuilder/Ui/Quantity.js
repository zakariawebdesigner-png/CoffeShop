     import { OrderObject } from "../Data/OrderRecord.js"; 

     function QuantityIncrease(QuantityInput){

         if(Number(QuantityInput.value)==4)return;

        QuantityInput.value=Number(QuantityInput.value)+1;

        OrderObject.Quantity=QuantityInput.value;
       
     }


      function QuantityDecrease(QuantityInput){

        if(Number(QuantityInput.value)==1)return;

        QuantityInput.value=Number(QuantityInput.value)-1;

                OrderObject.Quantity=QuantityInput.value;

     }

     export{QuantityIncrease,QuantityDecrease}