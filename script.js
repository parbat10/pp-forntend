function login(event) {
    event.preventDefault(); // stop form refresh

   let inputUserName = document.querySelector('.js-userName');
   let userName = inputUserName.value;

   let inputPwd = document.querySelector('.js-pwd');
   let pwd = inputPwd.value;

   if( userName === "Admin@123" && pwd=== "pwd123"){
    window.location.href = "/dashboard.html";

   }else{
    alert("wrong username or password. please try again");
    inputUserName.value= "";  
    inputPwd.value = "";
   }
}
function togglePassword() {
  const password = document.querySelector(".js-pwd");
  password.type = password.type === "password" ? "text" : "password";
}