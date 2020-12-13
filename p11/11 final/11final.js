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
