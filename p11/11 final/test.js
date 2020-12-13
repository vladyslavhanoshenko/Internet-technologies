/* var diapason = prompt("Доброго дня. Введіть діапазон пошуку числа через кому (від найменшого до найбільшого)")
var min = diapason.split(',')[0];
var max = diapason.split(',')[1];

 */

var high = 100;
var low = 0;
var result = null;
var currentValue;

do {
  currentValue = parseInt((high + low) / 2);

  if (result == "lower") {
    high = parseInt(high / 2);
  }
  if (result == "higer") {
    low = currentValue;
    high = parseInt((high + currentValue) / 2);
  }
} while (result != "Guessed");
