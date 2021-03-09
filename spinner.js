const spinner = () => {
  const spinChars = ["| ", "/ ", "— ", "\\ "];
  let delay = 500;
  for (const char of spinChars) { 
    setTimeout( () => process.stdout.write("\r" + char), delay)
    delay += 500;
  }
  process.stdout.write("\n");
};

//spinner();

