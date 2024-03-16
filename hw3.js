// РОБОТА ЗІ ЗМІННИМИ

// 1

var admin;
var name;
name = 'John';
admin = name;
alert(admin); // John

// 2

const ourPlanet = 'Earth';
let currentUser = userName;

// 3

const BIRTHDAY = '18.04.1982'; // використовувати великі букви?
const AGE = someCode(BIRTHDAY); // а тут?

// Великі літери можна використовувати для назв констант,
// значення яких вже відоме ще до виконання скрипта та важко запам'ятовується:
// const BIRTHDAY = '18.04.1982';
// const age = someCode(BIRTHDAY);
// const BIRTHDAY вже відома, вона не вираховується й так її легше запам'ятати
// const age пишемо звичайними літерами, бо значення вираховується

// ФУНКЦІЇ
// Цього не було в завданні, але буду вдячний за ревью:)

// 1 Чи потрібен "else"?

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Батьки дозволили?');
  }
}

// Без блоку else нічого не зміниться, оскільки,
// якщо спрацює перший return, код далі не виконується,
// якщо ж ні, просто спрацює другий return

// 2 Перепишіть функцію, використовуючи '?' або '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return (age = age || 'Батьки дозволили?');
}

// Це неправильно. І я забув, що за умовою повинна бути одна строка.
// Почухавши лоба, звернувся до чату:

function checkAge(age) {
  return age > 18 || confirm('Батьки дозволили?');
}

// Тепер трохи зрозуміліше, як це працює!
// Тобто функція поверне ліву частину умови, якщо вона true,
// АБО (||) праву частину (якщо ліва false)
// Цікаво, чи спрацює так само, якщо оператор або || просто замінити на оператор злиття ??:

function checkAge(age) {
  return age > 18 ?? confirm('Батьки дозволили?');
}

// Працює. Повертає false, якщо вік менший за 18, але чомусь не спливає confirm
// Але в рішенні був інший варіант, він працює як потрібно:

function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}

// Трохи збив з пантилику подвійний ?? - оператор null-злиття
// Звісно, коли йде мова про рішення однією строкою, одразу спадає на думку тернарник:)

// 3 Функція min(a, b)
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

const min = (a, b) => (a < b ? a : b);

// 4 Функція pow(x, n)
// Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n.
// Інакше кажучи, множить число x саме на себе n разів і повертає результат.

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

pow(7, 3); // 343

// Не зміг вирішити, подивився відповідь.
// На мою думку тут відбувається наступне:
// Ми створили акумулятор та почали перебирати від 1 до n
// На першій ітерації отримали 7*7=49 і записали це у result
// На другій 7*49=343 і переписали result
// Тепер i = 3, тобто умова i < 3 вже false, тому цикл переривається
// Після чого повертається result

// РЕКУРСІЯ

// Будь-який цикл можна переписати рекурсією:

function recursivePow(x, n) {
  return n == 1 ? x : x * recursivePow(x, n - 1);
}

// або краще

const recursivePow = (x, n) => (n == 1 ? x : x * recursivePow(x, n - 1));

// 1 Обчислення суми чисел до даного

// 1a За допомогою циклу
// Довго крутився на одному місці:

function sumTo(x) {
  let res = x;
  for (let i = 1; i < x; i++) {
    res += i;
  }
  return res;
}

function sumTo(x) {
  let result = x;
  for (let i = 1; i < x; i++) {
    result += x;
  }
  return result;
}

function sumTo(x) {
  let result = x;
  for (let i = 0; i < x; i++) {
    result += x;
  }
  return result;
}

function sumTo(x) {
  let result = x;
  for (let i = 1; i < x; i++) {
    result += x - 1;
  }
  return result;
}

function sumTo(x) {
  let result = x;
  for (let i = 0; i < x; i++) {
    result += x - 1;
  }
  return result;
}

function sumTo(x) {
  let result = x;
  for (let i = 1; i < x; i++) {
    result += x + 1;
  }
  return result;
}

// Попросив чат знайти помилку
// Помилка була в циклі, він неправильно додавав числа до акумулятора.
// Замість (x - 1) на кожній ітерації треба додавати поточне значення i:

function sumTo(x) {
  let result = 0; // В першому варіанті в мене тут було x;
  for (let i = 1; i <= x; i++) {
    result += i; // тут теж було x;
  }
  return result;
}

// До речі, можна зробити let result = x, а i < x і все буде працювати так само:

function sumTo(x) {
  let result = x;
  for (let i = 1; i < x; i++) {
    result += i;
  }
  return result;
}

// 1b Тепер спробую зробити те саме через рекурсію:

