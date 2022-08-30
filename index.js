const interactiverating = document.querySelector(".interactive-rating")
const thanksgiving = document.querySelector(".thanking")
const submitbutton = document.getElementsByClassName("submit")[0];
const ratebutton = document.getElementsByClassName("again")[0];
const rating = document.getElementsByClassName("num")[0];
const reviews = document.querySelectorAll(".rev")

submitbutton.addEventListener("click" ,() => {
    document.querySelector('.thanking').classList.remove('hidden');
    interactiverating.style.display="none"
});

ratebutton.addEventListener("click",() =>
{
    thanksgiving.classList.add('hidden');
interactiverating.style.display="block"
})

reviews.forEach(review => {
 review.addEventListener("click", () =>{
    rating.innerHTML=review.innerHTML
 }) 
});