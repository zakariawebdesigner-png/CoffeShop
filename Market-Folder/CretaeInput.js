
     import { SearchResult_Container } from "./Market-Elements.js";

      function CreateElement(CoffeeName,Coffees){

        if(!CoffeeName)return;



              CoffeeName.forEach(CoffName => {
                


                  let TheCoffee=Coffees.find(coff=>coff.Name==CoffName);

        
            const Line=document.createElement("div");

            Line.className="Line";
               SearchResult_Container.appendChild(Line);


  const CoffeeResult=document.createElement("div");
            CoffeeResult.id="CoffeeResult";
            CoffeeResult.className="CoffeeResult";
               SearchResult_Container.appendChild(CoffeeResult);
              

 const ResultPic=document.createElement("div");

            ResultPic.className="ResultPic";

            ResultPic.style.backgroundImage=`url("./Images/${CoffName}.jpg")`;

            console.log(ResultPic.style.backgroundImage);
            
               CoffeeResult.appendChild(ResultPic);
               

                const ResultText=document.createElement("div");

            ResultText.className="ResultText";
               CoffeeResult.appendChild(ResultText);


               const ResultIdentity=document.createElement("div");

            ResultIdentity.className="ResultIdentity";
               ResultText.appendChild(ResultIdentity);


const ResultName=document.createElement("p");
             ResultName.textContent=TheCoffee.Name;
            ResultName.className="ResultName";
               ResultIdentity.appendChild(ResultName);


               const ResultDescription=document.createElement("p");
                ResultDescription.textContent="Creamy Flavor with hazeelnuts";
            ResultDescription.className="ResultDescription";
               ResultIdentity.appendChild(ResultDescription);


               
                const Arrow_And_Price=document.createElement("div");

            Arrow_And_Price.className="Arrow-And-Price";
               ResultText.appendChild(Arrow_And_Price);

               
               
                const ResultPrice=document.createElement("div");
                    ResultPrice.textContent=TheCoffee.Price+"$";
            ResultPrice.className="ResultPrice";
               Arrow_And_Price.appendChild(ResultPrice);


                    const ResultArrow=document.createElement("div");

            ResultArrow.className="ResultArrow";
               Arrow_And_Price.appendChild(ResultArrow);

                          
                    const Arrowi=document.createElement("i");

            Arrowi.className="Arrowi";
            Arrowi.classList.add("fa-solid" ,"fa-chevron-right")
               ResultArrow.appendChild(Arrowi);

       
                     console.log(CoffeeResult);
               


             
              });



      
      }


      export{CreateElement};