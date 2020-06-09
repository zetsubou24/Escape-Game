function f1(){
	alert("Hello")
}
function welcome(){
	window.location.href = "Welcome.html"
	// window.alert("hello")
	// if (document.getElementById("username").value()=="abc" && document.getElementById("password").value()=="123") {
	// 	window.location.href = "Welcome.html"
	// else{
	// 	window.alert("wrong")
	// }
}
function assign(){
	window.location.href = "Assign.html"
}
function puzz1intro(){
	window.location.href = "puzzintro.html"
}
function puzz1(){
	var ans1 = document.getElementById("puzz1sol").value
	if (ans1 == 1234) {
		window.location.href = "Puz3.html"
	}
	else{
		alert("wrong ans")
	}
}
function puz3(){
	// alert("hello")
	var x = document.getElementById("puz3sol")
	var y = document.getElementById("puz3but")
	if(x.style.display === "none"){
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
	}
	if(y.style.display === "none"){
		y.style.display = "block";
	}
	else{
		y.style.display = "none";
	}
}
function puz3_2(){
	var x = document.getElementById("puz3sol");
	if(x.value == "102454"){
		alert("Correct answer");
	}
	else{
		alert("wrong answer");
	}
}

function puz3_doc(){
	window.location.href = "puzz3docs.html"
}