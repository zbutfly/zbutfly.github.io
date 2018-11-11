var valid_pwds = [
	'5dd99a0c448bf5a3ac1164c5ab5c9acf',	// email
	'737341c96479e1eb39d681c4f3d3446c'	// phone
];
if (!check()) {
	alert("Wrong, please contact me to get enouth information.");
	window.location.replace("/");
}

function check() {
	var email = '5dd99a0c448bf5a3ac1164c5ab5c9acf' // email
	var phone = '737341c96479e1eb39d681c4f3d3446c' // phone
	var pwd = md5(prompt("Provide my mobile number or email address to access it. \n\n(The phone number is a string of 11 digits without country code, and the email is low case.)\n\n"));
	for (var i = 0; i < valid_pwds.length; i++)
		if (pwd === valid_pwds[i]) return true;
	return false;
}