/**
 * constructor is used to initial an object
 * this is automatically called when object is created
 * same name as class name
 * there are three types of constructor
 * 1. default constructor(no parameter)
 * 2. parameterized constructor(with parameter)
 * 3. copy constructor()
 */

//Example of parameterized constructor
class Rectangle {
  constructor(l, w) {
    this.l = l;
    this.w = w;
  }

  area() {
    return this.l * this.w;
  }
}

//Example of copy constructor
class Rectangle1 {
  constructor(rectangleInstance) {
    this.l = rectangleInstance.l;
  }
}

let obj = new Rectangle(4, 5);
let obj2 = new Rectangle1(obj);
// obj2.l = 10;
console.log(obj, obj2, obj.area());

/**
 * encapsulation
 * binding of methods and variables together into a single unit
 * data is accessible from the class methods only
 */

class BankAccount {
  constructor(initialBalance) {
    let balance = initialBalance;

    this.getBalance = function () {
      return balance;
    };

    this.deposit = function (amount) {
      if (amount > 0) {
        balance = balance + amount;
      }
    };

    this.withdraw = function (amount) {
      if (amount > 0 && amount <= balance) {
        balance = balance - amount;
      }
    };
  }
}

let myAccount = new BankAccount(1000);

myAccount.deposit(50);
console.log(myAccount.getBalance());
myAccount.withdraw(500);
console.log(myAccount.getBalance());

/**
 * *abstraction  enables us to display only essential information and hiding unneccessory information.
 *
 */

/**
 * * inheritance means inheriting methods of other class (called super class or base class) this is of three types
 * 1. single inheritance(single class is inherited from parent class)
 * 2. multiple inheritance(javascrit does not support multiple inheritance)
 * 3. multilevel inheritance(subclass is inheriting properties from another subclass and the subclass is inheriting properties from parent class)
 * 4. hierarchical inheritance(more than one subclass can inherits from one parent class)
 * 5. hybrid inheritance(combination of multilevel and hierarchical inheritance)
 */

// example of single inheritance
class Memory {
  constructor(ram, rom) {
    this.ram = ram;
    this.rom = rom;
  }

  getRam() {
    return this.ram;
  }

  getRom() {
    return this.rom;
  }
}

class Dell extends Memory {
  constructor(ram, rom, version) {
    super(ram, rom);
    this.version = version;
  }

  getVersion() {
    return this.version;
  }
}

let dell = new Dell("4 Gb", "1 Tb", "11th Generation");
console.log(dell.getRam(), dell.getRom(), dell.getVersion());

// multilevel inheritance

class Laptop extends Dell {
  constructor(ram, rom, version, type) {
    super(ram, rom, version);

    this.type = type;
  }

  getAllInfo(a) {
    return a;
  }
}

const laptop = new Laptop("4 Gb", "1 Tb", "11th Generation", "folding");
console.log(laptop.getAllInfo(1));

/**
 * *polymorphism ability of methods to take different forms. it is of two types
 * 1. compile time polymorphism (not supported in javascript)
 * 2. run time polymorphism
 */

// compile time polymorphism (method overloading, operator overoading)

class Addition {
  constructor() {}

  static add(a, b) {
    console.log(a + b);
  }

  static add(a, b, c) {
    console.log(a + b + c);
  }
}

Addition.add(2, 3); // it is not supported in javascript
Addition.add(2, 3, 4);

// run time polymorphism (method overriding)
class Parent {
  constructor() {}

  myFunc() {
    console.log("my functin parent class.");
  }
}

class Child extends Parent {
  constructor() {
    super();
  }

  myFunc() {
    console.log("my function child class.");
  }
}

let name = new Parent();
let name1 = new Child();
name1.myFunc();

// LINKDLIST
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  insertAtLast(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.insertAtFirst(value);
      return;
    } else if (index < 0 || index > this.size) {
      return;
    }

    let newNode = new Node(value);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    newNode.next = current;
    previous.next = newNode;

    this.size++;
  }

  removeFirst() {
    if (this.size === 0) {
      return;
    }

    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  removeLast() {
    if (this.size === 0) {
      return;
    } else if (this.size === 1) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    let count = 0;
    let previous;

    while (count < this.size - 1) {
      previous = current;
      count++;
      current = current.next;
    }

    previous.next = null;
    this.size--;
  }

  removeAt(index) {
    if (this.size === 0) {
      return;
    } else if (index < 0 || index >= this.size) {
      return;
    }

    console.log(this.size, index)

    let current = this.head;
    let previous;
    let nextNode;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
      nextNode = current.next;
    }

    previous.next = nextNode;
    this.size--;
  }

  displayAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    console.log(current.value);
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.insertAtFirst(100);
list.insertAtFirst(200);
list.insertAtFirst(300);

