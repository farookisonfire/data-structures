class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  push(value) {
    if (value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      const nodeToPop = this.tail;
      this.head = null;
      this.tail = null;
      return nodeToPop;
    } else {
      let prev;
      let temp = this.head;

      while (temp.next) {
        prev = temp;
        temp = temp.next;
      }

      this.tail = prev;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}
