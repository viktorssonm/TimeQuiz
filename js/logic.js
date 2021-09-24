import { timeObject } from "./timeObject";

const timeQuiz = new timeObject();

// Question text
const questionText = document.querySelector(".start-time-text");
// Time to add to question
const timeToAdd = document.querySelector(".start-time-question");

const submitButton = document.querySelector(".submit-button");

const timeInput = document.querySelector(".time-input");

// Set labels initally
questionText.textContent = `Time ${timeQuiz.startHour}:${timeQuiz.startMinute}`;
timeToAdd.textContent = `Add ${timeQuiz.hourToChange}h ${timeQuiz.minuteToChange}min`;

// Continue here with label
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(timeInput);
});
