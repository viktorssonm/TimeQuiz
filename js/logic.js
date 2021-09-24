import { timeObject } from "./timeObject"

const timeQuiz = new timeObject()

// Question text
const questionText = document.querySelector(".start-time-text")
// Time to add to question 
const timeToAdd = document.querySelector(".start-time-question")

questionText.textContent = `Time ${(timeQuiz.startHour) }:${timeQuiz.startMinute}`;
timeToAdd.textContent = `Add ${timeQuiz.hourToChange}h ${timeQuiz.minuteToChange}min`
