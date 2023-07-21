let set = new Set();
let weakset = new WeakSet();

let obj = { key: "value" };

set.add(obj);
weakset.add(obj);

console.log(set.has(obj)); // true
console.log(weakset.has(obj)); // true

obj = null;

console.log(set.has(obj)); // false
console.log(weakset.has(obj)); // false
