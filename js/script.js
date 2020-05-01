const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const myPasses = document.querySelector('.password');
const myMsgp = document.querySelector('.msgp');

const myPass = document.querySelector('#username');
const myMsg = document.querySelector('.msg');

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small'); 
    small.innerText = message;
}
//show sucecss outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid 
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Chack required fields
function checkRequired(inputArr) {
   inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
    } else {
        showSuccess(input);
    }
   }); 
}

// Check input length
function checkLength(input, min, max) {
    if(input.value.length < min) { 
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

//showing length whether it's valid for username
function checkvalid(input, min, max) {
    if(myPass.value.length < 4) {
        myPass.style.borderColor = 'red';
    }else if(myPass.value.length < 6){  
        myPass.style.borderColor = '#4286F4'; 
    }else if(myPass.value.length < 8) {  
        myPass.style.borderColor = '#2ecc71';
    }

     // reset All form color
     if(myPass.value.length == 0) {
        myMsg.innerText = '';
        myPass.style.borderColor = '#222';
    };
}

//showing length whether it's valid for password
function checkvalids(input, min, max) {
    if(myPasses.value.length < 4) {
        myPasses.style.borderColor = 'red';
    }else if(myPasses.value.length < 6){  
        myPasses.style.borderColor = '#4286F4';
    }else if(myPasses.value.length < 8) {  
        myPasses.style.borderColor = '#2ecc71';
    }

     // reset All form color
     if(myPasses.value.length == 0) {
        myMsgp.innerText = '';
        myPasses.style.borderColor = '#222';
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Get Fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password , 6 , 25);
    checkEmail(email); 
    checkPasswordsMatch(password, password2);
    
    
    // console.log(username.value);
    // if (username.value === '') {
    //     // alert('Username is required'); 
    //     showError(username,'Username is required');
    // } else {
    //     showSuccess(username)
    // } 

    // if (email.value === '') {
    //     // alert('Username is required'); 
    //     showError(email,'Email is required');
    // } else if(!isValidEmail(email.value)) {
    //     showError(email,'Email is not valid');
    // }
    // else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     // alert('Username is required'); 
    //     showError(password,'password is required');
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value === '') {
    //     // alert('Username is required'); 
    //     showError(password2,'password2 is required');
    // } else {
    //     showSuccess(password2);
    // }
});

username.addEventListener('keyup ', function(e) {
    e.preventDefault();

    checkvalid(username, 3, 5, 7);
});

password.addEventListener('keyup', function(e) {
    e.preventDefault();

    checkvalids(password ,4 , 6, 10);
});



