// Implmenting Linked List

// Implement linked list 10-->5-->16

//create an object head: node with value, next
/*
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
*/

//Creating a class for linked list
class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    };

    //appends new node to our current list 
    append(value){
        const newNode = {
            value: value,
            next: null
        };
        
        //append to the end which is the tail
        this.tail.next = newNode;
        this.tail = newNode; 
    
        this.length++;
        return this;
    };

    prepend(value){
        const newNode = {
            value: value,
            next: null
        };
    

        //prepend the the beginning of the head
        let prevHead = this.head;       //store the existing head to prevHead
        this.head = newNode;            //set head to newNode
        this.head.next = prevHead;      //set the new head.next to prevHoead
        this.length++;                  //increase the length count

        /*
        Alternative

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        */
        return this;

    }


}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList);