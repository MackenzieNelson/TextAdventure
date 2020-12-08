function TextAdventure () {
  //Declare variables
  var gameRunning = true;
  var firstInput = "";
  var oceanInput = "";
  var stickInput = "";
  var monkeyInput = "";
  var catInput = "";
  
  //create loop
  while (gameRunning) {
    firstInput = prompt ("You wake up on a sandy beach. You cant seem to remember anything about who you are or what you were doing prior to this moment. You take a look around an notice a vast ocean behind you, a forest in front of you, and the beach that seems to go on endlessly. What will you do?");
    document.write("You wake up on a sandy beach. You cant seem to remember anything about who you are or what you were doing prior to this moment. You take a look around an notice a vast ocean behind you, a forest in front of you, and the beach that seems to go on endlessly. What will you do?\<br>\<br>");
    if (firstInput == "go for a swim" || firstInput == "go toward the ocean" || firstInput == "wade into the water") {
      document.write ("You hear a beautiful voice beconing you.\<br>\<br>");
      oceanInput = prompt("You hear a beautiful voice beconing you. Will you follow the voice?");
      if (oceanInput == "Yes" || oceanInput == "yes" || oceanInput == "sure" || oceanInput == "Sure" || oceanInput == "maybe" || oceanInput == "Maybe") {
        document.write("You see the head of a beautiful maiden emerbge from the waters surface. She slowly drifts toward you. You feel entranced, unable ot move or flee at the panic you begin to feel. As she nears you she suddenly dissapears beneath the water. You feel yourself being tugged under. Struggling as you might, you cannot break free of her icy grip.\<br>You are Dead.\<br>\<br>");
        gameRunning = false;
      } else {
        document.write("You feel an uneasiness wash over you and you turn from the voice, going back toward the beach.\<br>\<br>");
        firstInput = "left";
      }
    } else if (firstInput == "left" || firstInput == "right" || firstInput == "walk along beach") {
      document.write("You notice a large stick in the sand.\<br>\<br>");
      stickInput = prompt("You notice a large stick in the sand. Will you take the stick?");
      if (stickInput == "yes") {
        document.write("Just as you pick up the large stick, a monkey emerges from the tree line and approaches you.\<br>\<br>");
        monkeyInput = prompt("Just as you pick up the large stick, a monkey emerges from the tree line and approaches you. What will you do?");
        if (monkeyInput == "hit monkey with stick" || monkeyInput == "fight" || monkeyInput == "hit monkey" || monkeyInput == "smack") {
          document.write ("The monkey screams in pain and runs away.\nYoure mean!\<br>\<br>");
          gameRunning = false;
        } else if (monkeyInput == "give monkey stick" || monkeyInput == "give stick" || monkeyInput == "pet monkey" || monkeyInput == "do nothing") {
          document.write("The monkey seems to take a liking to you. As you continue walking it follows you happily. You've made a new friend.\<br>\<br>");
          document.write("You continue along the beach, walking for what seems like an eternity. When the sun begins to set you notice the light of a fire off in the distance. You pick up the pace to investigate. As you near the fire, you see many people stiting around, laughing, drinking and having a good time. You notice a large ship off in the distance. One of the men exclaims \"There you are! We thought we'd lost you after last night!\" Suddenly memories come flooding back to you, the merrymaking of last night, rum flowing aplenty, as you and your pirate friends celebrate the recent booty plundered. Drunk as you were, you wandered off. Thinking to quench your thirst, you decided to climb a coconut tree to score some fresh, ripe coconuts. This was not the brightest idea, as you fell and hit your head in the process, blacking out. Reunited with your friends, you relay your tale of last nights events and todays events, embelishing only slightly. The end.\<br>\<br>");
          gameRunning = false;
        }
      } else {
        document.write("You continue along the beach, walking for what seems like an eternity. When the sun begins to set you notice the light of a fire off in the distance. You pick up the pace to investigate. As you near the fire, you see many people stiting around, laughing, drinking and having a good time. You notice a large ship off in the distance. One of the men exclaims \"There you are! We thought we'd lost you after last night!\" Suddenly memories come flooding back to you, the merrymaking of last night, rum flowing aplenty, as you and your pirate friends celebrate the recent booty plundered. Drunk as you were, you wandered off. Thinking to quench your thirst, you decided to climb a coconut tree to score some fresh, ripe coconuts. This was not the brightest idea, as you fell and hit your head in the process, blacking out. Reunited with your friends, you relay your tale of last nights events and todays events, embelishing only slightly. The end.\<br>\<br>");
        gameRunning = false;
      }
    } else if (firstInput == "Enter forest" || firstInput == "go toward forest" || firstInput == "go forward") {
      document.write("You fight your way tooth and nail through the forest brush. Time passes and suddenly you hear a low growl coming from above you. Hewart racing you look up, noticing a giant black cat with piercing green eyes staring you down licking its lips, perched in the tree above you.\<br>\<br>");
      catInput = prompt("You fight your way tooth and nail through the forest brush. Time passes and suddenly you hear a low growl coming from above you. Hewart racing you look up, noticing a giant black cat with piercing green eyes staring you down licking its lips, perched in the tree above you. What will you do?");
      if (catInput == "Scream" || catInput == "Flail" || catInput == "Throw something") {
        
      } else if (catInput == "run" || catInput == "Run" || catInput == "Flee" || catInput == "flee") {
        document.write("Your flight response kicks in and you flee back the way you came. Your body feels weightless as you run for your life, moviong faster than you ever have before. You breka through the line of trees and keep funning ofr what feels like forever. finally you feel brave enough to glance behind you, to notice that the cat did not follow you. You slow and come to a stop, huffing and puffing to catch your breath. You then take a moment to notice your surroundings, spying a group of people in the distance and a large ship floating nearby. Walking up to them one of the men exclaims \"There you are! We thought we'd lost you after last night!\" Suddenly memories come flooding back to you, the merrymaking of last night, rum flowing aplenty as you and your pirate friends celebrate the recent booty plundered. Drunk as you were, you wandered off. Thinking to quench your thirst, you decided to climb a coconut tree to score some fresh ripe coconuts. This was not the brightest idea, as you fell and hit your head in the process, blacking out. Reunited with your friends, you relay your tale of last nights events and todays events, embelishing only slightly. The end.\<br>\<br>");
        gameRunning = false;
      }
    } else {
      firstInput = prompt("Oops, try entering something else! You wake up on a sandy beach. You cant seem to remember anything about who you are or what you were doing prior to this moment. You take a look around an notice a vast ocean behind you, a forest in front of you, and the beach that seems to go on endlessly. What will you do?");
    }
  }
}
// run function
TextAdventure ();