const strings = ['a', 'b', 'c', 'd'];

//push
strings.push('e');  //O(1), can be O(n), when using dynamic array

strings[5] = 'f';

console.log(strings);

console.log(strings.length);
//pop
strings.pop();  // O(1)
strings.pop();

strings.unshift('x');   // O(n)

console.log(strings);

//splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);

