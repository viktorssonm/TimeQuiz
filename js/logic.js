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

// Answer container
const answerContainer = document.querySelector(".oldanswers-container");

// Add event listener to check button
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (timeQuiz.checkTime(timeInput.value)) {
        addAnswerToList(true, timeInput);
        reloadQuestion();
    } else {
        addAnswerToList(false, timeInput);
        reloadQuestion();
    }
});

// Reload question
const reloadQuestion = () => {
    // Reload timequiz with new task.
    timeQuiz.reloadTask();
    writeLogicToScreen();
};

// Update the answercontainer with a new child depemnding on answers
const addAnswerToList = (isCorrect, timeInput) => {
    const newAnswerContainer = document.createElement("div");
    newAnswerContainer.classList.add("answer-container-row");
    const newAnswertext = document.createElement("p");
    const iconElement = document.createElement("img");

    let timeInputSplitted = timeInput.value.split(":");
    if (isCorrect) {
        newAnswertext.textContent = `${timeQuiz.startHour}:${timeQuiz.startMinute} + ${timeQuiz.hourToChange}:${timeQuiz.minuteToChange} = ${timeInputSplitted[0]}:${timeInputSplitted[1]}`;
        iconElement.src = new URL("../img/check.svg", import.meta.url);
    } else {
        newAnswertext.textContent = `${timeQuiz.startHour}:${timeQuiz.startMinute} + ${timeQuiz.hourToChange}:${timeQuiz.minuteToChange} = ${timeInputSplitted[0]}:${timeInputSplitted[1]}`;
        iconElement.src = new URL("../img/alert.svg", import.meta.url);
    }
    iconElement.classList.add("icon");
    newAnswerContainer.append(newAnswertext);
    newAnswerContainer.append(iconElement);
    answerContainer.prepend(newAnswerContainer);
};

// Write question text to screen
const writeLogicToScreen = () => {
    questionText.textContent = `Time ${timeQuiz.startHour}:${timeQuiz.startMinute}`;
    timeToAdd.textContent = `Add ${timeQuiz.hourToChange}h ${timeQuiz.minuteToChange}min`;
    timeInput.value = "00:00";

    // First blur and then focus, to make sur selected digit is hour.
    timeInput.blur();
    timeInput.focus();
};

writeLogicToScreen();
console.log("******** NO CHEATING PLEASE **********");
