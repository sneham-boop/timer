// Receive arguments from the terminal
let args = process.argv.slice(2);

// Filter anything that is not a number
// or negative number and convert to seconds
args = args
  .map((a) => Number.parseInt(a))
  .filter((a) => Number.isInteger(a) && a > 0)
  .map((a) => a * 1000);

// console.log(args);

// Function implementation for timer()
// Takes an array of numbers a beep is played at each interval.
const timer = (delay) => {
  delay.forEach((del) => {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, del);
  });
};

timer(args);
