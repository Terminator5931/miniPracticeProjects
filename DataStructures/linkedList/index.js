class Node {
  constructor(val) {
    this.val = val || null;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.size++;
  }
  at(idx = 0) {
    let tmp = this.head,
      originalIdx = idx;
    while (idx) {
      tmp = tmp.next;
      idx--;
    }
    console.log(`Value at ${originalIdx} 0-based index is ${tmp.val}`);
  }
  toString() {
    if (!this.size) {
      console.log("null");
      return;
    }
    let output = "";
    let tmp = this.head;
    while (tmp) {
      output += `${tmp.val} -> `;
      tmp = tmp.next;
    }
    output += "null ";
    console.log(output);
  }
  contains(value) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.val === value) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  }
  pop() {
    if (this.size == 1) {
      this.head = this.tail = null;
    } else {
      let tmp = this.head;
      while (tmp.next != this.tail) {
        tmp = tmp.next;
      }
      this.tail = tmp;
      this.tail.next = null;
    }
  }
  find(value) {
    let idx = -1,
      tmp = this.head;
    while (tmp) {
      idx++;
      if (tmp.val === value) {
        return idx;
      }
      tmp = tmp.next;
    }
    return "null";
  }
  prepend(value) {
    if (!this.size) {
      this.append(value);
    } else {
      let tmp = new Node(value);
      tmp.next = this.head;
      this.head = tmp;
    }
  }
  insertAt(idx, value) {
    // 1-based idx
    if (!this.size && idx == 1) {
      this.append(value);
    } else if (idx > this.size + 1) {
      this.append(value);
    } else {
      let tmp = this.head,
        newNode = new Node(value);
      idx--;
      if (idx == 0) {
        this.prepend(value);
        return;
      }
      for (let index = 0; index < idx - 1; index++) {
        tmp = tmp.next;
      }
      newNode.next = tmp.next;
      tmp.next = newNode;
    }
  }
}
ll = new LinkedList();
ll.append(5);
ll.append("banana");
ll.append("raspberry pie");
ll.append("helper");
ll.append("doas");
ll.toString();
ll.insertAt(4, "raspberry 02W");
ll.toString();
