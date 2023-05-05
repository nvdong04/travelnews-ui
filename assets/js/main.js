var username = document.getElementById('auth-form__inp-user');
var password = document.getElementById('auth-form__inp-pass');
var errorMess = document.getElementById('auth-form__error');

function checkInput() {
    if(username.value.trim() == "" || password.value.trim()) {
        errorMess.innerHTML= "<p> Vui lòng nhập username và password trước! </p>";
        return false;
    }
}

//check đăng kí
var inpEmail = document.getElementById('inpEmail');
var inpUserName = document.getElementById('inpUserName');
var inpPassWord = document.getElementById('inpPassWord');
var errorMessage = document.querySelector('div.auth-form__error > p');
function checkRegister() {
    if(inpEmail.value.trim() == "" || inpPassWord.value.trim() == "" || inpUserName.value.trim() == "") {
        errorMessage.innerText = "Vui lòng nhập đầy đủ trước khi ấn đăng ký";
        errorMessage.style.display = "block";
        return false;
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(inpEmail.value.trim())) { 
        errorMessage.innerText = 'Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com';
        errorMessage.style.display = "block";
        inpEmail.focus; 
        return false; 
    }

    var userReg = /^[a-z0-9]{3,16}$/;
    if (!userReg.test(inpUserName.value.trim())) {
        errorMessage.innerText = 'Username chỉ được chứa chữ cái và số!';
        errorMessage.style.display = "block";
        inpUserName.focus;
        return false; 
    }

    if (!userReg.test(inpPassWord.value.trim())) {
        errorMessage.innerText = 'Password chỉ được chứa chữ cái và số!';
        errorMessage.style.display = "block";
        inpPassWord.focus;
        return false; 
    }



    if(inpUserName.value.trim().length < 5) {
        errorMessage.innerText = 'Vui lòng nhập tên đăng nhập nhiều hơn 5 kí tự';
        errorMessage.style.display = "block";
        inpUserName.focus; 
        return false; 
    }
}