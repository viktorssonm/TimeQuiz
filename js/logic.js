import { timeObject } from "./timeObject";

const timeQuiz = new timeObject();

// Question text
const questionText = document.querySelector(".start-time-text");
// Time to add to question
const timeToAdd = document.querySelector(".start-time-question");

// Check button
const submitButton = document.querySelector(".submit-button");

// Time input
const timeInput = document.querySelector(".time-input");

// Add event listener to check button
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (timeQuiz.checkTime(timeInput.value)) {
        alert("Well done!");
        reloadQuestion();
    } else {
        alert("ERROR! Try again");
    }
});

const reloadQuestion = () => {
    // Reload timequiz with new task.
    timeQuiz.reloadTask();

    // Update values
    questionText.textContent = `Time ${timeQuiz.startHour}:${timeQuiz.startMinute}`;
    timeToAdd.textContent = `Add ${timeQuiz.hourToChange}h ${timeQuiz.minuteToChange}min`;
    timeInput.value = "";
};

reloadQuestion();
