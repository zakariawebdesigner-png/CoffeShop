 

 import { NavBar } from "../Market-Elements.js";


 function NavAppear(){
    NavBar.classList.add("Slide");
   

 }

 function NavDisappear(){
    NavBar.classList.remove("Slide");
   

 }



export{NavAppear,NavDisappear}