


import{Coffees} from '../Data/Coffee.js';
import { OrderObject } from '../Data/OrderRecord.js'; 
function SearchCoffee(bodyClass){

       if(!bodyClass)return;

       const Coffename= bodyClass.replace("-body","");
          //This initialises the object of the coffee ordered By the use inside CoffeeRecord
        OrderObject.CoffeeRecord=Coffees.find(cof=>(cof.Name).toLowerCase()==Coffename.toLowerCase());
        
              OrderObject.Name=bodyClass.replace("-body","");
       
                    OrderObject.Price=OrderObject.CoffeeRecord.Price;
              OrderObject.OrderPrice=OrderObject.CoffeeRecord.Price;


}

       


export{SearchCoffee};
    