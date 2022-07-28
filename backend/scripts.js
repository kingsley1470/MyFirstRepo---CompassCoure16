var number = "Hello World"; //string
var classRoom = ["kingsley, victory , jens , michael ,sarah ,john , Neela , Nalani"]
var numbers = [1, 2, 4, 5]; //integers Array
var sign = "$" //char
var isRaining = false; //Boolean true/false
var weight = 57.11; //float comma integer

console.log(classRoom[5] + " " + sign + " " + number[1])

let valueDisplayVar = document.querySelector(".valueDisplay");
let addValueBtn = document.getElementsByClassName(".addV");
let subValueBtn = document.getElementsByClassName(".subV");

let theDefaultValue = 0;

showValue(); //show the default value by calling the function first

addValueBtn.addEventListener("click", () => {
//function body
    console.log("HELLO WORLD")
    theDefaultValue++;
});
subValueBtn.addEventListener("click", () => {
//function body
    console.log("HELLO WORLD")
    theDefaultValue--;
    console.log(theDefaultValue);
    showValue();
});


/*asking the html element to replace it content with the value from thDefaultValue variable*/

function showValue() {
    valueDisplayVar.innerHTML = theDefaultValue;

}
//function to send Email from input field
function sendMail() {
    //let emailBody
    window.location.href=
        "mailto:rawmetal@gmail.com" +
        "?cc"=+

        "&subject=" + encodeURIComponent("placeHolder subject") +
        "&body=" + encodeURIComponent(document.querySelector(".form-control").value)

}