function generateWorkout(event) {
  event.preventDefault();

  new Typewriter("#workout", {
    strings: (`Warm-Up (5 minutes)
          <br />
          Jumping Jacks - 1 minute
          <br />
          Arm Circles - 1 minute (30 seconds forward, 30 seconds backward)
          <br />
          Hip Circles - 1 minute (30 seconds in each direction)
          <br />
          High Knees - 1 minute
          <br />
          Dynamic Lunges (Alternating) - 1 minute
          <br />
          <br />
          Main Workout (20 minutes)
          <br />
          Format: Perform each exercise for 45 seconds, followed by 15 seconds
          of rest. After completing all 5 exercises, rest for 1 minute. Repeat
          the circuit 3 times.
          <br />
          1. Suspended Push-Ups
          <br />
          How to do it:
          <br />
          Set the suspension straps at a length where your hands will be
          suspended just above the ground when you’re in the plank position.
          Grab the handles with your hands and walk your feet back to a plank
          position. Lower your chest toward the ground by bending your elbows,
          and then press back up. Keep your body in a straight line (don’t let
          your hips sag). Muscles worked: Chest, shoulders, triceps, core.
          <br />
          2. Suspended Squats
          <br />
          How to do it:
          <br />
          Hold the suspension straps with your arms extended in front of you,
          palms facing in. Walk your feet forward and sit your hips back as if
          you’re sitting in a chair, making sure your knees stay behind your
          toes. Drive through your heels to return to standing. Muscles worked:
          Quads, hamstrings, glutes, core.
          <br />
          3. Suspended Plank with Knee Tucks
          <br />
          How to do it:
          <br />
          Place your feet in the straps, and get into a plank position with your
          forearms on the ground. Pull your knees toward your chest, engaging
          your core, then slowly extend your legs back out. Keep your hips level
          and avoid letting them drop as you move. Muscles worked: Core,
          shoulders, hip flexors.
          <br />
          4. Suspended Lunge (Each Leg)
          <br />
          How to do it:
          <br />
          With one foot in the straps and the other foot grounded, step the
          grounded leg forward into a lunge position. Lower your hips down and
          back to form a 90-degree angle with both knees. Push back up to
          standing, keeping your chest lifted and your core tight. Repeat on the
          opposite leg during the next round. Muscles worked: Quads, glutes,
          hamstrings, core.
          <br />
          5. Suspended Row
          <br />
          How to do it:
          <br />
          Hold the straps with both hands, palms facing each other, and lean
          back so that your body forms a straight line from head to heels. Pull
          your chest toward the straps by bending your elbows and squeezing your
          shoulder blades together. Slowly lower yourself back to the starting
          position. Muscles worked: Back, biceps, shoulders, core.
          <br />
          Cool Down (5 minutes)
          <br />
          Hamstring Stretch - 1 minute each leg
          <br />
          Sit on the floor with one leg extended straight out and the other
          bent, foot towards your inner thigh. Reach for your toes on the
          extended leg to stretch the hamstring.
          <br />
          Shoulder Stretch - 1 minute
          <br />
          Bring one arm across your body and use the opposite hand to gently
          pull it closer to your chest. Hold for 30 seconds on each side.
          <br />
          Child’s Pose - 1 minute
          <br />
          Kneel with your knees wide apart, sit back onto your heels, and
          stretch your arms forward, lowering your forehead to the floor.
          Breathe deeply to help your body relax and recover.`),
    autoStart: true,
    delay: 1,
    cursor: "",
  });


}

let workoutFormElement = document.getElementById('#workout-form');
workoutFormElement.addEventListener('submit', generateWorkout);