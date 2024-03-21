// https://www.codewars.com/kata/60edafd71dad1800563cf933/train/javascript

// Створимо функцію, яка містить акумулятор та повертає іншу функцію,
// яка збільшує значення акумулятора на 1:

function counter() {
  let acc = 1;
  return function () {
    return acc++;
  };
}

//Між внутрішньою та зовнішньою функціями відбувається замикання.

let increase = counter();

// Ми присвоїли змінній let increase виклик функції counter(),
// тобто, створили для let increase власну лексичну ОВ.
// Таким чином, якщо ми звернемось до increase(), вона кожного разу
// повертатиме нам збільшене на 1 значення:

increase(); //1
increase(); //2
increase(); //3

// Якщо ж ми присвоїмо виклик функції ще одній змінній,
// в неї буде вже інша лексична ОВ, тому спочатку знову повернеться 1,
// а далі так само число буде збільшуватись:

const incr2 = counter();

incr2(); //1
incr2(); //2
incr2(); //3

/////////////
/////////////
/////////////

// https://uk.javascript.info/task/closure-sum

function sum(a) {
  return function (b) {
    return a + b;
  };
}

sum(2)(3); //5
sum(7)(-4); //3

//Маємо зовнішню та внутрішню функції з різними параметрами
//Спочатку зовнішня функція поверне внутрішню
//А вже внутрішня функція поверне суму параметрів
//Тому такий дивний виклик

/////////////
/////////////
/////////////

// https://uk.javascript.info/closure#funkciyi-filtraciyi

//Спочатку в мене не вийшло,
//хоча тиждень тому я розбирав всі ці задачі
//На жаль, рішення не запам'яталося

function inBetween(a, b) {
  for (let i = 0; i < 10; i++) {
    if (i >= a && i <= b) {
      return i;
    }
  }
}

function inBetween(a, b) {
  return function () {
    for (let i = 0; i < 10; i++) {
      if (i >= a && i <= b) {
        return i;
      }
    }
  };
}

function inArray([num]) {
  return function () {
    return num;
  };
}

//Я не втримався, та подивився рішення.
//Виявилося, все набагато простіше:)

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

// Це також функція, яка повертає іншу функцію
// Внутрішня функція поверне всі значення вказанного діапазону

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.filter(inBetween(3, 6)); // 3, 4, 5, 6

// Маючи взірець, спробую написати функцію inArray

function inArray([num]) {
  return function ([x]) {
    return x;
  };
}

function inArray([num]) {
  return function ([num]) {
    return num;
  };
}

function inArray([num]) {
  return function ([x]) {
    return [x];
  };
}

function inArray([num]) {
  return function ([num]) {
    return [num];
  };
}

// Науковий метод тицяння не спрацював
// Терпець урвався, дивлюсь рішення

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

arr.filter(inArray([3, 5, 7, 8])); // (3) [3, 5, 7]

// Скажу чесно, я б довго йшов до цього рішення
// Про includes навіть і не подумав
// Чому не подумав? Бо не маю практики

/////////////
/////////////
/////////////

function createPerson(name, age) {
  let realName = name;
  let realAge = age;

  return function () {
    return {
      getName: function () {
        return realName;
      },
      getAge: function () {
        return realAge;
      },
      setAge: function (newAge) {
        realAge = newAge;
      },
      setName: function (newName) {
        realName = newName;
      },
    };
  };
}

let person = createPerson('Ivan', 23);

person.setAge(30); //      Uncaught TypeError: person.setAge is not a function
person.setName('John'); // Uncaught TypeError: person.setName is not a function
person.getName(); //       Uncaught TypeError: person.getName is not a function
person.getAge(); //        Uncaught TypeError: person.getAge is not a function

/////////////
/////////////
/////////////

function createTimer() {
  let currentTime = Date.now();
  let elapsedTime = Date.now() - currentTime;
  return {
    start: function () {
      return currentTime;
    },
    getTime: function () {
      return elapsedTime;
    },
  };
}

function createTimer() {
  let currentTime = Date.now();
  return {
    start: function () {
      return currentTime;
    },
    getTime: function () {
      return currentTime;
    },
  };
}

/////////////
/////////////
/////////////

//Тут все просто, за аналогією з додаванням

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

multiplier(7)(8); //56

/////////////
/////////////
/////////////

//Цю вирішив самостійно, тільки довго згадував правильний синтаксис `${defaultName} ${x++}`

function nameGenerator(defaultName) {
  let x = 1;
  return function () {
    return `${defaultName} ${x++}`;
  };
}

const generateName = nameGenerator('User');

console.log(generateName()); // User 1
console.log(generateName()); // User 2
console.log(generateName()); // User 3
