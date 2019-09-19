// Stack functiond: push, pop, peek, length In js the Array corresponds to a
// stack

var letters = []; // this is our stack

var word = "freeCodeCamp"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

// Implementation Creates a stack

var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Add to the top of the stack

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Remove from the end of the stack

    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    // See the top element value

    this.peek = function () {
        var result = this.storage[this.count - 1];
        return result;
    }
}

// Test
var myStack = new Stack();

myStack.push(4);
console.log(myStack.peek());