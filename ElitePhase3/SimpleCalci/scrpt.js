function add(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer1").innerHTML=a+" + "+b+" = "+c;
}
function substract(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("answer1").innerHTML=a+" - "+b+" = "+c;
}
function multiply(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("answer1").innerHTML=a+" * "+b+" = "+c;
}
function divide(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("answer1").innerHTML=a+" / "+b+" = "+c;
}
function modulus(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("answer1").innerHTML=a+" % "+b+" = "+c;
}
function square(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a**b;
    document.getElementById("answer1").innerHTML=a+" ^ "+b+" = "+c;
}