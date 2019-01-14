let User = require("./User");

let user1 = new User({name: 'AV', age: 31});
let user2 = new User({name: 'AV', age: 32});

console.log('\nIterating USER1')
for(const a of user1) {
    console.log(a)
}
console.log('\nIterating USER2')
for(const a of user2) {
    console.log(a)
}
