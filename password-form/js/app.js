//problem: hints are still shown when the password is valid
//solution: hide and show hints at appropriate times

//hide hints
var $submit = $("#submit");
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();

function isPasswordValid(){
  return $password.val().length > 8;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit(){
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
  //find out if password is valid
  if(isPasswordValid()) {
    //hide hint if valid
    $password.next().hide();
  } else {
    //else show hint
    $password.next().show();
  }
}

function confirmPasswordEvent(){
    //find out if password and confirmation match
  if (arePasswordsMatching()){
    //hide hint if matched
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent(){
  $submit.prop("disabled", !canSubmit());
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
enableSubmitEvent();
