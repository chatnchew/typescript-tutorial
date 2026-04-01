const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

// main takeaways - have to use tsc <ts file name> to complie the TS into JS - if no JS file exists, it will automatically create one
// can use tsc <ts file name> -w to have the file be compiled in real time as it's being written / each time you save