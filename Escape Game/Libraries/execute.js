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
		window.location.href = "index.html"
	}
	else{
		alert("wrong ans")
	}
}