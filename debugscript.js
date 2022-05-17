let fruits = ['apple', 'orange'];// begins with an emtpy array

for (let i = 0; i < fruits.length; ++i) {
  console.log(i + ": " + fruits[i]);
}

let weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
document.writeln(weekdays);

for(let i = 0; i < weekdays.length; ++i) {
  console.log(i + ": " + weekdays[i]);
}

for(let item in weekdays) {
  console.log(item + ": " + weekdays[item]);
}


//for-each <- 
for (let item of weekdays) {
  console.log(item);
}

fruits.push('Kiwi', 'Lemon');

for (let i = 0; i < fruits.length; ++i) {
  console.log(i + ": " + fruits[i]);
}

fruits.pop();
console.log(fruits);

fruits.unshift("Lemon","Pineapple");
console.log(fruits);