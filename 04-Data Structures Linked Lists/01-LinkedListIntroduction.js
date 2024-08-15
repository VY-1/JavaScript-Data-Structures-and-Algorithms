// Linked List Intro; Unliked Java language, javascript doesn't have built in LinkedList
// We need to implment LinkedList function in javascript to use it

//array list
const basket = ['apples','grapes', 'pears'];

/*
linked list: apples --> grapes --> pears

apples
8947 --> grapes
         8742 --> pears
                  372 --> null

*/

//Pointer that reference to an object
let obj1 = { a: true };   //obj1 contains { a: true }
let obj2 = obj1;          //object 2 points to obj1

obj1.a = 'booya'

console.log('1', obj1);
console.log('2', obj2);

obj2.a = 'booya booya'

console.log('1', obj1);
console.log('2', obj2);

delete obj2
delete obj1

console.log('1', obj1);
console.log('2', obj2);