// async function greet(){
//     return "Prince"
// }

// const response = greet();
// // console.log(response);
// response.then((data)=> console.log(data))/

async function github(){
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data)
}

github()
console.log("Hello how are you?")
