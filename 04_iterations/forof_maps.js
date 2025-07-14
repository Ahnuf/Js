const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

const map = new Map()
map.set("Pak", "Pakistan")
map.set("Pak", "Pakistan")
map.set("USA", "United States of America")
// console.log(map);

const coding = ["Pythhon", "C++", "Javascript"]
coding.forEach( (item) => {
    // console.log(item);
})


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);




const n = [1,2,3]

const total = n.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    a = acc + currval
    console.log(`acc + currval : ${a}`);
    return a
}, 0)
console.log(total);
