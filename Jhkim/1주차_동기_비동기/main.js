//비동기식 프로그래밍 1->3->2 순으로 콘솔에 찍힌다.
console.log('1')
setTimeout(function() {
    console.log('2')
},1000)
console.log('3')

