let form = document.getElementById("form");

function btnFun() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email == 'muzammil@gmailcom' && password == '000') {
      window.location.assign('form.html');
      alert("Login successfully !");
  } else{
    alert("Invalid Information");
    return;
  }
  
}
