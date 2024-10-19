function loginvalidation() {
	removeallerrors();

	var LoginEmail = document.getElementById('LoginEmail').value;
	var LoginPassword = document.getElementById('LoginPassword').value;
	var PasswordValidationMessage;
	var	emailValidationMessage;

	emailValidationMessage = isValidEmail(LoginEmail);
	if(emailValidationMessage != "valid"){
		ShowErrorMessage('LoginEmail',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(LoginPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('LoginPassword',PasswordValidationMessage);
		return false;
	}
	
	return true;
}

function ifnameexists(){
    removeallerrors();
	ShowErrorMessage('RegiName',"This name already exists.");
	return false;
}

function ifemailexists(){
    removeallerrors();
	ShowErrorMessage('RegiEmailAddres',"This email already exists.");
	return false;
}

function ifemaildoesnotexist(){
    removeallerrors();
	ShowErrorMessage('LoginEmail',"This email does not exist.");
	return false;
}

function signupvalidation(){

	removeallerrors();

	var RegiName = document.getElementById('RegiName').value;
	var RegiEmailAddres = document.getElementById('RegiEmailAddress').value;
	var RegiPassword = document.getElementById('RegiPassword').value;
	var RegiConfirmPassword = document.getElementById('RegiConfirmPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	var	emailValidationMessage;

	if(RegiName == ""){
		ShowErrorMessage('RegiName',"This field is required.");
		return false;
	}else if(RegiName.length < 3 || RegiName.length > 20){
		ShowErrorMessage('RegiName',"Name should be minimum 3 and maximum 20 characters long.");
		return false;
	}

	emailValidationMessage = isValidEmail(RegiEmailAddres);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('RegiEmailAddres',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(RegiPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('RegiPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('RegiConfirmPassword',ConfirmPasswordMessage);
		return false;
	}

	if(RegiPassword != RegiConfirmPassword){
		ShowErrorMessage('RegiConfirmPassword',"Passwords do not match.");
		return false;
	}

	return true;
}


function resetvalidation(){

	removeallerrors();

	var forgotPassEmail = document.getElementById('forgotPassEmail').value;
	
	var	emailValidationMessage;
	emailValidationMessage = isValidEmail(forgotPassEmail);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('forgotPassEmail',emailValidationMessage);
		return false;
	}
}

function newpassvalidation(){

	removeallerrors();

	var NewPassword = document.getElementById('NewPassword').value;
	var ConfirmNewPassword = document.getElementById('ConfirmNewPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	
	PasswordValidationMessage = isValidPassword(NewPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('NewPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(ConfirmNewPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('ConfirmNewPassword',ConfirmPasswordMessage);
		return false;
	}

	if(NewPassword != ConfirmNewPassword){
		ShowErrorMessage('ConfirmNewPassword',"Passwords do not match.");
		return false;
	}

	return true;
}

function removeallerrors(){

	var allErrorMessage = document.getElementsByClassName('error-message');
	var allErrorFiled = document.getElementsByClassName('error-input');
	var i;

	for(i=(allErrorMessage.length - 1); i>=0; i--){
		allErrorMessage[i].remove();
	}
	
	for(i=(allErrorFiled.length-1);i>=0;i--){
		allErrorFiled[i].classList.remove('error-input');
	}
}

function ShowErrorMessage(InputBoxID,Message){

	var InputBox = document.getElementById(InputBoxID);
	InputBox.classList.add('error-input');
	InputBox.focus();

	var ErrorMessageElement = document.createElement("p");
	ErrorMessageElement.innerHTML = Message;
	ErrorMessageElement.classList.add('error-message');
	ErrorMessageElement.setAttribute("id",InputBoxID+'-error');

	InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);
	
}

function isValidEmail(email){

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(email == ""){
		return "This field is required.";
	}

	if(emailRegex.test(email) == false){
		return "This is not a valid email.";
	}

	return "valid";
}

function isValidPassword(password) {
	
	const minLength = 8;
	const maxLength = 32;
	const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*+?])[a-zA-Z\d!@#$%^&*+?]{8,}$/;

	if(password == ""){
		return "This field is required."
	}

	if (password.length < minLength || password.length > maxLength) {
		return "Password length should be minimum of 8 & maximum of 32 characters.";
	}

	if (!letterNumberRegexSpecialChar.test(password)) {
		return "Password should contain alphabetic, numeric and special characters.";
	}
	return "valid";
}