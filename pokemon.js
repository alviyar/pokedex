window.onload=function(){
 const inputEl =document.getElementById("input-el");
const sumbitBtn=document.getElementById("submit-btn");
const nameEl=document.getElementById("name");
const typeEl=document.getElementById("type");
const heightEl=document.getElementById("height");
const weightEl=document.getElementById("weight");
const imageEl=document.getElementById("image");

sumbitBtn.addEventListener("click", async() => {
    const i=inputEl.value;
    const api_url=`https://pokeapi.co/api/v2/pokemon/${i}`;

    const response = await fetch(api_url);
    const data= await response.json();

    const types=data.types.map((type)=>type.type.name).join(", ");
    const height=data.height;
    const weight=data.weight;
    const name=data.name;
    const image=data.sprites.front_default;

    imageEl.src = image;
    nameEl.textContent = `Name: ${name}`;
    typeEl.textContent = `Types: ${types}`;
    heightEl.textContent = `Height: ${height}`;
    weightEl.textContent = `Weight: ${weight}`;
    

});   
}
