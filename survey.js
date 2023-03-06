const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileInfo = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  profileInfo.name = name;

  rl.question('What\'s an activity you like doing? ', (activity) => {
    profileInfo.activity = activity;

    rl.question('What do you listen to while doing that? ', (listen) => {
      profileInfo.listen = listen;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        profileInfo.meal = meal;

        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          profileInfo.food = food;

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            profileInfo.sport = sport;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              profileInfo.superpower = superpower;
      
 

              console.log(`${profileInfo.name} loves listening to ${profileInfo.listen} while ${profileInfo.activity}, devouring ${profileInfo.food} for ${profileInfo.meal}, prefers ${profileInfo.sport} over any other sport, and is ${profileInfo.superpower}.\n`);

              rl.close();

            });
          });
        });
      });
    });
  });
});







//console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and ${superpower}.`);