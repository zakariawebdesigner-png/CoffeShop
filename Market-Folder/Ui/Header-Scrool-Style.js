

import { SerachForCoffee,SearchContainer,toggle_label,notification,BrandName,Header } from "../Market-Elements.js";
import {NavDisappear} from "./Settings-Bar-Silde.js";
import { ToggleClicked } from "../Market.js";


function HeaderScrollEffect(){


      if(window.scrollY>50){
            
             Header.classList.add("background");

                SearchContainer.classList.remove("Scroll-Reverse");

                SearchContainer.classList.add("Scroll");
                     
                SerachForCoffee.style.display="none";

                toggle_label.style.color="White";

                notification.classList.remove("Scroll-Reverse");

              notification.classList.add("Scroll");

              BrandName.style.color="#dcd2c6";
              if(ToggleClicked){
                    NavDisappear();
                    toggle_label.click();
              }

               



      }


         else{
             Header.classList.remove("background");
                 SearchContainer.classList.remove("Scroll");
                    SerachForCoffee.style.display="block";

                SearchContainer.classList.add("Scroll-Reverse");

                notification.classList.remove("Scroll");

                    notification.classList.add("Scroll-Reverse");

              BrandName.style.color="black";
              
             

      }









}


export{HeaderScrollEffect}