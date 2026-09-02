   
import { Ticking } from "../CalcElements.js";
import { OrderObject } from "../Data/OrderRecord.js";




let isTicking=false;
function playTick() {
    if(!isTicking) return;
   Ticking.play();
        
Ticking.addEventListener("ended", () => {
    Ticking.currentTime = 0;
    Ticking.play();
});
}

function Ticking_SoundPlayer(){
  if(OrderObject.option.size.name==""){
        window.alert("Select first");
        
                 return false;
     }


    isTicking = true;
    playTick();                           // immediate tick on grab
    return true;
  
}

         function StopTickingSound(){

        Ticking.pause();
        Ticking.currentTime = 0;
         

    
  
    
}








export{Ticking_SoundPlayer,StopTickingSound}
      