list.insertAtLast(400);

list.insertAt(500, 4);

list.removeLast();
list.removeAt(4)
list.display();

/***
 *
 * * convert decimal to binary
 */
function decimalToBinary(num) {
  let originalNum = num;
  let output = 0;
  let lastZeroCount = 0;

  // to count last zeros and binary digits
  while (num !== 0) {
    let remainder = num % 2;
    if (output === 0 && remainder === 0) {
      lastZeroCount++;
    }
    output = output * 10 + remainder;
    num = Math.floor(num / 2);
  }

  //function to reverse a number
  function reverseNumber(num) {
    let output = 0;
    while (num !== 0) {
      let remainder = num % 10;
      output = output * 10 + remainder;
      num = Math.floor(num / 10);
    }

    return output;
  }

  output = reverseNumber(output);

  //to add zeros in binary number
  if (lastZeroCount > 0) {
    while (lastZeroCount > 0) {
      output = output * 10;
      lastZeroCount--;
    }
  }

  return originalNum + " => " + output;
}
console.log("Decimal to Binary = ", decimalToBinary(64));

/***
 * * convert binary to decimal
 */
function binaryToDecimal(num) {
  let originalNum = num;
  let power = 0;
  let output = 0;

  while (num !== 0) {
    let remainder = num % 10;
    if (remainder > 1) {
      return "Not a valid binary number.";
    }

    power === 0 ? (power = 1) : (power = power * 2);
    output = output + power * remainder;
    num = Math.floor(num / 10);
  }

  return originalNum + " => " + output;
}
console.log("Binary to Decimal = ", binaryToDecimal(1000000));

/**
 * * convert decimal number to octal number
 */
function convetDecimalToOctal(num) {
  let originalNum = num;
  let output = 0;
  let zeroCount = 0;

  while (num !== 0) {
    let remainder = num % 8;
    if (remainder === 0 && output === 0) {
      zeroCount++;
    }
    output = output * 10 + remainder;
    num = Math.floor(num / 8);
  }

  function reverseNumber(num) {
    let output = 0;

    while (num !== 0) {
      let remainder = num % 10;
      output = output * 10 + remainder;
      num = Math.floor(num / 10);
    }

    return output;
  }

  output = reverseNumber(output);

  if (zeroCount > 0) {
    while (zeroCount !== 0) {
      output = output * 10;
      zeroCount--;
    }
  }

  return originalNum + " => " + output;
}
console.log("Decimal to Octal = ", convetDecimalToOctal(61));

/**
 * * convert octal to decimal
 */
function convertOctalToDecimal(num) {
  let originalNum = num;
  let output = 0;
  let power = 0;

  while (num !== 0) {
    let remainder = num % 10;
    if (remainder > 7) {
      return "Not a Valid Octal Number.";
    }

    power === 0 ? (power = 1) : (power = power * 8);
    output = output + power * remainder;
    num = Math.floor(num / 10);
  }

  return originalNum + " => " + output;
}
console.log("Octal to Decimal = ", convertOctalToDecimal(75));

/**
 * * convert decimal to hexadecimal
 */
function convertDecimalToHexadecimal(num) {
  let originalNum = num;
  let output = "";
  let obj = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  while (num !== 0) {
    let remainder = num % 16;
    if (remainder > 9) {
      output = obj[remainder] + output;
    } else {
      output = remainder + output;
    }
    num = Math.floor(num / 16);
  }

  return originalNum + " => " + output;
}
console.log("Decimal to Hexadecimal = ", convertDecimalToHexadecimal(3596029));

/**
 * *convert hexadecimal to decimal
 */
function convertHexadecimalToDecimal(num) {
  let originalNum = num;
  let output = 0;
  let obj = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  let power = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    power === 0 ? (power = 1) : (power = power * 16);

    if (obj.hasOwnProperty(num[i])) {
      output = output + obj[num[i]] * power;
    } else {
      output = output + num[i] * power;
    }
  }

  return originalNum, " => ", output;
}
console.log("HexaDecimal to Decimal = ", convertHexadecimalToDecimal("36DEFD"));

console.log(0x36d); // hexadecimal number
console.log(0o54); //octal number
console.log(0b1000000); // binary number
console.log("" + 54); //decimal number
