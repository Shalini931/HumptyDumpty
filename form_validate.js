const email = document.getElementById('email');

const phone = document.getElementById('phone');

const password = document.getElementById('password');

const emailText = document.getElementById('email-validation'); const phoneText = document.getElementById('phone-validation');

const passwordText = document.getElementById('password-validation'); const emailPattern =

/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/; const phonePattern = /^[0-9]+$/;

const passwordPattern = /^[0-9a-zA-Z]+$/;;

function validate() {

if (!email.value.match(emailPattern)) { emailText.innerText = 'Invalid email';

}

if (!phone.value.match(phonePattern) || phone.value.length != 10) {

phoneText.innerText = 'Invalid Phone no.'; }

if (!password.value.match(passwordPattern)) { passwordText.innerText = 'Invalid Password';

}}
