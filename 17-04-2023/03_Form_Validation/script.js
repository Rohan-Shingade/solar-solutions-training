const validate = () => {
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPass = document.getElementById('confirm_pswrd').value;

  //function calling
  checkUsername(username);
  checkEmail(email);
  checkPassword(password);
  checkPaswrdMatch(password, confirmPass);

}


const checkUsername = (username)  => {
    if(username.length > 8) {
      document.getElementById('username').classList.add('success');
      document.getElementById('username').classList.replace('error','success');
      document.getElementById('username_error').innerHTML = '';
    } else {
      document.getElementById('username').classList.add('error');
      document.getElementById('username_error').innerText = 'Username must be 8 letters long';
    }
}


const checkEmail = (email) => {
  if(email.length > 10 && email.includes('@gmail.com')) {
    document.getElementById('email').classList.add('success');
    document.getElementById('email').classList.replace('error','success');
    document.getElementById('email_error').innerHTML = '';
  } else {
    document.getElementById('email').classList.add('error');
    document.getElementById('email_error').innerText = 'enter valid email';
  }
}


const checkPassword = (password) => {
  if(password.length > 8 && password.includes('@')) {
    document.getElementById('password').classList.add('success');
    document.getElementById('password').classList.replace('error','success');
    document.getElementById('password_error').innerHTML = '';
  } else {
    document.getElementById('password').classList.add('error');
    document.getElementById('password_error').innerText = "password must be 8 letters long & include '@'";
  }
}


const checkPaswrdMatch = (password, confirmPass) => {
  if(password == confirmPass && password!='') {
    document.getElementById('confirm_pswrd').classList.add('success');
    document.getElementById('confirm_pswrd').classList.replace('error','success');
    document.getElementById('conpaswrd_error').innerHTML = '';
  } else {
    document.getElementById('confirm_pswrd').classList.add('error');
    document.getElementById('conpaswrd_error').innerText = 'passwords must matched';
  }

}