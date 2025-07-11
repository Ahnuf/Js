// function addTwoNumebrs(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumebrs(3, 5)

// function addTwoNumebrs(num1, num2){
//     let result = num1 + num2
//     return result
// }
// const result = addTwoNumebrs(3, 5)
// console.log(result);


// function LoggedInUser(username){
//     if (username === undefined) {
//         console.log("Please enter a username.");   
//     }
//     else
//      return `${username} logged in`
// }
// console.log(LoggedInUser());


// function cartItems (...num1){
//     return num1
// }
// console.log(cartItems(200,400,300));

const user = {
    username : "Ahnuf",
    paid : 200,
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and the paid amount is ${anyobject.paid}`);
}
handleobject(user)