

export const Coffees = [

    {
        id: 1,
        Name: "Espresso",
        Price: 120,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name:"Hott", Price: 0 }
            ],

            Milk: [
                { name: "No Milk", Price: 0 },
                { name: "Regular Milk", Price: 20 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { Shot: "No Sugar", Price: 0 },
                { Shot: "1", Price: 0 },
                { Shot: "2", Price: 0 },
                { Shot: "3", Price: 0 }
            ]
        },


               GetOrderName(){

                 return this.Name;

              }




    },


    {
        id: 2,
        Name: "Americano",
        Price: 150,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hott", Price: 0 },
                { name: "Warm", Price: 0 },
                { name: "Iced", Price: 20 }
            ],

            Milk: [
                { name: "No Milk", Price: 0 },
                { name: "Regular Milk", Price: 20 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 3,
        Name: "Latte",
        Price: 220,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hott", Price: 0 },
                { name: "Warm", Price: 0 },
                { name: "Iced", Price: 20 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 },
                { name: "No Milk", Price: 0 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 4,
        Name: "Flat White",
        Price: 230,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hott", Price: 0 },
                { name: "Warm", Price: 0 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 5,
        Name: "Cappuccino",
        Price: 220,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hott", Price: 0 },
                { name: "Warm", Price: 0 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 6,
        Name: "Macchiato",
        Price: 150,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hott", Price: 0 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 30 },
                { name: "Almond Milk", Price: 40 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 7,
        Name: "Mocha",
        Price: 250,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hot", Price: 0 },
                { name: "Warm", Price: 0 },
                { name: "Iced", Price: 20 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 8,
        Name: "Cortado",
        Price: 180,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hot", Price: 0 },
                { name: "Warm", Price: 0 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 9,
        Name: "Lungo",
        Price: 140,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hot", Price: 0 },
                { name: "Warm", Price: 0 }
            ],

            Milk: [
                { name: "No Milk", Price: 0 },
                { name: "Regular Milk", Price: 20 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 10,
        Name: "Ristretto",
        Price: 130,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hot", Price: 0 }
            ],

            Milk: [
                { name: "No Milk", Price: 0 },
                { name: "Regular Milk", Price: 20 },
                { name: "Oat Milk", Price: 40 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 11,
        Name: "Cold Brew",
        Price: 250,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Cold", Price: 0 }
            ],

            Milk: [
                { name: "No Milk", Price: 0 },
                { name: "Regular Milk", Price: 20 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 12,
        Name: "Iced Coffee",
        Price: 220,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Cold", Price: 0 },
                { name: "Iced", Price: 0 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 },
                { name: "No Milk", Price: 0 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 13,
        Name: "Galão",
        Price: 200,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hot", Price: 0 },
                { name: "Warm", Price: 0 }
            ],

            Milk: [
                { name: "Regular Milk", Price: 0 },
                { name: "Oat Milk", Price: 40 },
                { name: "Almond Milk", Price: 50 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 14,
        Name: "Viennese Coffee",
        Price: 260,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Hot", Price: 0 },
                { name: "Warm", Price: 0 }
            ],

            Milk: [
                { name: "No Milk", Price: 0 },
                { name: "Regular Milk", Price: 20 },
                { name: "Oat Milk", Price: 40 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    },


    {
        id: 15,
        Name: "Affogato",
        Price: 280,

        option: {

            size: [
                { name: "Small", Price: 0 },
                { name: "midium", Price: 10 },
                { name: "Large", Price: 15 },
                { name: "XL", Price: 20 },
                { name: "XXL", Price: 30 }
            ],

            Tempreator: [
                { name: "Cold", Price: 0 }
            ],

            Milk: [
                { name: "No Milk", Price: 0 }
            ],

            Sugar: [
                { name: "No Sugar", Price: 0 },
                { name: "1 spoon", Price: 0 },
                { name: "2 spoons", Price: 0 },
                { name: "3 spoons", Price: 0 }
            ]
        },

        GetOrderName(){
            return this.Name;
        }
    }

];



