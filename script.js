async function github(){
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    // console.log(data);

    for(let user of data){
        const element = document.createElement("div");
        element.classList.add("user")

        const image = document.createElement('img');
        image.src = user.avatar_url;
    }
}

github();

console.log("Hello buddy!") ;