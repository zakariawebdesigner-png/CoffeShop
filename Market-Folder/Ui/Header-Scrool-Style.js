

import { SearchForCoffee,SearchContainer,toggle_label,BrandName,Header } from "../Market-Elements.js";
import {NavDisappear} from "../../Settings-Bar-Silde.js";
import { ToggleClicked } from "../Market.js";


function HeaderScrollEffect(){


      if(window.scrollY>50){
            
             Header.classList.add("background");

                SearchContainer.classList.remove("Scroll-Reverse");

                SearchContainer.classList.add("Scroll");
                     
                SearchForCoffee.style.display="none";

                toggle_label.style.color="White";

                

            

              BrandName.style.color="#dcd2c6";
              if(ToggleClicked){
                    NavDisappear(NavBar);
                    toggle_label.click();
              }

               



      }


         else{
             Header.classList.remove("background");
                 SearchContainer.classList.remove("Scroll");
                    SearchForCoffee.style.display="block";

                SearchContainer.classList.add("Scroll-Reverse");

             

                  

              BrandName.style.color="black";
              
             

      }









}


export{HeaderScrollEffect}