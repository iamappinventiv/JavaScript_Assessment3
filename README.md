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

