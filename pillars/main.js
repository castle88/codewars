// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
// Fundamentals
// Mathematics
// Algorithms
// Numbers

function pillars(num_pill, dist, width) {
  const total_distance = dist * (num_pill - 1);
  const total_pill_width = (num_pill <= 2 ? 0 : num_pill - 2) * width;
  return num_pill === 2 ? dist * 100 : total_distance + total_pill_width;
  // return total_pill_width
}

console.log(pillars(1, 10, 10)); // 0
console.log(pillars(2, 20, 25)); // 2000
console.log(pillars(11, 15, 30)); // 15270
