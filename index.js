// Задание 1
// Создать объект, описывающий автомобиль (производитель, 
// модель, год выпуска, средняя скорость), и следующие функции 
// для работы с этим объектом.
// 1.    Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для пре- 
// одоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необхо- 
// димо делать перерыв на 1 час.
// const car = {
//     manufacturer: 'Stellantis',
//     model: 'Maserati',
//     year: 2017,
//     averageSpeed:250
// };
// function carInfo(car){
//     console.log(`Manufacturer: ${car.manufacturer}`);
//     console.log(`Model: ${car.model}`);
//     console.log(`Year of issue: ${car.year}`);
//     console.log(`Average speed: ${car.averageSpeed}`);
// }
// carInfo(car);

// function carTime(distance){
//     const timeWithoutBreaks = distance / car.averageSpeed;
//     const breaks = Math.floor(timeWithoutBreaks / 4);
//     const result = timeWithoutBreaks + breaks;
//     return result;
// }
// const distance= 500;
// const timeNeeded = carTime(distance);
// console.log(timeNeeded);

////////////////////////////////////////////////////////////////////////////////

// Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна- 
// менатель дроби, и следующие функции для работы с этим объ- 
// ектом.
// 1.    Функция сложения 2-х объектов-дробей.
// 2.    Функция вычитания 2-х объектов-дробей.
// 3.    Функция умножения 2-х объектов-дробей.
// 4.    Функция деления 2-х объектов-дробей.
// 5.    Функция сокращения объекта-дроби.
// const fraction1= {
//     numerator: 6,
//     denominator:8
// };
// const fraction2= {
//     numerator: 18,
//     denominator:12
// };
// function sum(f1, f2){
//     const numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
//     const denominator = f1.denominator* f2.denominator;
//     return {numerator, denominator};
// }
// const resultOfSum=sum(fraction1, fraction2);
// console.log(resultOfSum.numerator/resultOfSum.denominator);


// function subscribe(f1, f2){
//     const numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
//     const denominator = f1.denominator* f2.denominator;
//     return {numerator, denominator};
// }
// const resultOfSubscribe=subscribe(fraction1, fraction2);
// console.log(resultOfSubscribe.numerator/resultOfSubscribe.denominator);


// function multiple(f1, f2){
//     const numerator = f1.numerator * f2.denominator * f2.numerator * f1.denominator;
//     const denominator = f1.denominator* f2.denominator;
//     return {numerator, denominator};
// }
// const resultOfMultiple=multiple(fraction1, fraction2);
// console.log(resultOfMultiple.numerator/resultOfMultiple.denominator);


// function division(f1, f2){
//     const numerator = f1.numerator * f2.denominator / f2.numerator * f1.denominator;
//     const denominator = f1.denominator* f2.denominator;
//     return {numerator, denominator};
// }
// const resultOfDivision=division(fraction1, fraction2);
// console.log(resultOfDivision.numerator/resultOfDivision.denominator);


////////////////////////////////////////////////////////////////////////////////////


// Задание 3
// Создать объект, описывающий время (часы, минуты, секун- 
// ды), и следующие функции для работы с этим объектом.
// 1.    Функция вывода времени на экран.
// 2.    Функция изменения времени на переданное количество 
// секунд.
// 3.    Функция изменения времени на переданное количество 
// мин у т.
// 4.    Функция изменения времени на переданное количество 
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например: если ко 
// времени «20:30:45» добавить 30 секунд, то должно получиться 
// «20:31:15», а не «20:30:75».
const time={
    hour:17,
    minute:15,
    second:20
};
function displatTime(time){
    const hours = time.hour;
    const minutes = time.minute;
    const seconds = time.second;
    return `${hours}:${minutes}:${seconds}`;
}
console.log(displatTime(time));
