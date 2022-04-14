// Receive arguments from the terminal
let args = process.argv.slice(2);

// Function implementation for timer:
// Takes an array of numbers received as strings
// from the terminal. A beep is played at each interval
// in the array.
const timer = (delay) => {
  delay.forEach((del) => {
    // Convert each string element to number
    del = Number.parseInt(del);

    // Convert to seconds
    del *= 1000;

    // Call a setTimeout for each element of the array
    setTimeout(() => {
      process.stdout.write("\x07");
    }, del);
  });
};

// Function call for timer
timer(args);
