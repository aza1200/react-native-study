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

setTimeout(
  function (name) {
    let coffeeList = name;
    console.log(name);

    setTimeout(
      function (name) {
        coffeeList += ", " + name;
        console.log(name);

        setTimeout(
          function (name) {
            coffeeList += ", " + name;
            console.log(name);

            setTimeout(
              function (name) {
                coffeeList += ", " + name;
                console.log(name);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);

// function add(x, callback) {
//     let sum = x + x;
//     console.log(sum);
//     callback(sum);
// }
//
// add(2, function(result) {
//     add(result, function(result) {
//         add(result, function(result) {
//             console.log('finish!!');
//         })
//     })
// })
//
// /////////////////////////////////////////////////////이 밑으로는 재원 코드
// function 첫째함수(콜백) {
//     console.log(1);
//     콜백();
//   }
//
//   function 둘째함수(){
//     console.log(2)
//   }
//
//   첫째함수(둘째함수);
//
//   //////////////////////////////
//
//   function square(num) {
//       console.log(num);
//       let number = num * num;
//       console.log(number);
//     }
//
//     function plus(callback) {
//       const a = 3;
//       const b = 2;
//
//       const sum = a + b;
//
//       callback(sum);
//     }
//
//     //square라는 함수에 setTimeout안에 함수의 리턴값을 넣고 실행
//     // 3000ms 동안 기다렸다가 실행되므로 return값이 제대로 없는 상태에서 sqaure함수가 실행된다.
//     square(
//       setTimeout(() => {
//         const a = 3;
//         const b = 2;
//
//         const sum = a + b;
//
//         return sum;
//       }, 3000)
//     );
//
//     //콜백함수를 이용하여 실행
//     //square라는 콜백함수가 plus라는 함수내에서 실행되어서 plus() -> square() 순서로 실행된다
//     setTimeout(plus(square), 3000);
//
//     function increaseAndPrint(n, callback) {
//       setTimeout(() => {
//         const increased = n + 1;
//         console.log(increased);
//         if (callback) {
//           callback(increased);
//         }
//       }, 1000);
//     }
//
//     increaseAndPrint(0, n => {
//       increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//           increaseAndPrint(n, n => {
//             increaseAndPrint(n, n => {
//               console.log('끝!');
//             });
//           });
//         });
//       });
//     });
//

