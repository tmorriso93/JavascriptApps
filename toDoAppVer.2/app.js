var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var items = document.querySelectorAll("#list li"),
	tab = [], liIndex;

for (var i = 0; i < items.length; i++) {
	tab.push(items[i].innerHTML);
}

for(var i = 0; i < items.length; i++) {

	items[i].onclick = function(){
		liIndex = tab.indexOf(this.innerHTML);
		console.log(this.innerHTML + " INDEX = " + liIndex)
	};
}

function removeLi() {
	items[liIndex].parentNode.removeChild(items[liIndex]);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
		if (inputLength() > 0) {
		createListElement();
  }
}
 
function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);