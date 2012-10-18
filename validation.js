function formValidation()
{
var uname = document.registration.username;
var utel = document.registration.telephone;

var uemail = document.registration.email;

if(allLetter(uname))
{
if(alphanumeric(utel))
{
if(ValidateEmail(uemail))
{
}
}

return false;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(utel)
{ 
var letters = /^[0-9]+$/;
if(utel.value.match(letters))
{
return true;
}
else
{
alert('User telephone must have numeric characters only');
utel.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
} 
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
