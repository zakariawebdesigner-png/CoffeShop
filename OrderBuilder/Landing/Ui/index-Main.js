const button = document.getElementById("Vesitor");
import{FormAppear} from './FormAppearence.js';
import{registerBtn} from '../indexJs-Elements.js';
import{DisappearForm} from '../indexJs-Elements.js';
import { HideTheForm } from './Hide-Form.js';


button.addEventListener("click", function () {

  
    document.body.classList.add("animate");
button.classList.add("rotateVisiter");

    // Wait for animation to finish then go to next page
    setTimeout(() => {
        window.location.href = "market-page.html";
    }, 2000); // 2 seconds (match your animation time)

});


registerBtn.addEventListener('click', () => {
 
    FormAppear();


});



DisappearForm.addEventListener("click",()=>{


HideTheForm();


});




   














