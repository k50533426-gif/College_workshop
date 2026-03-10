document.getElementById("registrationForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let event=document.getElementById("event").value;

let mode=document.querySelector('input[name="mode"]:checked');

if(mode==null)
{
alert("Please select participation mode");
return;
}

mode=mode.value;

let table=document.getElementById("participants");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=email;
row.insertCell(2).innerHTML=phone;
row.insertCell(3).innerHTML=event;
row.insertCell(4).innerHTML=mode;

alert("Registration Successful!");

document.getElementById("registrationForm").reset();

});
