/* var diapason = prompt("Доброго дня. Введіть діапазон пошуку числа через кому (від найменшого до найбільшого)")
var min = diapason.split(',')[0];
var max = diapason.split(',')[1];

 */

/* var high = 100;
var low = 0;
var result = null;
var currentValue;

alert(
  "Вітаємо! Загадайте число від 1 до 100. Наш алгоритм спробує його відгадати"
);

do {
  currentValue = parseInt((high + low) / 2);
  result = prompt(
    "Ваше число " +
      currentValue +
      ". Якщо ми вгадали то напишіть Guessed, якщо ваше число менше - напишіть lower, якщо більше - higer"
  );
  if (result == "lower") {
    
    high = parseInt(high / 2);
  }
  if (result == "higer") {
    low = currentValue;
    high = parseInt((high + currentValue) / 2);
  }
} while (result != "Guessed");
 */

var high = 100;
var low = 0;
var result = null;
var currentValue;
alert(
  "Вітаємо! Загадайте число від 1 до 100. Наш алгоритм спробує його відгадати"
);

do {
  currentValue = parseInt((high + low) / 2);
  result = prompt(
    "Ваше число " +
      currentValue +
      ". Якщо ми вгадали то напишіть Guessed, якщо ваше число менше - напишіть lower, якщо більше - higer"
  );
  if (result == "lower") {
    high = currentValue;
  }
  if (result == "higer") {
    low = currentValue;
  }
} while (result != "Guessed");
