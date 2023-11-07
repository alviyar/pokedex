const API_URL="https://api.github.com/users/alviyar";
const user =fetch(API_URL).then((response) =>
response
.json()
.then((data)=>data)
.catch((error)=>console.log(error))
);




console.log(user);

async function getUser(){
    const response=await fetch(API_URL);
    const data=await reponse.json();

    return data;
}

await.getUser();
