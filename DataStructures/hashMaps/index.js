class Node {
  // {{{

  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
} // }}}
class HashMap {
  // {{{
  constructor() {
    this.load_factor = 0.8;
    this.capacity = 16;
    this.totalEntries = 0;
    this.arr = new Array(this.capacity);
  }
  hash(key) {
    let hashCode = 0,
      primeNumber = 31;
    for (let index = 0; index < key.length; index++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(index);
      hashCode %= this.capacity;
    }
    return hashCode;
  }
  set(key, value) {
    if (!this.has(key)) {
      // increase count only if key is new
      this.totalEntries++;
    }
    let idx = this.hash(key);
    if (!this.arr[idx]) {
      this.arr[idx] = new Node(key, value);
    } else {
      // traverse & chk if exists
      let tmp = this.arr[idx];
      if (tmp.value === value) {
        tmp.value = value;
        return;
      }
      while (tmp.next) {
        tmp = tmp.next;
        if (tmp.value === value) {
          tmp.value = value;
          return;
        }
      }
      tmp.next = new Node(key, value);
    }
    this.chkLoad();
  }
  chkLoad() {
    if (this.totalEntries > this.load_factor * this.capacity) {
      let entriesTwoDimenArray = this.entries();
      this.capacity *= 2;
      this.arr = new Array(this.capacity);
      for (let index = 0; index < entriesTwoDimenArray.length; index++) {
        const element = entriesTwoDimenArray[index];
        this.set(element[0], element[1]);
      }
    }
  }
  get(key) {
    let idx = this.hash(key);
    if (this.arr[idx] != undefined) {
      let tmp = this.arr[idx];
      while (tmp) {
        if (tmp.key === key) {
          return tmp.value;
        }
        tmp = tmp.next;
      }
    }
    return null;
  }
  has(key) {
    return this.get(key) != null;
  }
  length() {
    return this.totalEntries;
  }
  clear() {
    this.totalEntries = 0;
    this.capacity = 16;
    this.arr = new Array(this.capacity);
  }
  remove(key) {
    if (this.has(key)) {
      this.totalEntries--;
    }
    let idx = this.hash(key);
    if (arr[idx] != undefined) {
      let tmp = this.arr[idx];
      // case 1 if only one node & not key
      if (!tmp.next && tmp.key === key) {
        this.arr[idx] = undefined;
        return true;
      } else if (!tmp.next && tmp.key !== key) {
        return false;
      } else if (tmp.next && tmp.key === key) {
        this.arr[idx] = tmp.next;
        return true;
      } else {
        // traverse
        while (tmp) {
          // also handles last node
          if (tmp.next && tmp.next.key === key) {
            tmp.next = tmp.next.next;
            return true;
          }
          tmp = tmp.next;
        }
      }
    }
    return false;
  }
  entries() {
    let entriesArray = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i]) {
        let tmp = this.arr[i];
        while (tmp) {
          entriesArray.push([tmp.key, tmp.value]);
          tmp = tmp.next;
        }
      }
    }
    return entriesArray;
  }
} // }}}
const test = new HashMap(); // or HashMap() if using a factory
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");
console.log(test.entries());
