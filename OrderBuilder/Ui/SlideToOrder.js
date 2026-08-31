
    

   export  const SlidingRoad=document.getElementById("SlidingRoad");
      export  const SlideEnd=document.getElementById("SlideEnd");
             


           import { EndCoocking } from "../CalcElements.js";
       export   const SlideButton=document.getElementById("SlideButton");

       import { StopTickingSound,Ticking_SoundPlayer } from "./TickingSoundRepeat.js";
       
   let possition=0;
   let grabOffset=0;
    let Draging=false;
  function Slide(){

    window.addEventListener("load",()=>{
            SlidingRoad.appendChild(SlideButton);
    });

//The Part that is responsible forsliding the button

               

     SlideButton.addEventListener("pointerdown",(event)=>{
       
      console.log('entered');
      
        Draging=true;
                  Ticking_SoundPlayer(Draging);
              SlideButton.classList.remove("Slow");

        SlideButton.setPointerCapture(event.pointerId);

    const buttonRect = SlideButton.getBoundingClientRect();

        grabOffset = event.clientX - buttonRect.left;
            
        console.log("Draging started");
      
            

          });


            SlideButton.addEventListener("pointermove", (event) => {
                 const roadRect = SlidingRoad.getBoundingClientRect();
         possition = event.clientX - roadRect.left - grabOffset;
               SlideButton.style.left=`${possition}px`;


        console.log("Moving");

        
          
    });


      SlideButton.addEventListener("pointerup", (event) => {

           Draging=false; 

         StopTickingSound();

        const buttonRect = SlideButton.getBoundingClientRect();
const targetRect = SlideEnd.getBoundingClientRect();

const distance = Math.abs(buttonRect.left - targetRect.left);


          if(distance<20){


            SlideEnd.appendChild(SlideButton);
          
                  EndCoocking.currentTime=0;
                  EndCoocking.play();
               
                  console.log(SlideEnd);
                  SlideEnd.style.justifyContent="center";
                  SlideEnd.style.alignItems="center";
                  SlideButton.style.left=`${0}px`;

               SlideButton.style.pointerEvents="none";

          }

          else{
            
               SlideButton.style.left = "0px";
               SlideButton.classList.add("Slow");
               if(Number(SlideButton.style.left) ==0){
                 SlidingRoad.appendChild(SlideButton);
                 
                  
               }

               
       
          

          }

        

    });












}








export{Slide}
     