function sumTo(x) {
  return x == 1 ? x : x + sumTo(x - 1);
}

// Вгадав!
// Але через неуважність спочатку замість == написав = та забув про return

// Тепер можна з впевненністю писати більш лаконічний варіант:

const recursiveSumTo = (x) => (x == 1 ? x : x + recursiveSumTo(x - 1));

// 1c За допомогою формули арифметичної прогресії

// Арифметична прогресія - послідовність чисел з однаковою між ними різністю
// Наприклад 1, 4, 7, 10...
// В нашому випадку різність/прогресія складатиме 1, тобто числа йтимуть послідовно одне за іншим
// Але як записати цю формулу у функцію?
// Довелося знову звертатися до чату:

function sumTo(x) {
  return (x * (x + 1)) / 2;
}

// Це найбільш лаконічний варіант
// Гадаю, він буде й найшвидший
// На другому місці буде рекурсія, а найповільнішим буде варіант з циклом for (хоча ми цього й не помітимо).

// Чи можемо ми використовувати рекурсію для підрахунку sumTo(100000)?
// Ні, бо будемо довго чекати. Движок JS обмежує глибину рекурсії до 10000.

// 2 Розрахувати факторіал за допомогою рекурсивних викликів
// Робимо аналогічно як у recursivePow, тільки з одним параметром:

function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}

// Цікаво, але в завданні таке саме рішення, але чомусь навпаки:

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

// 3 Вивести одинозв’язаний список

// Скажімо, у нас є одинозв’язаний список (як описано в розділі Рекурсія та стек):
// Напишіть функцію printList(list), що виводить список елементів один за одним.
// Зробіть два варіанти рішення: з використанням циклу та з використанням рекурсії.
// Що краще: з рекурсією чи без неї?

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Гадаю, щоб достукатись до кожного елементу треба зробити запит,
// як у прикладі зі списком: list, list.next, list.next.next і т.д.
// Але як це закодити?
// Попросив чат пояснити, він дав таку відповідь:

function printListWithLoop(list) {
  let node = list; // Ініціалізуємо змінну node початковим елементом списку list
  while (node) {
    // Запускаємо цикл while, який продовжується, поки 'node' не буде рівний null
    console.log(node.value); // Виводимо значення поточного вузла
    node = node.next; // Переходимо до наступного вузла списку
  }
}

// Тепер алгоритм зрозуміло!
// Оскільки я раніше не зустрічався зі зв'язаними списками,
// я не зміг би написати таку функцію, не подивившись спочатку приклад
// Я думав, що буде набагато більше коду
// Зрозумівши логіку, я зміг легко відтворити функцію по пам'яті:)

// Я навіть спробував скоротити функцію:

function getValue(list) {
  while (list) {
    console.log(list.value);
  }
  list = list.next;
}

// Але так починається нескінченний цикл)))

// На жаль, з рекурсією я теж не зміг нічого придумати, тому знову звернувся до чату:

function printListWithRecursion(list) {
  console.log(list.value); // Виводимо значення поточного вузла
  if (list.next) {
    // Перевіряємо, чи існує наступний вузол
    printListWithRecursion(list.next); // Рекурсивно викликаємо функцію для наступного вузла
  }
}

// Тут було важче зрозуміти, але теж все стало на місця й тепер легко відтворюється!
// Можна ще трохи скоротити (сам я не зміг правильно написати тернарник):

function printListWithRecursion(list) {
  console.log(list.value);
  list.next ? printListWithRecursion(list.next) : null;
}

// Стрілочна функція виглядає майже так само

const printListWithRecursion = (list) => {
  console.log(list.value);
  list.next ? printListWithRecursion(list.next) : null;
};

// Але чат допоміг скоротити стрілочну:

const printListWithRecursion = (list) =>
  list ? (console.log(list.value), printListWithRecursion(list.next)) : null;

// Який з варіантів кращий, мені важко визначити.
// Якщо неправильно написати while, можна спіймати нескінченний цикл.
// Тому рекурсії я б тут віддав перевагу, особливо у вигляді скороченої стрілочної функції

// Тепер подивлюсь у відповідь:

// Цикл є більш ефективним, бо не витрачає ресурси для вкладених викликів.
// Рекурсив коротший, а іноді його легше зрозуміти.

// Я так і думав))

//CODEWARS

// 1
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Спочатку план був такий:
// Перетворити строку на масив слів за допомогою str.split(' ')
// Пройтись по словах, щоб вивести довжину кожного у цифрах в окремий масив
// Потім порівняти цифри з нового масиву та вивести найменше значення
// Але мені не вдалося самостійно це реалізувати

