


//This function checks the Stack of coffees if it contains the users Chosen Temperator

function CheckTmeperater(OrderedCoffe,TempName){


                           

         let TempIndex=OrderedCoffe.option.Tempreator.findIndex((temp)=>
                   temp.name==TempName
                   
       );

       let isValid= TempIndex!==-1;

      return {isValid,
               
              TempIndex
              };


}


export{CheckTmeperater}

