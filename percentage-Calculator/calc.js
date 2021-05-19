var numField1 = document.getElementById("numField1");
var numFielld2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function (event) {
  //form validation
  if (!numField1.value || !numFielld2.value) {
    alert("missing values, please try again");
  } else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    //Math aglorithm
    var result = x / y;
    var percent = Math.trunc(result * 100);
    //insert result in html
    resultField.innerText = "Result: " + percent + "%";
    //turn off default page load
    event.preventDefault();
  }
});
