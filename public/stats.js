// get all workout data from back-end

fetch("/api/workouts/range")
  .then(response => {
    return response.json();
  })
  .then(data => {
    populateChart(data);
  });


API.getWorkoutsInRange()

  function generatePalette(data) {
    const arr = [
      "#003f5c",
      "#2f4b7c",
      "#665191",
      "#a05195",
      "#d45087",
      "#f95d6a",
      "#ff7c43",
      "ffa600",
      "#003f5c",
      "#2f4b7c",
      "#665191",
      "#a05195",
      "#d45087",
      "#f95d6a",
      "#ff7c43",
      "ffa600"
    ]

    // loop through colors
    const color = [];
    let i = 0;
    data.forEach(workout => {
      workout.exercises.forEach(exercise => {
        color.push(arr[i])
        i++;
        if (i === arr.length) {
          i = 2; //start over at 2 so it doesn't match up if color count matches exercise count -1
        }
      })
    });
    return color;
  }

  

  function populateChart(data) {
    let durations = duration(data);
    let pounds = calculateTotalWeight(data);
    let workouts = workoutNames(data);
    const colors = generatePalette(data);
    let dates = getDates(data);
    let barColors = getBarColors(data);

    let line = document.querySelector("#canvas").getContext("2d");
    let bar = document.querySelector("#canvas2").getContext("2d");
    let pie = document.querySelector("#canvas3").getContext("2d");
    let pie2 = document.querySelector("#canvas4").getContext("2d");

    let lineChart = new Chart(line, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Workout Duration In Minutes",
            backgroundColor: "red",
            borderColor: "red",
            data: durations,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true
              }
            }
          ]
        }
      }
    });

    let barChart = new Chart(bar, {
      type: "bar",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Pounds",
            data: pounds,
            backgroundColor: barColors.backgroundColors,
            borderColor: barColors.borderColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Pounds Lifted"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    let pieChart = new Chart(pie, {
      type: "pie",
      data: {
        labels: workouts,
        datasets: [
          {
            label: "Excercises Performed",
            backgroundColor: colors,
            data: durations
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Excercises Performed"
        }
      }
    });

    let donutChart = new Chart(pie2, {
      type: "doughnut",
      data: {
        labels: workouts,
        datasets: [
          {
            label: "Excercises Performed",
            backgroundColor: colors,
            data: pounds
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Excercises Performed"
        }
      }
    });
  }

function duration(data) {
  let durations = [];

  data.forEach(workout => {
    durations.push(workout.totalDuration);
    // workout.exercises.forEach(exercise => {
    //   durations.push(exercise.duration);
    // });
  });

  return durations;
}

function getBarColors(data) {
  const colorSets = {
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)"
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)"
    ]
  }

  // loop through colors for more bars on the graph
  const colors = {
    backgroundColors: [],
    borderColors: []
  };

  let i = 0;
  data.forEach(w => {
    colors.backgroundColors.push(colorSets.backgroundColor[i]);
    colors.borderColors.push(colorSets.borderColor[i]);
    i++;
    if (i === colorSets.borderColor.length) {
      i=0;
    }
  });
  return colors;
}

function calculateTotalWeight(data) {
  let total = [];

  data.forEach(workout => {
    let totalWeight = 0;
    workout.exercises.forEach(exercise => {
      totalWeight += exercise.weight; // calculate the total weight
      // total.push(exercise.weight);
    });
    total.push(totalWeight); //push total weight
  });

  return total;
}

function workoutNames(data) {
  let workouts = [];
  
  // get all exercise names
  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      workouts.push(exercise.name);
    });
  });
  
  return workouts;
}

function getDates(data) {
  let dates = [];
  // create date and day of the week lables for bar and line graphs
  data.forEach(d => {
    let lbl = moment(d.day).format("MM/DD dddd"); 
    console.log('lbl: ', lbl);
    dates.push(lbl);
  });
  return dates;
}