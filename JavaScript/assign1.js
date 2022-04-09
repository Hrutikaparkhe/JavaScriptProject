
window.onload = () => {
    let button = document.querySelector("#btn");
    if(button)
    button.addEventListener("click", calculateBMI);
};

let height= document.getElementById("height")
let weight=document.getElementById("weight")
let result = document.getElementById("res")
function calculateBMI(){
    let height = parseInt(document
        .querySelector("#height").value);

let weight = parseInt(document
        .querySelector("#weight").value);
    let bmi = (weight / ((height * height) 
    / 10000)).toFixed(2);
    if (bmi < 18.6) result.innerHTML =
    `Under Weight : <span>${bmi}</span>`;

else if (bmi >= 18.6 && bmi < 24.9) 
    result.innerHTML = 
        `Normal : <span>${bmi}</span>`;

else result.innerHTML =
    `Over Weight : <span>${bmi}</span>`;
    console.log(bmi)
}
