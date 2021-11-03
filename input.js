const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = (key)=>{
  if (key === '\u0003') {
    console.log('Hi')
    process.exit();
  }

}

module.exports =  setupInput