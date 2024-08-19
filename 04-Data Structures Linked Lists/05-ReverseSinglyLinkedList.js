
//Reverse a Singly Linked List

// Implementing Linked List wit Refactoring

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    //append new node at the end of the list
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
        
    }

    //prepend new node at the beganning of the list
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //insert new node at index specify
    
    insert(index, value){
        if(index < 0 || index > this.length){
            return this.printList();
        }
        if(index === 0){
            this.prepend(value);
            return this.printList();
        }
        //edge case
        if(index === this.length){
            this.append(value);
            return this.printList()
        }
        const newNode = new Node(value);
        const beforeNewNode = this.getNode(index-1);   //node before currentNode
        
        newNode.next = beforeNewNode.next;
        beforeNewNode.next = newNode;
        this.length++;
        return this.printList()
    }

    remove(index){
        if(index < 0 || index > this.length){
            return this.printList();
        }
        const nodeBeforeUnwanted = this.getNode(index-1);
        const unwatedNode = nodeBeforeUnwanted.next;    //assign unwantedNode to nodeBeforeUnwanted.next
        if(index === 0){
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }
        
        nodeBeforeUnwanted.next = unwatedNode.next;     //reassign nodeBeforeUnwated.next to unwantedNode.next
        this.length--;
        return this.printList();
    }
    
    getNode(index){
        if(index > this.length - 1){
            return undefined;
        }
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printList(){
        const array = [];
        let currentNode = this.head;            //set currentNode to the head
        //While currentNode is not null
        while(currentNode !== null){
            array.push(currentNode.value);      //add it to the array
            currentNode = currentNode.next;     //set the currentNode to currentNode.next
        }
        console.log(array);
    }

    reverse(){
        if(!this.head.next){    //if this.head.next === null
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();

    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(4, 20);
myLinkedList.insert(5,22);
myLinkedList.insert(6,"Hi");
myLinkedList.remove(0);
myLinkedList.remove(5);

myLinkedList.reverse();

//.log(myLinkedList.getNode(3));

//myLinkedList.printList();
console.log(myLinkedList);