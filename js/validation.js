function check()
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	
	if(/^[a-zA-Z0-9]+$/.test(username)==false)
{
window.alert("Username Error");
}

if(/^[a-zA-Z0-9!@#$%^&*()]{8,}$/.test(password)==false)
{
window.alert("Enter the correct password with a-z A-Z 0-9 and special charcters");
}
}