//ДЗ

//https://bigfrontend.dev/quiz/Hoisting-I

const a = 1;
console.log(a);
// 1
//Змінна задекларована та ініціалізована,
//виклик зроблено після її декларування

var b;
console.log(b);
b = 2;
// undefined
//Змінна задекларована, але не ініціалізована
//Ми вже можемо використовувати змінну
//Але неініцілізована var поверне undefined
//(ініціалізація var за замовчуванням)
//console.log(b) після b = 2 повернув би 2

console.log(c);
var c = 3;
//3
//Змінна задекларована та ініціалізована, спрацює її підняття

console.log(d);
let d = 2;
//Буде помилка посилання. Змінна вже існує, але звернутись до неї
//можна тільки після let (тимчасова мертва зона)

//У відповідях 2 та 3 я помилився.

//***

//https://bigfrontend.dev/quiz/Hoisting-II

const func1 = () => console.log(1);
func1();
//1

func2();
function func2() {
  console.log(2);
}
//2
//Функціяб що об'явлена, завжди піднімається

func3();
var func3 = function func4() {
  console.log(3);
};
//Нічого не вийде. Функціональні вирази не піднімаються

//***

//https://bigfrontend.dev/quiz/Hoisting-III

var a = 1;

function func() {
  a = 2;
  console.log(a);
  var a;
}

func();
//2
//Це дві різні var зі своїм власним лексичним оточенням.
//Оскільки всередині функції а = 2, її і буде використано

console.log(a);
//2
//var підніметься і для компілятора код буде виглядати як
//var a
//a = 2
//console.log(a)
//Тут я знову помилився - console.log(a) звернеться до глобальної
//var a = 1

if (!('b' in window)) {
  var b = 1;
}

console.log(b);
//ХЗ. Засмучує знак оклику. Десь таке використовується, читав, але
//тепер не можу знайти, де.
//Взагалі console.log(b) знаходиться у ГОВ і не може звернутись до
//'b' у середині if, так як це теж відноситься до блочної ОВ.
//Тому буде помилка.
//А ні. Undefined. Хм. Може знак оклику якось переносить 'b' до ГОВ?
// Там ще й глобальний об'єкт window...

//***

//https://bigfrontend.dev/quiz/Hoisting-VI

var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo);
})();

//Це функція, що одразу викликається.
//Схоже на застарілий код (IIFE) - емуляцію блока.
//Але ж зсередини блоку можна отримати доступ до зовнішніх змінних.
//Тобто тоді виведе 1, 2, 2, 3, 3
//А ні, повертає undefined, 1, 2, 3, 1

//***

//https://bigfrontend.dev/problem/implement-once

// _.once(func) is used to force a function to be called only once, later calls only returns the result of first call.

// Can you implement your own once()?

function func(num) {
  return num;
}

const onced = once(func);

onced(1);
// 1, func called with 1

onced(2);
// 1, even 2 is passed, previous result is returned

//Я не знаю, як робити це завдання

//***

//https://www.codewars.com/kata/526ec46d6f5e255e150002d1/train/javascript

function createFunctions(n) {
  let callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

//Було запропоновано отрефакторити код, щоб він запрацював.
//Я чисто інтуїтивно замінив var на let і все запрацювало.
//До кінця не можу зрозуміти, чому.
//Мабуть, тому що let лишається у ОВ блоку, на відміну від var.

//***

//https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

//Тут навіть умову складно зрозуміти. 
//Хоча поняття про числа Фібоначчі маю.

//В останньому завдані створити функції, що повертають об'єкти не можу.