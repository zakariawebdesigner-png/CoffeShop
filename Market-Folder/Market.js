 

const notification=document.getElementById("notification");


import { HeaderScrollEffect } from "./Ui/Header-Scrool-Style.js";
import { InitializeCoffeeMenue } from "./Ui/Coffee-Menue-Carousel.js";
import { toggle_label,NavBar} from "./Market-Elements.js"; 
import { NavAppear,NavDisappear } from "../Settings-Bar-Silde.js";


window.addEventListener("load",()=>{
 notification.classList.add("Scroll-Reverse");
 
              const ResultTitle=document.createElement("div");

                  ResultTitle.textContent="COFFEES";

             ResultTitle.className="ResultTitle";

               SearchResult_Container.appendChild(ResultTitle);


});

export let ToggleClicked=false;



window.addEventListener("scroll",()=>{

HeaderScrollEffect();

});
import { Search } from "./Input-Search-Display.js";
import { CreateElement } from "./CretaeInput.js";
import { Coffees } from "../OrderBuilder/Data/Coffee.js";
import { SearchResult_Container, SerachForCoffee } from "./Market-Elements.js";
import { URL_Transport } from "./Ui/URL-Handeling.js";
 let InputsNameArray=[];

InitializeCoffeeMenue();













SerachForCoffee.addEventListener("input",()=>{
    
         SearchResult_Container.style.opacity="1";
                  SearchResult_Container.style.pointerEvents="all";

                    Square.style.opacity="1";
                                        Square.style.poi="1";

   
  InputsNameArray=Search();


 CreateElement(InputsNameArray,Coffees);

if(SerachForCoffee.value==""){

  SearchResult_Container.innerHTML="";


}




toggle_label.addEventListener("click",()=>{

  if(ToggleClicked){
    NavDisappear(NavBar);
    ToggleClicked=!ToggleClicked;
  }
  else if(!ToggleClicked){
       NavAppear(NavBar);
           ToggleClicked=!ToggleClicked;

  }

});







});

SearchResult_Container.addEventListener("click",(event)=>{

  let ChoosedInput=event.target.closest(".CoffeeResult");

               if(!ChoosedInput)return;

      let InputsName=ChoosedInput.querySelector(".ResultName");

URL_Transport(InputsName.textContent);



});



import { RedHeart,TransparentHeart } from "./Ui/Like-effect.js";
import { MenueCoffee_Heart } from "./Market-Elements.js";






MenueCoffee_Heart.forEach(heart=>{
heart.dataset.Clicked=false; 

heart.addEventListener("click",(e)=>{
  
  
e.stopPropagation();


e.preventDefault();

if(heart.dataset.Clicked=="false"){

  
RedHeart(heart);
heart.dataset.Clicked="true";

}

       else if(heart.dataset.Clicked=="true"){
         

TransparentHeart(heart);
heart.dataset.Clicked="false";

}


});



});



