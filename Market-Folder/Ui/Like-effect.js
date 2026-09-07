 

function RedHeart(heart){
    
heart.classList.remove("fa-regular","fa-heart");

heart.classList.add("fa-solid","fa-heart");

}

function TransparentHeart(heart){

heart.classList.remove("fa-solid","fa-heart");
heart.classList.add("fa-regular","fa-heart");

}


export{RedHeart,TransparentHeart}


