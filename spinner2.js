const spinner = () => {
  const spinChars = ["| ", "/ ", "— ", "\\ ", "| ", "/ ", "— ", "\\ ", "| ", "\n"];
  let delay = 0;
  for (const char of spinChars) { 
    setTimeout( () => process.stdout.write("\r" + char), delay)
    delay += 200;
  }
};

//Test code
//spinner();

module.exports = spinner;