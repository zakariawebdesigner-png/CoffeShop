import { pluss,minus, ptotal, SugarInput, small, midium,large,xl,xxl } from "./OrderBuilder/CalcElements.js";
import { SugarIncrease,SugarDecrease } from './OrderBuilder/Ui/SugarInput.js' ;
import { SizesHolder } from "./OrderBuilder/CalcElements.js"; 
import { SizeChoosed } from "./OrderBuilder/Selections/SizeChoosen.js";
import{SugarShots} from './OrderBuilder/Selections/Shots-Initialzer.js';

import { SearchCoffee } from "./OrderBuilder/Selections/ChosenOrder.js";
 import { summary,Temprator } from "./OrderBuilder/CalcElements.js"; 
import { Temprater } from "./OrderBuilder/Selections/ChosenTempreter.js";
import { TempText } from "./OrderBuilder/Ui/TempTextContent.js";
import { MilkHolder } from "./OrderBuilder/CalcElements.js";
import { milktype1,milktype2,milktype3,milktype4 } from "./OrderBuilder/CalcElements.js";
import { MilkText } from "./OrderBuilder/Ui/MilkTextConten.js";
import { OrderObject } from "./OrderBuilder/Data/OrderRecord.js";
import { pluss2,minus2 } from "./OrderBuilder/CalcElements.js";
import { Quantity } from "./OrderBuilder/CalcElements.js";
   import { QuantityIncrease,QuantityDecrease } from "./OrderBuilder/Ui/Quantity.js";
   import { QuantityPrice } from "./OrderBuilder/Selections/QuantityPrice-Init.js";
import { MilkOrdered } from "./OrderBuilder/Selections/ChosenMilk.js";
import { HandleClicks } from "./OrderBuilder/Validation/Cheking-Clicks.js";
import { PriceCounter } from "./OrderBuilder/Calculations/PriceUpdate.js";



window.addEventListener("load",()=>{

      SearchCoffee(document.body.className);
      ptotal.value=OrderObject.Price;

      Quantity.value=1;
  

});




//This initialize the name and the price of the sugar  added to the orderRecord

//The Stop inside some Listeners makes sure to prevent calling functions for no reason at all


pluss.addEventListener("click",()=>{

      if(Number(SugarInput.value>=3))return;
    SugarIncrease();


SugarShots();


});



//This initialize the name and the price of the sugar  added to the orderRecord
minus.addEventListener("click",()=>{
SugarDecrease();
SugarShots();


});



//This initialize the name and the price of the size  choosen
SizesHolder.addEventListener("click",(event)=>{

      
   let Size=event.target.closest("button");


     HandleClicks(Size);

     if(Size.dataset.Clicked=="true")return;

      SizeChoosed(event);

  PriceCounter(OrderObject.option.size.Price,OrderObject.option.Tempreator.Price,OrderObject.option.Milk.Price);
    ptotal.value=QuantityPrice(OrderObject.OrderPrice,Number(Quantity.value));

 
});


//This initialize the name and the price of the tempreator  choosen
   Temprator.forEach(tem=>{
   tem.addEventListener("click",()=>{
         TempText(summary,tem.textContent);
      


   });
   });






 Temprator.forEach(tem=>{

   tem.addEventListener("click",()=>{

      
              Temprater(tem.textContent);

              PriceCounter(OrderObject.option.size.Price,OrderObject.option.Tempreator.Price,OrderObject.option.Milk.Price);
   
              ptotal.value=QuantityPrice(OrderObject.OrderPrice,OrderObject.Quantity);

   });
   


   });


   let ArrayOfMilks=[milktype1,milktype2,milktype3,milktype4];

   ArrayOfMilks.forEach(milk=>{

       milk.addEventListener("click",()=>{

            MilkText(MilkHolder,milk);


       });
   
   });


     ArrayOfMilks.forEach(milk=>{

       milk.addEventListener("click",()=>{

            MilkOrdered(OrderObject);
            
              PriceCounter(OrderObject.option.size.Price,OrderObject.option.Tempreator.Price,OrderObject.option.Milk.Price);
                  
                 ptotal.value=QuantityPrice(OrderObject.OrderPrice,OrderObject.Quantity);



       });

   });


pluss2.addEventListener("click",()=>{

 if(Number(Quantity.value)==4)return;

       QuantityIncrease(Quantity);

       ptotal.value=QuantityPrice(OrderObject.OrderPrice,OrderObject.Quantity);

             PriceCounter(OrderObject.option.size.Price,OrderObject.option.Tempreator.Price,OrderObject.option.Milk.Price);
                   
                console.log(OrderObject);



});

minus2.addEventListener("click",()=>{
           
      QuantityDecrease(Quantity);
       ptotal.value=QuantityPrice(OrderObject.OrderPrice,OrderObject.Quantity);
       
                PriceCounter(OrderObject.option.size.Price,OrderObject.option.Tempreator.Price,OrderObject.option.Milk.Price);
  

   
});



























