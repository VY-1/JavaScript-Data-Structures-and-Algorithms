
//Implementing Hash Table

class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value){
        // hash address based on key
        let address = this._hash(key);

        //if address doesn't exist in data array, create new array in data with that address and push the (key,val) pair array into it
        if(!this.data[address]){
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        return this.data;

    }

    get(key){
        // hash address based on key
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket);
        //If there is something in currentBucket
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){

                //currentBucket[i][0] , 0=key, 1=value
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }

        //otherwise return undefined
        return undefined;

    }

    keys(){
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                console.log(this.data[i][0][0])
                //add the key to keysArray
                keysArray.push(this.data[i][0][0]);
            }
        }

        return keysArray;
    }

    values(){
        const valuesArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                console.log(this.data[i][0][1]);
                //add the value to valuesArray
                valuesArray.push(this.data[i][0][1]);
            }
        }
        return valuesArray;
    }

    items(){
        const itemsArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                console.log(this.data[i][0]);
                itemsArray.push(this.data[i][0]);
            }
        }
        return itemsArray;
    }

}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 50);
myHashTable.set('oranges', 2)


myHashTable.keys();
myHashTable.values();
myHashTable.items();