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

    reloadTask = () => {
        // Generate random start
        this.startHour = Math.floor(Math.random() * 23);
        this.startMinute = Math.floor(Math.random() * 59);
        // Create a new date object to act as base
        let startTime = new Date();
        startTime.setHours(this.startHour);
        startTime.setMinutes(this.startMinute);
        startTime.setSeconds = 0;

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
    };
}
