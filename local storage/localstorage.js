//키 설정하기
localStorage.setItem('test', 1);

//키 얻기
alert( localStorage.getItem('test') );

//키 삭제하기
//delete localStorage.test;


//키 순회하기
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
}

for(let key in localStorage) {
    alert(key); // getItem, setItem 같은 내장 필드까지 출력됩니다.
}


for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue; // setItem, getItem 등의 키를 건너뜁니다.
    }
    alert(`${key}: ${localStorage.getItem(key)}`);
}

let keys = Object.keys(localStorage);
for(let key of keys) {
  alert(`${key}: ${localStorage.getItem(key)}`);
}

delete localStorage.test;

localStorage.user = {name: "John"};
alert(localStorage.user); // [object Object]


localStorage.user = JSON.stringify({name: "John"});

// 잠시 후
let user = JSON.parse( localStorage.user );
alert( user.name ); // John


alert( JSON.stringify(localStorage, null, 2) );

localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');
alert(cat);