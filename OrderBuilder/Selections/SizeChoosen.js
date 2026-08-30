 
  

import { OrderObject } from "../Data/OrderRecord.js";

  function SizeChoosed(event){


            if(event.target.closest("#small")){

               
             OrderObject.option.size.name=OrderObject.CoffeeRecord.option.size[0].name;

               OrderObject.option.size.Price=OrderObject.CoffeeRecord.option.size[0].Price;
            


        }

       else if(event.target.closest("#midium")){

            OrderObject.option.size.name=OrderObject.CoffeeRecord.option.size[1].name;

               OrderObject.option.size.Price=OrderObject.CoffeeRecord.option.size[1].Price;
        }

       else if(event.target.closest("#large")){

                OrderObject.option.size.name=OrderObject.CoffeeRecord.option.size[2].name;

               OrderObject.option.size.Price=OrderObject.CoffeeRecord.option.size[2].Price;


                    }


       else if(event.target.closest("#xl")){

                OrderObject.option.size.name=OrderObject.CoffeeRecord.option.size[3].name;

               OrderObject.option.size.Price=OrderObject.CoffeeRecord.option.size[3].Price;




             }

         else if(event.target.closest("#xxl")){


                OrderObject.option.size.name=OrderObject.CoffeeRecord.option.size[4].name;

               OrderObject.option.size.Price=OrderObject.CoffeeRecord.option.size[4].Price;




                  }





  }


export{SizeChoosed};
