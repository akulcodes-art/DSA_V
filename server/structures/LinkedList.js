class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  toArray() {
    let result = [];
    let temp = this.head;

    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    return result;
  }
}

module.exports = LinkedList;