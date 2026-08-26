  
   




      let OrderObject={
        CoffeeRecord:null,
        id: Date.now(),
        Name: "",
        Price:0 ,

        option: {

            size:  { name:"" , Price:0  },
               
            

            Tempreator: 
                { name:"" , Price: 0 },

            Milk: 
                { name:"" , Price:0  },
     
            

            Sugar: 
                { Shot:"" , Price:0}
           
            
        },


               GetOrderName(){

                 return this.Name;

              }




    }



    export{OrderObject}