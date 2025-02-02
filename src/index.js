function displayWorkout(response) {
  let workoutElement = document.getElementById("workout");
  workoutElement.innerHTML = "";
  new Typewriter(workoutElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateWorkout(event) {
  event.preventDefault();

  let workoutTypeElement = document.getElementById("workout-type");
  let fitnessLevelElement = document.getElementById("fitness-level");
  let goalsElement = document.getElementById("goals");
  let timeElement = document.getElementById("time");
  let injuriesElement = document.getElementById("injuries");

  let apiKey = "a050491735e3o6daf6dd43f3ab206bct";
  let context =
    "You are an expert workout coach and love to write short workouts. Your mission is to generate a workout with a maximum of 45 lines in basic HTML and separate each line with a <br />. Make sure to follow the user’s instructions. Include a YouTube link for each exercise, ensuring the link opens in a new tab when clicked. For example https://www.youtube.com/results?search_query=push+ups At the end of the workout, sign it with SheCodes AI inside a <strong> element. Do NOT include quotes or HTML in text. Please make sure all links are working and lead to valid instructional videos.";
  let prompt = `User instructions: Generate a ${workoutTypeElement.value} workout for a ${fitnessLevelElement.value}, ${goalsElement.value} goal for ${timeElement.value} minutes. Please keep in mind any injuries or limitations such as ${injuriesElement.value} if blank ignore.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let workoutElement = document.getElementById("workout");
  workoutElement.classList.remove("hidden");
  workoutElement.innerHTML = `<h3>⏳ Generating a ${timeElement.value} minute ${fitnessLevelElement.value} ${workoutTypeElement.value} workout for your ${goalsElement.value} goals. You should understand that participating in any exercise or exercise program carries the possibility of physical injury. You should be in good physical condition and able to participate in the exercise.</h3><h2> If you engage in this workout program, you agree that you do so at your own risk, are voluntarily participating in these activities, and assume all risk of injury to yourself...</h2>`;

  axios.get(apiURL).then(displayWorkout);
}

let workoutFormElement = document.getElementById("workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);

