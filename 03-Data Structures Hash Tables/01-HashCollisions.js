//Hash Collision

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('ahhhh!');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream();  //O(1)

//Map allows you to use any datatype as a key, unlike object. Object only allow string use as key
//Map also maintain insertion order. Object does not maintain insertion order
const a = new Map();

//Set is similar to Map, unlike Map, Set only stores keys and no values
const b = new Set();
