export class timeObject {
    // When initially constructed create new task
    constructor() {
        this.reloadTask();
    }

    // Generate a random hour and minute to add to the date
    generateTimeToChange = () => {
        const hour = Math.floor(Math.random() * 23);
        const minute = Math.floor(Math.random() * 59);
        return [hour, minute];
    };

    // Function to check for correct answer with time input from HTML input type time.
    checkTime = (timeInput) => {
        let timeInputSplitted = timeInput.replace("0", "").split(":");
        if (
            timeInputSplitted[0] === String(this.correctHour) &&
            timeInputSplitted[1] === String(this.correctMinute)
        ) {
            return true;
        } else {
            return false;
        }
    };

    reloadTask = () => {
        // Generate random start
        this.startHour = String(Math.floor(Math.random() * 23)).padStart(
            2,
            "0"
        );
        this.startMinute = String(Math.floor(Math.random() * 59)).padStart(
            2,
            "0"
        );

        // Create a new date object to act as base
        let startTime = new Date();
        startTime.setHours(this.startHour);
        startTime.setMinutes(this.startMinute);
        startTime.setSeconds = 0;

        // Generate random timechange
        const timeToChange = this.generateTimeToChange();
        const timeToAdjust = timeToChange[0] * 3600 + timeToChange[1] * 60;

        // Set global variable to correct time as string, add zero before single value
        this.hourToChange = String(timeToChange[0]).padStart(2, "0");
        this.minuteToChange = String(timeToChange[1]).padStart(2, "0");

        // Add the amount of seconds converting to ms by x 1000
        const calculatedNewDate =
            new Date().setTime(startTime) + timeToAdjust * 1000;

        // Create a new correct Date object
        const newCorrectDate = new Date(calculatedNewDate);

        // Assign correct values to global variables.
        this.correctHour = newCorrectDate.getHours();
        this.correctMinute = newCorrectDate.getMinutes();

        console.log(this.correctHour, "", this.correctMinute);
    };
}
