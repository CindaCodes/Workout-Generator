function displayWorkout(response) {
  let workoutElement = document.querySelector("#workout");
  workoutElement.innerHTML = "";
  new Typewriter(workoutElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.2,
    cursor: "",
  });
}

function generateWorkout(event) {
  event.preventDefault();

  let workoutTypeElement = document.querySelector("#workout-type");
  let fitnessLevelElement = document.querySelector("#fitness-level");
  let goalsElement = document.querySelector("#goals");
  let timeElement = document.querySelector("#time");
  let injuriesElement = document.querySelector("#injuries");

  let apiKey = "a050491735e3o6daf6dd43f3ab206bct";
  let context = `You are an expert workout coach and specialize in creating short workouts with a warm-up and cool-down. Your task is to generate a workout in basic HTML. Follow the user’s instructions carefully. For each exercise, provide a link that should open in a new tab when clicked, for example https://www.youtube.com/results?search_query=push+ups. At the end of the workout, sign it with SheCodes AI inside a <strong> element. Avoid using quotes and the word html at the beginning. Thank you.`;
  let prompt = `User instructions: Generate a ${workoutTypeElement.value} workout for a ${fitnessLevelElement.value}, ${goalsElement.value} goal for ${timeElement.value} minutes. Please keep in mind any injuries or limitations such as ${injuriesElement.value} if blank ignore.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let workoutElement = document.querySelector("#workout");
  workoutElement.classList.remove("hidden");
  workoutElement.innerHTML = `<h3 class= "generating">⏳ Generating a ${timeElement.value} minute ${fitnessLevelElement.value} ${workoutTypeElement.value} workout for your ${goalsElement.value} goals.</h3><h2 color="red">Disclaimer: If you engage in this workout program, you agree that you do so at your own risk, are voluntarily participating in these activities, and assume all risk of injury to yourself...</h2>`;

  axios.get(apiURL).then(displayWorkout);
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);

