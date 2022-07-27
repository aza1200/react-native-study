/*

function 첫째함수(콜백) {
  console.log(1);
  콜백();
}

function 둘째함수(){
  console.log(2)
}

첫째함수(둘째함수);

//////////////////////////////

function square(num) {
    console.log(num);
    let number = num * num;
    console.log(number);
  }
  
  function plus(callback) {
    const a = 3;
    const b = 2;
  
    const sum = a + b;
  
    callback(sum);
  }
  
  //square라는 함수에 setTimeout안에 함수의 리턴값을 넣고 실행
  // 3000ms 동안 기다렸다가 실행되므로 return값이 제대로 없는 상태에서 sqaure함수가 실행된다.
  square(
    setTimeout(() => {
      const a = 3;
      const b = 2;
  
      const sum = a + b;
  
      return sum;
    }, 3000)
  );
  
  //콜백함수를 이용하여 실행 
  //square라는 콜백함수가 plus라는 함수내에서 실행되어서 plus() -> square() 순서로 실행된다
  setTimeout(plus(square), 3000);

  function increaseAndPrint(n, callback) {
    setTimeout(() => {
      const increased = n + 1;
      console.log(increased);
      if (callback) {
        callback(increased);
      }
    }, 1000);
  }
  
  increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          increaseAndPrint(n, n => {
            console.log('끝!');
          });
        });
      });
    });
  });
  */

let promiseInstance = new promise(function (resolve, reject) { });

let promise1 = new Promise((resolve, reject) => {
  //promise 생성
  setTimeout(() => {
    reject("그냥 실패");//안에 있는 값은 catch()에서 받아서 사용한다
  }, 3000);
});

promise1.then((value) => {//then의 익명함수에서 받은 매개변수는 resolve에 들어있는 값을 받는다.
  //then안에 promise다음에 실행될 함수를 실행시킨다
  console.log(2);
  console.log(value);//value는 resolve에 들어서 반환된 값
}).catch((e)=>{//e는 reject에 들어있는 값이다.
	console.log(e)
});
    
function plusOne(number){
  return new Promise(function(resolve, reject){
    resolve(number+1);
  });
}

function plusTwo(number){
  return new Promise(function(resolve, reject){
    resolve(number+2);
  });
}

function plusThree(number){
  return new Promise(function(resolve, reject){
    resolve(number+3);
  });
}

plusOne(1).then(function(value){
  console.log(value);
  return plusTwo(value);
}).then(function(value){
  console.log(value);
  return plusThree(value);
  console.log(value);
})


async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; 

  alert(result); // "완료!"
}

f();