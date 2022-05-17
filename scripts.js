
let user = {
    firstName: "Giedre",
    age: "16",
}
//user age
let bird = {
    "likes birds": true,
    canFly: false
}

//bird['likes birds']
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5
}

//Property value shorthand
function makeUser(firstName, age) {
    return {
      name: firstName,
      age: age,
    };
  }

  let user1 = makeUser("Giedre", 16);
  let user2 = makeUser("Anna,18");

  //
  function makeUser(name, age) {
    return {
      name, 
      age,
    };
  }

  let testObj = {
    propTest: 40,
  };
  
  if (testObj.propTest === undefined) {
    alert('no shuch property');
  }
  
  if ("propTest" in testObj) {
    alert('such property exist');
  } else {
    alert('no shuch property');
  }




console.log('hello Giedre');



