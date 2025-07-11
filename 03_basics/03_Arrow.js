const user = {
    username: "Ahnuf",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} ,Welcome to website`);
        
    }
}
// user.welcomeMessage()
// console.log(this);

const arrow = () => {
    let username = "Ahnuf"
    console.log(this);
}
// arrow()

// const addTwoNum = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwoNum = (num1, num2) => num1 + num2;

// const addTwoNum = (num1, num2) => (num1 + num2)

const addTwoNum = (num1, num2) => ({username: "Ahnuf"})

console.log(addTwoNum(3, 5));
