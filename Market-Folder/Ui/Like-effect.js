



//These 2 unctions one for adding the style of solid heart
//  and the other for adding  a regular heart , the method is grouping
//  all the coffees containers from the menue and the most popular container
//   in one array using querySelectorAll and then compare the dataset of the container
//  where the heart  was clicked with all containers in the previes array to find all occurances
//  of the same coffee in order to make all the other hearts of all ocurences clicked


function RedHeart(heart){

let CoffeeMenue=document.querySelectorAll(".coffe-container , .Popular-container") ;


        let CoffeeContainer= heart.closest(".coffe-container") || heart.closest(".Popular-container");

            
                    CoffeeMenue.forEach(C=>{

                      if(CoffeeContainer.dataset.name==C.dataset.name){
                                     let heart2=C.querySelector(".MenueCoffee-Heart");
                                        let HeartsArray=[heart2,heart];

                                        HeartsArray.forEach(H=>{
                                                 H.classList.remove("fa-regular","fa-heart");

                                                  H.classList.add("fa-solid","fa-heart");
                                        });

                                  }


                    });
             

                     

}




function TransparentHeart(heart){

let CoffeeMenue=document.querySelectorAll(".coffe-container , .Popular-container") ;


        let CoffeeContainer= heart.closest(".coffe-container") || heart.closest(".Popular-container");

            
                    CoffeeMenue.forEach(C=>{

                      if(CoffeeContainer.dataset.name==C.dataset.name){
                                     let heart2=C.querySelector(".MenueCoffee-Heart");
                                        let HeartsArray=[heart2,heart];

                                        HeartsArray.forEach(H=>{
                                                 H.classList.remove("fa-solid","fa-heart");
                                             H.classList.add("fa-regular","fa-heart");
                                        });

                                  }


                    });
             

                     

                        
                               


}


export{RedHeart,TransparentHeart}


