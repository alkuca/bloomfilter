class bloomFilter {
    constructor(size) {
        // size of the array
        this.size = size;
        // fill the array with zeros
        this.storage = new Array(size).fill(0, 0);
    }

    // hash the word three times and add it to the array
    addWord(word) {
        this.storage[this.hash(word, this.size)] = 1;
        this.storage[this.hash2(word, this.size)] = 1;
        this.storage[this.hash3(word, this.size)] = 1;
    }

    // check if the hashed word is in the array
    contains(word) {
        return !!this.storage[this.hash(word, this.size)] && !!this.storage[this.hash2(word, this.size)] && !!this.storage[this.hash3(word, this.size)]
    }

    // hash function one
    hash(word, size) {
        let hashed = 0;
        for (let i = 0; i < word.length; i++) {
            hashed += word[i].charCodeAt() * i + 1;
        }
        return Math.floor(hashed % size)
    }

    // hash function two
    hash2(word, size) {
        let hashed = 0;
        for (let i = 0; i < word.length; i++) {
            hashed += (word[i].charCodeAt() - i) * i + 1;
        }
        return Math.floor((hashed * 2) % size)
    }

    // hash function three
    hash3(word, size) {
        let hashed = 0;
        for (let i = 0; i < word.length; i++) {
            hashed += (word[i].charCodeAt() + i) * i + 1;
        }
        return Math.floor((hashed * 3) % size)
    }

}

// same word
// array size 10000
// returns true
let test1 = new bloomFilter(10000);
test1.addWord("test");
console.log(test1.contains("test"));

// different word
// array size 10000
// returns false
let test2 = new bloomFilter(10000);
test2.addWord("test");
console.log(test2.contains("test1"));

// different word
// array size 10
// returns true
let test3 = new bloomFilter(10);
test3.addWord("test");
console.log(test3.contains("test1111111111"));


