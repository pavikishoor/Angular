function validateForm() {
var I_name = document.forms["Form"]["name"].value;
var I_mail = document.forms["Form"]["email"].value;
var I_number = document.forms["Form"]["number"].value;
var email=/^([a-zA-Z0-9.-_]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$)/;
  if (I_name == "" || I_mail == "" || I_number =="") {
    alert("Field cant be empty");
    return false;
  }
  if(I_number.length < 10 and I_number.match()){
alert("Enter atleast 10 number");
}
  if(!I_mail.match(email)){
alert("Enter valid Email");
  }
}
