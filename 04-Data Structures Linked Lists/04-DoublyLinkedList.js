//Doubly Linked List

class Node{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList{

    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;        
    }

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;       //newNode.prev needs to be assign from the current tail

        this.tail.next = newNode;       //then the current tail.next needs to be assign from the newNode
        this.tail = newNode;            //then current tail can be assign from newNode
        this.length++;
        return this; 
    }
    
    prepend(value){
    
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
        return this;
    }

    insert(index, value){
        //edge case
        if(index === 0){
            this.prepend(value);
            return this.printList();
        }
        if(index === this.length){
            this.append(value);
            return this.printList();
        }
        if(index > this.length){
            return this.printList();
        }

        const newNode = new Node(value);
        let beforeNewNode = this.getNode(index-1);
        //Configure newNode properties to get all properties of the beforeNewNode
        newNode.next = beforeNewNode.next;
        newNode.prev = beforeNewNode;

        beforeNewNode.next = newNode;
        this.length++;

        return this.printList();
        
    }

    remove(index){
        let nodeToRemove = this.getNode(index);
    
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this.printList();
        }
        if(index === this.length-1){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return this.printList();

        }

        let nodeBeforeNodeToRemove = nodeToRemove.prev;
        nodeBeforeNodeToRemove.next = nodeToRemove.next;
        this.length--;
        return this.printList();
        
    }

    getNode(index){
        //edge case
        if(index < 0 || index > this.length){
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
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.prepend(9);
myLinkedList.prepend(8);
myLinkedList.insert(5,99);
myLinkedList.remove(0);
myLinkedList.remove(4);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList);