function displayWorkout(response) {
  let workoutElement = document.querySelector("#workout");
  
  new Typewriter(workoutElement, {
    strings: response.data.answer.replace("```html", "").replace("```", ""),
    autoStart: true,
    delay: 0.2,
    cursor: "",
  });
}
console.log(displayWorkout.value);

function generateWorkout(event) {
  event.preventDefault();

  let workoutTypeElement = document.querySelector("#workout-type");
  let fitnessLevelElement = document.querySelector("#fitness-level");
  let goalsElement = document.querySelector("#goals");
  let timeElement = document.querySelector("#time");
  let injuriesElement = document.querySelector("#injuries");

  let apiKey = "a050491735e3o6daf6dd43f3ab206bct";
  let context = `You are a professional workout coach specializing in creating brief and clear workout plans using only plain HTML. Ensure that each exercises are in list form. The title should have a larger font size than the rest but remain legible. Stick to the user’s instructions closely, limiting the workout to a maximum of five repeatable exercises You are a professional workout coach specializing in creating brief and clear workout plans using only plain HTML, without backticks or tags. Ensure that each is in list form, with specific instructions on how many reps, sets, rounds and duration. The title should have a larger font size than the rest but remain legible. Stick to the user’s instructions closely, limiting the workout to a maximum of five repeatable exercises. For warm-up and cool-down, include no more than 3 exercises each. For each exercise, provide a clickable link that opens in a new tab (e.g., https://www.youtube.com/results?search_query=push+ups). Conclude the workout with a signature: AI Workout Wizard inside a <strong> element.with instructions on how long to repeate the exercise. For each exercise, provide a clickable link that opens in a new tab (e.g., https://www.youtube.com/results?search_query=push+ups). Conclude the workout with a signature: AI Workout Wizard inside a <strong> element.`;
  let prompt = `User instructions: Generate a ${workoutTypeElement.value} workout for a ${fitnessLevelElement.value}, ${goalsElement.value} goal for ${timeElement.value} minutes. Please keep in mind any injuries or limitations such as ${injuriesElement.value} if blank ignore.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let workoutElement = document.querySelector("#workout");
  workoutElement.classList.remove("hidden");
  workoutElement.innerHTML = `<h2 color="red">Disclaimer: If you engage in this workout program, you agree that you do so at your own risk, are voluntarily participating in these activities, and assume all risk of injury to yourself...</h2>`;

  
  workoutElement.innerHTML += `<h3 class= "generating">⏳ Generating a ${timeElement.value} minute ${fitnessLevelElement.value} ${workoutTypeElement.value} workout for your ${goalsElement.value} goals.</h3>`;


  axios.get(apiURL, { timeout: 30000 }) 
    .then(displayWorkout)
    .catch(error => {
      console.error("Error fetching workout:", error);
      workoutElement.innerHTML = `<p>Error fetching workout. Please try again later.</p>`;
    });
}

function printWorkout() {
  let workoutElement = document.querySelector("#workout");
  let printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>AI Workout Wizard</title></head><body>');
  printWindow.document.write(workoutElement.innerHTML);

  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);

let printButton = document.getElementById("print-button");
printButton.addEventListener("click", printWorkout);
