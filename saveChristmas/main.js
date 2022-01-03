// Can Santa save Christmas?

// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?
// Your Task:

// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

function determineTime(durations) {
  const convertHours = durations.map((x) => {
    let arr = x.split(":");
    return arr[0];
  });
  return convertHours;
}

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"])); // true
console.log(determineTime([])); // true
console.log(determineTime(["12:00:00", "12:00:00"])); // true
console.log(determineTime(["06:00:00", "12:00:00", "06:30:00"])); // false
