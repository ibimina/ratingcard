//set ratings result page to display none
//get the form element
//add an event listener to the form element when the submit event occurs
// when a radio tag is click get the value
//set a condition to submit the form when a radio button is clicked
// when user submits the form either by the enter key or the submit button
// add the dispay none class to the ratings page
//display the ratings result page with the radio value  display

const submitForm = document.querySelector("form");
const text = document.querySelector(".ratings-text");
const ratingsResult = document.querySelector(".thankyou");
const ratingsPage = document.querySelector(".rate-us");

ratingsResult.classList.add("class", "display");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let ratings = submitForm.options.value;
  if (ratings) {
    console.log(ratings);
    ratingsPage.classList.add("class", "display");
    ratingsResult.classList.remove("class", "display");
    text.textContent = `You selected ${ratings} out of 5`;
  }
});
