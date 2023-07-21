# JavaScript_Assessment3
------------------------------------------
# Question 1
## What is shallow & deep copy? How can we do shallow and deep copy in objects?
- Answer - We know that there are 2 ways to clone object in JS
* Shallow Copy - it means the `only first level of obj is copied ` deeper level of copy are referenced.
when it comes to deep copy ,
* Deep Copy - it means `all levels of obj is copied ` we can say it is true or real copy of an obj.

 In Example Of shallow copy 

* Shallow copy can access using the `spread opertor (...)` or we can use object method called `object.assign()`
 ```javascript

 const obj = { name: 'Shivam', surname: { shukla: 1 } };

 const shallowCopy1 = { ...obj };
 const shallowCopy2 = Object.assign({}, obj);

 shallowCopy1.name = 'Shubham';
 shallowCopy1.surname.shukla = 2;

 shallowCopy2.name = 'Kaif';
 shallowCopy2.surname.shukla = 3;

 console.log(obj); 
 console.log(shallowCopy1); 
 console.log(shallowCopy2);

 // Output
 mac@macs-MacBook-Pro JavaScript_Assessment3 % node index.js
 { name: 'Shivam', surname: { shukla: 2 } }
 { name: 'Shubham', surname: { shukla: 2 } }
 { name: 'Kaif', surname: { shukla: 2 } }
 
 ```
* After updating a property in the first level of the cloned objects, the original property is not updated.

* After updating a property in a deeper level, the original property is also updated. This happens because, in this case, deeper levels are referenced, not copied.


* Deep Copy - A deep copy can be accesed using` JSON.parse() + JSON.stringify():`

```javascript 
const obj = { name: 'Shivam', surname: { shukla: 1 } };

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.name = 'Kaif';
deepCopy.surname.shukla = 2;

console.log(obj); 
console.log(deepCopy);

// Output :
mac@macs-MacBook-Pro JavaScript_Assessment3 % node index.js
{ name: 'Shivam', surname: { shukla: 1 } }
{ name: 'Kaif', surname: { shukla: 2 } }

```
- As we can see in code 
 * After updating a property in the first level of the cloned objects, the original property is not updated.
 * After updating a property in a deeper level, the original property is neither updated. This happens because, in this case,   deeper levels are also copied.
------------------------------------------
------------------------------------------
# Question 2 
## What will be the output?Why?
```js
function sum(...theArgs) { 
   return theArgs.reduce((previous, current) => { 
        return previous + current; }); 
    } 
console.log(sum(1, 2, 3)); 
console.log(sum(1, 2, 3, 4));

// Output 
6
10
 
```
* Why - This is because the sum function takes any number of argument , collects them into an array using rest operator 
` (...theArgs)` and then use the `reduce() `method to sum up all the values in array,
The first call or we can say step `sum(1,2,3)` return the sum of `(1,2,3)` which return 6 , in Second call
`sum(1,2,3,4)`returns 10 ,so the output of code is `6` and `10`.

------------------------------------------
------------------------------------------
# Question 3
## What will be the output?Why?
```js
 function addition(number1, number2, number3) {
  console.log(number1 + number2 + number3);
}
let numbers = [10, 20, 30];
addition(...numbers);

// Output:
60
```
* Why - Because the fn() takes three argu and add them together. the nums array contains three element, so the fun()
will be called with the arguments `10,20 and 30` when the fucntion is called 
the arguments will be added together and result will be logged to the console.

------------------------------------------
------------------------------------------
# Question 4 
## What is the difference between object and map?

* Answer - `An object is a data structure that stores data in key-value pairs. The keys are used to access the values, and the values can be of any type. A map is a data structure that stores data in key-value pairs, but the keys must be unique. The values can be of any type.`
Eg.
``` js
// Create an object
const person = {
    name: "Shivam",
    age: 25,
    occupation: "Software Engineer"
  };
  
  // Create a map
  const people = new Map();
  people.set("Mohd Kaif", 20);
  people.set("Saurabh", 22);
  people.set("Semwal Gaurav", 24);
  
  // Access data from an object
  console.log(person.name);
  
  
  // Access data from a map
  console.log(people.get("Saurabh"));
  
  
  // Update data in an object
  person.age = 22;
  
  // Update data in a map
  people.set("Saurabh", 22);
  
  // Delete data from an object
  delete person.age;

  // Output:
  Shivam
  22
  
  ```
  
