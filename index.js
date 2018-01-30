const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ '
});

const commandStart = [
  'Performing DNS Lookups for',
  'Searching ',
  'Analyzing ',
  'Retrying ',
  'Compressing ',
  'Requesting Authorization from ',
  'wget -a -t ',
  'tar -xzf ',
  'Scanning ',
  'Compiling ',
  'Downloading ',
  'Retrieving ',
  'Extracting ',
  'Decrpyting',
];
const commandParts = [
  'Data Structure',
  'http://wwjd.com?au&2',
  'http://snfr.sa?plf=54&kd=2',
  'Ports',
  'TPS Reports',
  'Keys',
  'http://zanb.se/?23&88&far=2',
  'http://ab.ret45-33/?timing=1ww',
  'Encryptions'
];
const commandResponses = [
  'Authorizing...',
  'Authorized.',
  'Granting access...',
  'Access Granted.',
  'Compressing...',
  'Compression Complete.',
  'Compilation of Data Structures Complete..',
  'Entering Security Console...',
  'Encryption unsuccesful. Attempting to retry...',
  'Encryption successful.',
  'Comparing against dictionary...',
  'Waiting for response...',
  'Searching...',
  'Calculating Space Requirements...',
  'Parsing data...',
  'Data retrieved.',
];

let isProcessing = false;
let processTime = 0;
let lastProcess = 0;

function fakify() {
  let output = '';
  if (isProcessing) {
    output += Math.random() + ' ';
    if (Date.now() > lastProcess + processTime) {
      isProcessing = false;
    }
  } else {
    const commandType = ~~(Math.random()*4);
    switch(commandType){
      case 0:
          output = commandStart[~~(Math.random()*commandStart.length)] + commandParts[~~(Math.random()*commandParts.length)];
          break;
      case 3:
          isProcessing = true;
          processTime = ~~(Math.random()*5000);
          lastProcess = Date.now();
      default:
           output = commandResponses[~~(Math.random()*commandResponses.length)];
      break;
    }
  }
  return output;
}

rl.prompt()

rl.on('line', (input) => {
  let loop = null;
  const runtime = ~~(Math.random() * (10000 - 1000 + 1) + 1000)
  if (input === 'go wild') {
    loop = setInterval(function() {
      setTimeout(function() {
        console.log(fakify())
      }, runtime / 10)
    }, 200)
  }
  setTimeout(function() {
    clearInterval(loop)
    setTimeout(function() {
      rl.prompt()
    }, 1000)
  }, runtime)
  loop = setInterval(function() {
    setTimeout(function() {
      console.log(fakify())
    }, runtime / 10)
  }, 200)
}).on('close', () => {
  process.exit(0)
})