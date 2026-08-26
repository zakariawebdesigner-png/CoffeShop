import { pluss,minus, ptotal } from "./OrderBuilder/CalcElements.js";
import { SugarIncrease,SugarDecrease } from './OrderBuilder/Ui/SugarInput.js' ;
import { SizesHolder } from "./OrderBuilder/CalcElements.js"; 
import { SizeChoosed } from "./OrderBuilder/Selections/SizeChoosen.js";
import{SugarPrice} from './OrderBuilder/Calculations/SugarPriceAdded.js';

import { SearchCoffee } from "./OrderBuilder/Selections/ChosenOrder.js";
 import { summary,Temprator } from "./OrderBuilder/CalcElements.js"; 
import { Temprater } from "./OrderBuilder/Selections/ChosenTempreter.js";
import { TempText } from "./OrderBuilder/Ui/TempTextContent.js";
import { MilkHolder } from "./OrderBuilder/CalcElements.js";
import { milktype1,milktype2,milktype3,milktype4 } from "./OrderBuilder/CalcElements.js";
import { MilkText } from "./OrderBuilder/Ui/MilkTextConten.js";
import { OrderObject } from "./OrderBuilder/Data/OrderRecord.js";

window.addEventListener("load",()=>{

      SearchCoffee(document.body.className);
      ptotal.value=OrderObject.Price;
  

});





//This initialize the name and the price of the sugar  added to the orderRecord

pluss.addEventListener("click",()=>{
SugarIncrease();

SugarPrice();


});



//This initialize the name and the price of the sugar  added to the orderRecord
minus.addEventListener("click",()=>{
SugarDecrease();
SugarPrice();

});


//This initialize the name and the price of the size  choosen
import { PriceCounter } from "./OrderBuilder/Calculations/PriceUpdate.js";
SizesHolder.addEventListener("click",(event)=>{

      
      SizeChoosed(event);

      PriceCounter(OrderObject.option.size.Price);

});


//This initialize the name and the price of the tempreator  choosen
   Temprator.forEach(tem=>{
   tem.addEventListener("click",()=>{

         TempText(summary.textContent,tem.textContent);
      


   });

   });



 Temprator.forEach(tem=>{
   tem.addEventListener("click",()=>{

      

              Temprater(tem.textContent);

                      PriceCounter(OrderObject.option.Tempreator.Price);

   });
   
   

   });


   let ArrayOfMilks=[milktype1,milktype2,milktype3,milktype4];

   ArrayOfMilks.forEach(milk=>{

       milk.addEventListener("click",()=>{

            MilkText(MilkHolder,milk);


       });
   
   });

import { MilkOrdered } from "./OrderBuilder/Selections/ChosenMilk.js";

     ArrayOfMilks.forEach(milk=>{

       milk.addEventListener("click",()=>{

            MilkOrdered(OrderObject);

            console.log(OrderObject);


       });
   
   });

