------------------------------------------
------------------------------------------
# Question 5 
## Rewrite the code below to use array destructuring instead of assigning each value to a variable.
```js 
let item = ["Egg", 0.25, 12]; 
let name = item[0]; 
let price = item[1]; 
let quantity = item[2]; 
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`); console.log(); 

// After Destructuring code we can write it like this
let item = ["Egg", 0.25, 12]; 
let [name, price, quantity] = item;
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
console.log(); 

// Output:
 Item: Egg, Quantity: 12, Price: 0.25
```
------------------------------------------
------------------------------------------
# Question 6
## Using Array Destructuring get all of the names from this Nested Array
```js
const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
// Write your code here 
const [] = moreStudents; 
console.log(student1, student2, student3, student4, student5);

```
* The first step is to declare the variables that will hold the values of each element in the array. In this case, we will need five variables: student1, student2, student3, student4, and student5.

The next step is to use array destructuring to assign the values of each element in the array to the corresponding variable. To do this, we use the following syntax:

```js
const [student1, [student2, student3, ],[student4, student5]] = moreStudents;
```
* This will assign the value of the first element in the array to the variable student1, the value of the second element to the variable student2, and so on.

Finally, we can log the values of the variables to the console to see the results.
```js
console.log(student1, student2, student3, student4, student5);
```
The final code be like this 
```js
const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
const [student1, [student2, student3, ],[student4, student5]] = moreStudents;
console.log(student1, student2, student3, student4, student5);

// Output :
Chris Ahmad Antigoni Toby Sam

```
* That's how Destructuring get all of the names from this Nested Array
------------------------------------------

------------------------------------------
# Question 7 
## Fix the code to make it work.
```js
let map = new Map(); 
map.set("key", "value"); 
let keys = map.keys();
keys.push("more");

```
Here is fixed code 
```js
let map = new Map();
map.set("key", "value");
let keys = Array.from(map.keys()); // Array.from() Method 
keys.push("more");
console.log(keys);

// Output :
[ 'key', 'more' ]
```

* `Array.from()` method to convert the iterator returned by `map.keys()` into an array. This allows us to use the push method to add a new element to the keys array.


------------------------------------------
------------------------------------------
# Question 8 
## What is the difference between set and weakset? Explain with the help of examples.
* Difference between set and weakset
             
*  Set does not allow duplicates,                           Weak set does              
* A set is iterable                                          while a weak set is not.
* A set can be used with the `for...of` loop,          while a weak set cannot    
* A set can be used with the `map()` function,                while a weak set cannot.
* A set can be used with the `filter()` function,             while a weak set cannot.   
* The main diff. b/w them is that `Set` can store any type of value while `weakset` not.
In Example :




------------------------------------------
------------------------------------------
# Question 9
## What is the difference between map and weakmap? Explain with the help of examples.
* Difference b/w them :
* `**Map**` and `**weakmap**` are both key-value stores in JavaScript. They are both used to associate a value with a key. but, there are some key differences between the two.

* `**Maps**` are `**strong**`, which means that they keep a strong reference to the value that they store. This means that the value will not be garbage collected as long as the map exists.
* `**Weakmaps**` are `**weak**`, which means that they keep a weak reference to the value that they store. This means that the value may be garbage collected if there are no other strong references to it.

Here is an example of how to use a map:
```js
const map = new Map();
map.set('foo', 'bar');
console.log(map.get('foo')); 

//Output:
bar

```
Here is an example of how to use a weakmap:
```js
const weakmap = new WeakMap();
weakmap.set(obj, 'bar');
console.log(weakmap.get(obj)); 

// Output: 
bar

```
In this example, the object `obj` is not a primitive value. If it were a primitive value, then the weakmap would keep a strong reference to it and it would not be garbage collected. However, since `obj` is not a primitive value, the weakmap will only keep a weak reference to it and it may be garbage collected if there are no other strong references to it.

------------------------------------------