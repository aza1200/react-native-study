function first( number,callback){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 500 );
  callback();
}
function second(){
  console.log(2);
}
first(2,second);