// Чат запропонував інший варіант, а коли я попросив зробити мій,
// виявилося, що він не коротший за запропонований чатом
// Тому зупинився на його варіанті - він лаконічніше та зрозуміліше:

function findShort(str) {
  const words = str.split(' '); // Перетворимо строку на масив слів
  let shortestLength = words[0].length; // Умовно призначимо найкоротшу довжину першому слову
  for (let i = 1; i < words.length; i++) {
    // Пройдемось по словах, починаючи з другого та з'ясуємо довжину кожного
    if (words[i].length < shortestLength) {
      // Якщо довжина слова коротша за shortestLength, воно стає shortestLength
      shortestLength = words[i].length;
    }
  }
  return shortestLength;
}

// Мій варіант був би такий:

function shortestWordLength(str) {
  const words = str.split(' '); // Перетворюємо строку на масив слів
  const lengths = []; // Масив для збереження довжин слів
  for (let word of words) {
    // Проходимося по кожному слову
    lengths.push(word.length); // Додаємо довжину поточного слова в масив
  }
  // Знаходимо мінімальну довжину серед слів
  let shortestLength = lengths[0]; // Ініціалізуємо поточне мінімальне значення першим елементом
  for (let length of lengths) {
    if (length < shortestLength) {
      shortestLength = length; // Оновлюємо поточне мінімальне значення, якщо знайдено слово коротше
    }
  }
  return shortestLength;
}

// Але якщо використати Math.min (не моя ідея), виглядало б трохи лаконічніше:

function shortestWordLength(str) {
  const words = str.split(' ');
  const lengths = [];
  for (let word of words) {
    lengths.push(word.length);
  }
  const shortestLength = Math.min(...lengths); // Знаходимо мінімальну довжину серед слів
  return shortestLength;
}

// Тож перший варіант, запропонований чатом, всеж таки кращий
// Не варто було винаходити велосипед))

// 2
// Complete the solution so that it reverses the string passed into it.

// Можна скористатись кількома способами:

// а) Ланцюг методів (split, reverse, join):
// - метод split('') з сепаратором розіб'є строку на масив літер
// - метод reverse() розташує окремі літери у зворотньому порядку
// - метод join('') з сепаратором знову з'єднає літери масиву у строку

function reverse(str) {
  return str.split('').reverse().join('');
}

// b) Перебор циклом:
// Ми йдемо з кінця строки до початку, формуючи її нову реверсивну версію:

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Хм. Виходить, тут можна також використати рекурсію

function reverseString(str) {
  return str * reverseString(str - 1);
} // Але як я не намагався, в мене не виходило

// Тому просто для прикладу те, що написав чат
function reverseString(str) {
  if (str === '') {
    return '';
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

// І стрілочний варіант
const reverseRecursiveString = (str) =>
  str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);

// с) Ланцюг методів (split та reduce)

function reverseString(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Метод split('') з сепаратором розіб'є рядок на масив літер

// Метод reduce отримує два параметри:
// - reversed (акумулятор для оберненого рядка)
// - char (поточний символ).
// Початкове значення акумулятора - пустий рядок ''.

// Поточний символ char додається ДО ПОЧАТКУ оберненого рядка reversed.
// На кожному кроці будується обернений рядок,
// бо кожний наступний символ теж додаватиметься ДО ПОЧАТКУ рядка.

// 3
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] += sum; // Упс. Тут я помилився:)
    }
  }
  return sum;
}

// Ура! Я правильно зрозумів логіку і сам написав функцію, зробивши тільки технічну помилку!
// Виправлений варіант:

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Те саме рекурсією (але я так поки що не вмію)

function positiveSum(arr, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  return (arr[index] > 0 ? arr[index] : 0) + positiveSum(arr, index + 1);
}

// 4
// Story
// Ben has a very simple idea to make some profit:
// he buys something and sells it again.
// Of course, this wouldn't give him any profit at all
// if he was simply to buy and sell it at the same price.
// Instead, he's going to buy it for the lowest possible price
// and sell it at the highest.

// Task
//Write a function that returns both the minimum and maximum number of the given list/array.

// На мою думку потрібно розташувати елементи масиву у порядку зростання,
// та повернути перший та останній

function minMax(arr) {
  arr.sort((a, b) => a - b); // Сортуємо стандартно за зростанням
  return [arr[0], arr[arr.length - 1]];
}

// Тут проблема була в тому, щоб правильно повернути обидва значення
// На початку було так: return arr[0], arr.length - 1
// Виправив помилку через чат

// А можна ще так (одне з рішень на CW)
const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
