let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

  console.log("Initial");
  console.log(programming);
  
  
  programming.languages.push("Go");
  programming.difficulty = 7;
  delete programming.jokes;
  programming.isFun = true;
  
  
  console.log("After changes");
  console.log(programming);