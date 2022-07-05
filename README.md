<h1 align="center">
<br>
  <a href="https://github.com/aza1200/react-native-study"><img src="https://reactnative.dev/img/header_logo.svg" alt="React Native 앱 개발을 목표로 하기 위한 공유 스터디 저장소" width=200"></a>
  <br>
    <br>
  React Native 앱 개발을 목표로 하는 공유 스터디 저장소
  <br><br>
</h1>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

## 소개

React Native 를 처음 시작하는 개발자들이 웹개발 기초부터의 개념을 마스터하기위해, 스터디 매주차의 학습내용을 기록하기 위해 만들어졌습니다.[모든 자바스크립트 개발자가 알아야 하는 33가지 개념](https://github.com/yjs03057/33-js-concepts)의  기반으로 만들어졌으며 추가적인 내용을 정리할 계획입니다.   


## 목차

1. **[호출 스택](#1-호출-스택)**
1. **[원시 자료형](#2-원시-자료형)**
1. **[값 타입(Value Type)과 참조 타입(Refecrence Type)](#3-값-타입value-type과-참조-타입refecrence-type)**
1. **[명시적 변환, 암시적 변환, Nominal, 구조화, 덕 타이핑](#4-명시적-변환-암시적-변환-nominal-구조화-덕-타이핑)**
1. **[== vs === vs typeof](#5--vs--vs-typeof)**
1. **[함수 범위, 블록 범위, 렉시컬(lexical) 범위](#6-함수-범위-블록-범위-렉시컬lexical-범위)**
1. **[식(expression) vs 문(statement)](#7-식expression-vs-문statement)**
1. **[IIFE, Modules, Namespaces](#8-iife-modules-namespaces)**
1. **[메시지 큐와 이벤트 루프](#9-메시지-큐와-이벤트-루프)**
1. **[setTimeout, setInterval, requestAnimationFrame](#10-settimeout-setinterval-requestanimationframe)**
1. **[자바스크립트 엔진](#11-자바스크립트-엔진)**
1. **[비트 연산자, 형식화 배열, 버퍼(배열)](#12-비트-연산자-형식화-배열-버퍼배열)**
1. **[DOM과 Layout Trees](#13-dom과-layout-trees)**
1. **[팩토리와 클래스](#14-팩토리와-클래스)**
1. **[this, call, apply, bind](#15-this-call-apply-bind)**
1. **[new, 생성자, instanceof, 인스턴스](#16-new-생성자-instanceof-인스턴스)**
1. **[프로토타입의 상속과 체인](#17-프로토타입의-상속과-체인)**
1. **[Object.create와 Object.assign](#18-objectcreate와-objectassign)**
1. **[map, reduce, filter](#19-map-reduce-filter)**
1. **[순수함수, 부수효과, 상태변이](#20-순수함수-부수효과-상태변이)**
1. **[클로저(Closures)](#21-클로저closures)**
1. **[고차함수](#22-고차함수)**
1. **[재귀](#23-재귀)**
1. **[컬렉션과 생성기](#24-컬렉션과-생성기)**
1. **[Promises](#25-promises)**
1. **[async/await](#26-asyncawait)**
1. **[자료 구조](#27-자료-구조)**
1. **[함수 성능과 빅 오(Big-O) 표기법](#28-함수-성능과-빅-오big-o-표기법)**
1. **[알고리즘](#29-알고리즘)**
1. **[상속, 다형성, 코드의 재사용성](#30-상속-다형성-코드의-재사용성)**
1. **[설계 패턴](#31-설계-패턴)**
1. **[부분 어플리케이션, 커링(Currying), Compose, Pipe](#32-부분-어플리케이션-커링currying-compose-pipe)**
1. **[클린 코드](#33-클린-코드)**

---

## 1. 호출 스택

### 글

- 📜 [Understanding Javascript Call Stack, Event Loops — Gaurav Pandvia](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
- 📜 [Understanding the JavaScript Call Stack — Charles Freeborn](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
- 📜 [What is the JS Event Loop and Call Stack? — Jess Telford](https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0)
- 📜 [Call Stack — MDN](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
- 📜 [Understanding Execution Context and Execution Stack in Javascript — Sukhjinder Arora](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
- 📜 [How JavaScript Works: An Overview of the Engine, the Runtime, and the Call Stack — Alexander Zlatkov](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- 📜 [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript — Tyler McGinnis](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)

### 영상

- 🎥 [Javascript: the Call Stack explained — Coding Blocks India](https://www.youtube.com/watch?v=w6QGEiQceOM)
- 🎥 [The JS Call Stack Explained In 9 Minutes — Colt Steele](https://www.youtube.com/watch?v=W8AeMrVtFLY)
- 🎥 [JavaScript Execution Stack — Codecademy](https://www.youtube.com/watch?v=jT0USJeNFEA)
- 🎥 [What is the Call Stack? — Eric Traub](https://www.youtube.com/watch?v=w7QWQlkLY_s)
- 🎥 [The Call Stack — Kevin Drumm](https://www.youtube.com/watch?v=Q2sFmqvpBe0)
- 🎥 [Understanding JavaScript Execution — Codesmith](https://www.youtube.com/watch?v=Z6a1cLyq7Ac&list=PLWrQZnG8l0E4kd1T_nyuVoxQUaYEWFgcD)
- 🎥 [Call Stack & Event Loop — movies com](https://www.youtube.com/watch?v=mk0lu9MKBto)
- 🎥 [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript — Tyler McGinnis](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- 🎥 [What the heck is the event loop anyway? — Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

**[⬆ Back to Top](#목차)**

---

## 2. 원시 자료형

### 글

- 📜 [How numbers are encoded in JavaScript — Dr. Axel Rauschmayer](http://2ality.com/2012/04/number-encoding.html)
- 📜 [What You Need to Know About JavaScript Number Type — Max Wizard K](https://medium.com/dailyjs/javascripts-number-type-8d59199db1b6)
- 📜 [What Every JavaScript Developer Should Know About Floating Point Numbers — Chewxy](https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/)
- 📜 [The Secret Life of JavaScript Primitives — Angus Croll](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
- 📜 [Primitive Types — Flow](https://flow.org/en/docs/types/primitives/)
- 📜 [(Not) Everything in JavaScript is an Object - Daniel Li](http://blog.brew.com.hk/not-everything-in-javascript-is-an-object/)
- 📜 [JavaScript data types and data structures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values)
- 📜 [Diving Deeper in JavaScripts Objects — Arfat Salman](https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12)

### 영상

- 🎥 [JavaScript Reference vs Primitive Types — Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
- 🎥 [JavaScript Primitive Types — Simon Sez IT](https://www.youtube.com/watch?v=HsbWQsSCE5Y)
- 🎥 [Javascript Primitive and Reference Types — Baljeet Singh](https://www.youtube.com/watch?v=F7YbhKbpFic)
- 🎥 [Value Types and Reference Types in JavaScript — Programming with Mosh](https://www.youtube.com/watch?v=e-_mDyqm2oU)
- 🎥 [JavaScript Primitive Data Types — Avelx](https://www.youtube.com/watch?v=qw3j0A3DIzQ)
- 🎥 [Everything you never wanted to know about JavaScript numbers — Bartek Szopka](https://www.youtube.com/watch?v=MqHDDtVYJRI)
- 🎥 [What are variables in Javascript? — JS For Everyone](https://www.youtube.com/watch?v=B4Bbmei_thw)

**[⬆ Back to Top](#목차)**

---

## 3. 값 타입(Value Type)과 참조 타입(Refecrence Type)

### 글

- 📜 [Explaining Value vs. Reference in Javascript — Arnav Aggarwal](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
- 📜 [Understand Value and Reference Types in JavaScript — Zsolt Nagy](https://www.zsoltnagy.eu/understand-value-and-reference-types-in-javascript/)
- 📜 [Primitive Types & Reference Types in JavaScript — Bran van der Meer](https://gist.github.com/branneman/7fb06d8a74d7e6d4cbcf75c50fec599c)
- 📜 [Value Types, Reference Types and Scope in JavaScript — Ben Aston](https://medium.com/@benastontweet/lesson-1b-javascript-fundamentals-380f601ba851)
- 📜 [Back to roots: JavaScript Value vs Reference — Miro Koczka](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
- 📜 [Grasp "By Value" and "By Reference" in JavaScript — Léna Faure](https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293)
- 📜 [JavaScript Reference and Copy Variables — Vítor Capretz](https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0)
- 📜 [JavaScript Primitive vs Reference Values](http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)
- 📜 [JavaScript by Reference vs. by Value — nrabinowitz](https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value)

### 영상

- 🎥 [Javascript Pass by Value vs Pass by Reference — techsith](https://www.youtube.com/watch?v=E-dAnFdq8k8)
- 🎥 [JavaScript Value vs Reference Types — Programming with Mosh](https://www.youtube.com/watch?v=fD0t_DKREbE)

**[⬆ Back to Top](#목차)**

---

## 4. 명시적 변환, 암시적 변환, Nominal, 구조화, 덕 타이핑

### 글

- 📜 [What you need to know about Javascript's Implicit Coercion — Promise Tochi](https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23)
- 📜 [JavaScript Type Coercion Explained — Alexey Samoshkin](https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839)
- 📜 [Javascript Coercion Explained — Ben Garrison](https://hackernoon.com/javascript-coercion-explained-545c895213d3)
- 📜 [What exactly is Type Coercion in Javascript? - Stack Overflow](https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript)
- 📜 [You Don't Know JS: Types & Grammar [Book] — Kyle Simpson](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch04.html)
- 📜 [Type Coercion in JavaScript, and why everyone gets it wrong.](https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong)

### 영상

- 🎥 [== ? === ??? ...#@^% - Shirmung Bielefeld](https://www.youtube.com/watch?v=qGyqzN0bjhc&t)
- 🎥 [Coercion in Javascript - Hitesh Choudhary](https://www.youtube.com/watch?v=b04Q_vyqEG8)
- 🎥 [JavaScript Questions: What is Coercion? - Steven Hancock](https://www.youtube.com/watch?v=z4-8wMSPJyI)

**[⬆ Back to Top](#목차)**

---

## 5. == vs === vs typeof

### 글

- 📜 [JavaScript Double Equals vs. Triple Equals — Brandon Morelli](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)
- 📜 [What is the difference between =, ==, and === in JS? — Codecademy](https://www.codecademy.com/en/forum_questions/558ea4f5e39efed371000508)
- 📜 [Should I use === or == equality comparison operator in JavaScript? — Panu Pitkamaki](https://bytearcher.com/articles/equality-comparison-operator-javascript/)
- 📜 [== vs === JavaScript: Double Equals and Coercion — AJ Meyghani](https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript)
- 📜 [Why Use the Triple-Equals Operator in JavaScript? — Louis Lazaris](https://www.impressivewebs.com/why-use-triple-equals-javascipt/)
- 📜 [What is the difference between == and === in JavaScript? — Craig Buckler](https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript)
- 📜 [Why javascript's typeof always return "object"? — Stack Overflow](https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object)
- 📜 [Checking Types in Javascript — Toby Ho](http://tobyho.com/2011/01/28/checking-types-in-javascript/)
- 📜 [How to better check data types in JavaScript — Webbjocke](https://webbjocke.com/javascript-check-data-types/)
- 📜 [Checking for the Absence of a Value in JavaScript — Tomer Aberbach](https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html)

### 영상

- 🎥 [JavaScript - The typeof operator — Java Brains](https://www.youtube.com/watch?v=ol_su88I3kw)
- 🎥 [Javascript typeof operator — DevDelight](https://www.youtube.com/watch?v=qPYhTPt_SbQ)

**[⬆ Back to Top](#목차)**

---

## 6. 함수 범위, 블록 범위, 렉시컬(lexical) 범위

### 글

- 📜 [You Don't Know JS: Scope & Closures [Book] — Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md)
- 📜 [JavaScript Functions — Understanding The Basics — Brandon Morelli](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99)
- 📜 [The battle between Function Scope and Block Scope — Marius Herring](http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)
- 📜 [Emulating Block Scope in JavaScript — Josh Clanton](http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html)
- 📜 [The Difference Between Function and Block Scope in JavaScript — Joseph Cardillo](https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)
- 📜 [Function Scopes and Block Scopes in JavaScript — Samer Buna](https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7)
- 📜 [Understanding Scope and Context in JavaScript | Ryan Morr](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- 📜 [JavaScript Scope and Closures — Zell Liew](https://css-tricks.com/javascript-scope-closures/)
- 📜 [Understanding Scope in JavaScript — Wissam Abirached](https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/)
- 📜 [Speaking JavaScript - Variables: Scopes, Environments, and Closures — Dr. Axel Rauschmayer](http://speakingjs.com/es5/ch16.html)
- 📜 [Understanding Scope in JavaScript — Hammad Ahmed](https://scotch.io/tutorials/understanding-scope-in-javascript)

### 영상

- 🎥 [What Makes Javascript Weird ... and Awesome pt. 4 — LearnCode.academy](https://www.youtube.com/watch?v=SBwoFkRjZvE)
- 🎥 [Variable Scope in JavaScript — Kirupa Chinnathambi](https://www.youtube.com/watch?v=dhp57T3p760)
- 🎥 [JavaScript Block Scope and Function Scope — mmtuts](https://www.youtube.com/watch?v=aK_nuUAdr8E)
- 🎥 [What the Heck is Lexical Scope? — NWCalvank](https://www.youtube.com/watch?v=GhNA0r10MmA)

**[⬆ Back to Top](#목차)**

---

## 7. 식(expression) vs 문(statement)

### 글

- 📜 [All you need to know about Javascript's Expressions, Statements and Expression Statements — Promise Tochi](https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2)
- 📜 [Function Expressions vs Function Declarations — Paul Wilkins](https://www.sitepoint.com/function-expressions-vs-declarations/)
- 📜 [JavaScript Function — Declaration vs Expression — Ravi Roshan](https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38)
- 📜 [Function Declarations vs. Function Expressions — Mandeep Singh](https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052)
- 📜 [Function Declarations vs. Function Expressions — Anguls Croll](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)

### 영상

- 🎥 [Expressions vs. Statements in JavaScript — Hexlet](https://www.youtube.com/watch?v=WVyCrI1cHi8)
- 🎥 [JavaScript - Expression vs. Statement — WebTunings](https://www.youtube.com/watch?v=3jDpNGJkupA)
- 🎥 [Function Statements and Function Expressions — Codeacademy](https://www.youtube.com/watch?v=oB5rH_9bqAI)

**[⬆ Back to Top](#목차)**

---
