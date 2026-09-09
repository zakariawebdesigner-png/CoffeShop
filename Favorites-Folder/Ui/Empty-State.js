  


  function  EmptyState(FavoritesCoffees_Container){
        
if(FavoritesCoffees_Container.children.length==0){

const AnimationContainer=document.createElement("div");

AnimationContainer.className="empty-favorites-animation";

AnimationContainer.id="empty-favorites-animation";

const EmptyState_Text=document.createElement("h2");

EmptyState_Text.textContent="No Favorite yet";

EmptyState_Text.className="No";

lottie.loadAnimation({
    container: AnimationContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
  path: "./Ui/empty data.json"
});

FavoritesCoffees_Container.appendChild(AnimationContainer);
FavoritesCoffees_Container.appendChild(EmptyState_Text);



}


  }



  export{EmptyState}