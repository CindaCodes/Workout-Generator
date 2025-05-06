export async function handler(event) {
  const API_KEY = process.env.API_KEY;

  const { workoutType, fitnessLevel, goals, time, injuries } = JSON.parse(
    event.body
  );

  const context = `You are a professional workout coach creating concise, effective workout plans in plain HTML. Use a clear, larger title and list exercises with reps, sets, rounds, and duration. Keep the response under 1600 characters.`;
  const prompt = `User instructions: Generate a ${workoutType} workout for a ${fitnessLevel}, ${goals} goal for ${time} minutes. Please keep in mind any injuries or limitations such as ${
    injuries || "none"
  }.`;

  const url = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch workout" }),
    };
  }
}
