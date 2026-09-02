   

import { Coffees } from "../OrderBuilder/Data/Coffee.js";

import { SerachForCoffee,SearchResult_Container,Square } from "./Market-Elements.js";


function Search(){

    let Name=[];
    Coffees.forEach(coff=>{
                 
                   if(SerachForCoffee.value==""){
                    
                             SearchResult_Container.style.opacity="0";


                                        Square.style.opacity="0";

                    return;
                }

                      
             if(coff.Name.toLowerCase().startsWith(SerachForCoffee.value.toLowerCase())){
                console.log("letter:"+SerachForCoffee.value);
                   console.log("Coffee:"+coff.Name);

                    Name.push(coff.Name);
                  

             }

    });

    return Name;
 

};
export{Search}