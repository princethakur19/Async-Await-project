async function greet(){
    return "Prince"
}

const response = greet();
// console.log(response);
response.then((data)=> console.log(data))
