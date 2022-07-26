//
// // // 잘못된 콜백함수 예시
// // // 0.5초 이후 1 다음에 2를 출력하고 싶다면?
// function first( number,callback){
//   // Simulate a code delay
//   setTimeout( function(){
//     console.log(1);
//   }, 500 );
//   callback();
// }
// function second(){
//   console.log(2);
// }
// first(2,second);
//
//
// // 좋은 콜백함수 예시
//
//
// function first( number,callback){
//   // Simulate a code delay
//   setTimeout( function(){
//     console.log(1);
//     callback()
//   }, 500 );
// }
// function second(){
//   console.log(2);
// }
// first(2,second);


// // // 콜백 지옥


function add(x, callback) {
    let sum = x + x;
    console.log(sum);
    callback(sum);
}

add(2, function(result) {
    add(result, function(result) {
        add(result, function(result) {
            console.log('finish!!');
        })
    })
})


