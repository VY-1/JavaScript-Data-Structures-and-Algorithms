//Create a function that reverses a string:

function reverse(str){
    const newString = [];
    for(let i = str.length-1; i>=0; i--){
        newString.push(str[i]);
    }

    return newString.join('');
}

console.log(reverse("Hello"));

function reverse2(str){
    return str.split('').reverse().join('');
}

console.log(reverse2("My Name Is Joe Daddy"));

//ES6 syntax
const reverse3 = str => str.split('').reverse().join('');

console.log(reverse3("Your Name Is Joe Mamaa"));