class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newNode;
        }
        // console.log('before this.tail.next ', this.tail.next);

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }

        console.log('this.tail.next ', this.tail.next);
        console.log('this.tail ', this.tail);
    }

    converToArray() {
        const listArray = [];
        let element = this.head;
        while (element) {
            listArray.push(element);
            element = element.next;
        }
        return listArray;
    }

    addElementAtStart(value) {
        this.head = {value: value, next: this.head}
        // if (!this.tail) {
        //     this.tail = {value: value, next: this.head}
        // }
    }
}

const linkedList = new LinkedList(10, 20);
console.log('linkedList ', linkedList);
// linkedList.append(10);
// linkedList.append(20);
// linkedList.append(30);
// linkedList.append(40);

console.log('linkedList after update', (JSON.stringify(linkedList)));
console.log(linkedList.converToArray());
linkedList.addElementAtStart(1);
console.log('linkedList after prepend', (JSON.stringify(linkedList)));
console.log(linkedList.converToArray());