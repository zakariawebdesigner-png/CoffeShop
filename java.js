const button = document.getElementById("Vesitor");

button.addEventListener("click", function () {

    // Add animation class
    document.body.classList.add("animate");
button.classList.add("rotateVisiter");

    // Wait for animation to finish then go to next page
    setTimeout(() => {
        window.location.href = "market-page.html";
    }, 2000); // 2 seconds (match your animation time)

});
const registerBtn = document.getElementById('registerBtn');
const form = document.querySelector('form');

registerBtn.addEventListener('click', () => {
  form.classList.add('active');
});


   














