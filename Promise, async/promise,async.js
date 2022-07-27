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