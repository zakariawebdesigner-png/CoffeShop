


function CheckExistMilk(CoffeRecord,MilkName){

         let MilkIndex=CoffeRecord.option.Milk.findIndex(milk=>
                    milk.name==MilkName  
                     
         );
       
         

           let isValid=MilkIndex!==-1;


        
           return {MilkIndex,isValid};



}

export{CheckExistMilk}