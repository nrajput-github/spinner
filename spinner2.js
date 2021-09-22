let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let i = 0;
function threeWords () {
  
  process.stdout.write (`\r${arr[i++]}`);
  if (i === arr.length) {
    process.stdout.write("\n");
     return;
    }
     
  setTimeout(threeWords, 200);
  
  
  
}

setTimeout(threeWords, 100);
