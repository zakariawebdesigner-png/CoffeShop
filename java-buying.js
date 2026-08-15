  const input1=document.getElementById("shugar");
const ptotal=document.getElementById("ptotal");

const pluss=document.getElementById("pluss");
const minus=document.getElementById("minus");

input1.value=0;
let price=0;
let totality=0;
function calculateprice( totality , price){

totality+=price;
return totality;

}

function decreaseprice(price,totality){

    return totality-=price;

}

pluss.onclick=function(){
 
if(Number(input1.value)==10){
input1.value=Number(input1.value)+0;

}


else{
    input1.value=Number(input1.value)+1;

}

if(Number(input1.value)% 2==0  && Number(input1.value)<10){

price=1;
    totality=calculateprice(totality , price);

    ptotal.value=totality+"$";

}

}

minus.onclick=function(){

  if(Number(input1.value)==0){
input1.value=Number(input1.value)-0;

  }

else{
 
 

if(Number(input1.value) % 2==0  ){

price=1;
totality=decreaseprice(price,totality);
ptotal.value=totality+"$";

}
  
    input1.value=Number(input1.value)-1;


}

  


}




const temprater= document.getElementById("summary");
const items=document.querySelectorAll(".li-temp");
items.forEach(li => {
li.addEventListener("click",function(){

     temprater.textContent=li.textContent;

});
});


const milk= document.getElementById("milk-sum");
const items2=document.querySelectorAll(".li");
items2.forEach(li => {
li.addEventListener("click",function(){

     milk.textContent=li.textContent;

});
});






 const input2=document.getElementById("shugar2");

const pluss2=document.getElementById("pluss2");
const minus2=document.getElementById("minus2");
let temp_totality=0;
input2.value=0;
let count2 =0;

function how_many_cups(totality,count2  ){

totality*=count2;
return totality;
}

function how_many_cups2(temp_totality,totality){

temp_totality-=totality;
return temp_totality;
}

pluss2.onclick=function(){


if(input2.value==4){
input2.value=Number(input2.value)+0;

}


else{
    input2.value=Number(input2.value)+1;
    count2=Number(input2.value);    

temp_totality=how_many_cups(totality,count2 );
ptotal.value=temp_totality+"$";
    

}

}


minus2.onclick=function(){

  if(input2.value==0){
  input2.value=Number(input2.value)-0;


  
  }

else{
    input2.value=Number(input2.value)-1;
    temp_totality=how_many_cups2(temp_totality,totality );
ptotal.value=temp_totality+"$";

}
}




const small=document.getElementById("small");
const midium=document.getElementById("midium");
const large=document.getElementById("large");
const xl=document.getElementById("xl");
const xxl=document.getElementById("xxl");

let previussize=0;
small.onclick=function(){
  previussize=price;
  totality-=previussize;
  price=3;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";

}



midium.onclick=function(){
    previussize=price;

  totality-=previussize;

  price=4;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";


}
large.onclick=function(){
    previussize=price;

  totality-=previussize;

  price=6;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";

}

xl.onclick=function(){
    previussize=price;

    totality-=previussize;

 price=9;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";

 
}
xxl.onclick=function(){
    previussize=price;

    totality-=previussize;

 price=12;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";

}

const milktype1=document.getElementById("milk1");
const milktype2=document.getElementById("milk2");
const milktype3=document.getElementById("milk3");
let previusmilk=0;
milktype1.addEventListener("click",function(){
      previusmilk=price;

    totality-=previusmilk;

 price=3;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";


});


milktype2.addEventListener("click",function(){
    previusmilk=price;

      totality-=previusmilk;

 price=7;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";



});


milktype3.addEventListener("click",function(){
      previusmilk=price;


      totality-=previusmilk;

 price=10;
  totality=calculateprice(totality , price);

    ptotal.value=totality+"$";


});

