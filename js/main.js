
//  calculate Function to Calculate BMI
function calculate () {
    let bmi;
    let category;
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let result = document.getElementById("result");
    document.getElementById("weight-value").textContent = weight + " kg";
    document.getElementById("height-value").textContent = height + " cm";

    bmi = (weight / Math.pow((height/100), 2)).toFixed(1);
    result.textContent = bmi;

    if (bmi < 18.5) {
        category = "Under Weight";
        result.style.color = "#ffc44d";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight";
        result.style.color = "#0be881";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Over Weight";
        result.style.color = "#ff884d";
    } else {
        category = "Obese";
        result.style.color = "#ff5e57";
    }
    document.getElementById("category").textContent = category;
}

















document.querySelectorAll(".form-group input").forEach(e => e.addEventListener('input', calculate))