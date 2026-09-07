function InitializeCoffeeMenue(){
  const CoffeeMenueContainer=document.querySelector(".CoffeeMenue-Container");
  const CoffeeMenue=document.querySelector(".coffee-menue");
  const CoffeeCards=CoffeeMenue.querySelectorAll(":scope > .coffe-container");
  const CoffeeSetSize=CoffeeCards.length/2;
  let CoffeeMenuePausedUntil=0;
  let CoffeeMenueLastTime=performance.now();
  let CoffeeMenueWritingScroll=false;

  function GetCoffeeLoopPoint(){
    return CoffeeCards[CoffeeSetSize].offsetLeft-CoffeeCards[0].offsetLeft;
  }

  function PauseCoffeeMenue(){
    CoffeeMenuePausedUntil=performance.now()+10000;
  }

  function PauseAndResumeCoffeeMenue(){
    PauseCoffeeMenue();
  }

  function HandleCoffeeMenuePointerMove(event){
    if(event.buttons>0){
      PauseAndResumeCoffeeMenue();
    }
  }

  function HandleCoffeeMenueScroll(){
    if(CoffeeMenueWritingScroll)return;

    const loopPoint=GetCoffeeLoopPoint();
    if(CoffeeMenueContainer.scrollLeft<=0){
      CoffeeMenueContainer.scrollLeft+=loopPoint;
    }
    else if(CoffeeMenueContainer.scrollLeft>=loopPoint){
      CoffeeMenueContainer.scrollLeft-=loopPoint;
    }

  }

  function HandleCoffeeMenueKeydown(event){
    if(event.key==="ArrowLeft" || event.key==="ArrowRight" || event.key==="Home" || event.key==="End"){
      PauseAndResumeCoffeeMenue();
    }
  }

  function MoveCoffeeMenue(currentTime){
    const elapsedTime=currentTime-CoffeeMenueLastTime;
    CoffeeMenueLastTime=currentTime;

    if(performance.now()>=CoffeeMenuePausedUntil){
      const loopPoint=GetCoffeeLoopPoint();
      CoffeeMenueWritingScroll=true;
      CoffeeMenueContainer.scrollLeft-=elapsedTime*0.025;

      if(CoffeeMenueContainer.scrollLeft<=0){
        CoffeeMenueContainer.scrollLeft+=loopPoint;
      }

      requestAnimationFrame(()=>{
        CoffeeMenueWritingScroll=false;
      });
    }

    requestAnimationFrame(MoveCoffeeMenue);
  }

  CoffeeMenueContainer.addEventListener("scroll",HandleCoffeeMenueScroll,{passive:true});
  CoffeeMenueContainer.addEventListener("wheel",PauseAndResumeCoffeeMenue,{passive:true});
  CoffeeMenueContainer.addEventListener("touchstart",PauseAndResumeCoffeeMenue,{passive:true});
  CoffeeMenueContainer.addEventListener("touchmove",PauseAndResumeCoffeeMenue,{passive:true});
  CoffeeMenueContainer.addEventListener("pointerdown",PauseAndResumeCoffeeMenue);
  CoffeeMenueContainer.addEventListener("pointermove",HandleCoffeeMenuePointerMove);
  CoffeeMenueContainer.addEventListener("keydown",HandleCoffeeMenueKeydown);
  requestAnimationFrame(MoveCoffeeMenue);
}

export{InitializeCoffeeMenue};
