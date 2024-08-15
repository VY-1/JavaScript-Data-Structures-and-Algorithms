
class MyArray {
    constructor(){
        this.length = 0;    //starting length at 0
        this.data = {};     //create an object
    }

    get(index){
        return this.data[index];    //return data at index position
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        if(this.length == 0){
            return null;
        }
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    

    delete(index){
        if(index > this.length){

            return null;
        }
        if(index == this.length){
            return this.pop();
        }
        const deleteItem = this.data[index];
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i + 1];
            
        }
        this.pop(); //pop to remove the left over element at the last index

        return deleteItem;

    }

}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('Animal');
newArray.push("Cow");
newArray.push("Dog");
newArray.push("Cat");
newArray.push("Wow");

console.log(newArray);

newArray.pop();
console.log(newArray);

console.log(newArray.pop());
console.log(newArray);

console.log(newArray.delete(2));

console.log(newArray);