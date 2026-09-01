

  const Header=document.getElementById("Header");
  const SearchContainer=document.getElementById("SearchContainer");
    const toggle_label=document.getElementById("toggle-label");
        const SerachForCoffee=document.getElementById("SerachForCoffee");



function HeaderScrollEffect(){


      if(window.scrollY>50){
            
             Header.classList.add("background");
                SearchContainer.classList.remove("Scrooll-Enverse");
                SearchContainer.classList.add("Scrooll");
                     
                SerachForCoffee.style.display="none";

                toggle_label.style.color="White";

      }


         else{
             Header.classList.remove("background");
                 SearchContainer.classList.remove("Scrooll");
                    SerachForCoffee.style.display="block";

                SearchContainer.classList.add("Scrooll-Enverse");
      }









}


export{HeaderScrollEffect}