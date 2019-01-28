


$(document).ready(function(){

    // if user submits the form, validate it
    $('.submitButton').click(function(){
        if( validateForm()= true){
            alert("oassed");
        }
        
    });


    function validateForm(){
        // regular expressions
        let usernameReg = /^[a-zA-Z0-9_]{5,}+$/;
        let emailaddressReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
        let passwordReg = /^{6,}+$/;
    
        // take in the inputs
        let username = $('#usernameInput').val();
        let email = $('#emailInput').val();
        let password = $('#passwordInput').val();
        let password2 = $('#repeatpasswordInput').val();
    
        // storethem in an array
        let inputVal = new Array(username, email, password, password2);
        let submitOK = true;
    
        let inputMessage = new Array("username", "email address", "password", "password");
        // hide the previous error message
         $('.error').hide();
    
            // If the values are empty, not ok, display err msg
            if(inputVal[0] == ""){
                $('#usernameInput').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
                submitOK = false;
            } 
            // if the values do not match the regx, not ok, display err msg
            else if(!nameReg.test(username)){
                $('#usernameInput').after('<span class="error"> Username must be at least 3 characters</span>');
                submitOK= false;
            }
    
            if(inputVal[1] == ""){
                $('#emailInput').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
                submitOK = false;
            }
            else if(!emailaddressReg.test(email)){
                $('#emailInput').after('<span class="error"> Address contain illegal characters</span>');
                submitOK = false;
            }
    
            if(inputVal[2] == ""){
                $('#passwordInput').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
                submitOK = false;
            } 
            else if(!passwordReg.test(password)){
                $('#passwordInput').after('<span class="error"> Password must be at least 6 characters </span>');
                submitOK = false;
            }
    
            if(inputVal[3] == ""){
                $('#repeatpasswordInput').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
                submitOK = false;
            } 
            else if (password2!==password1)
            {
                $('#repeatpasswordInput').after('<span class="error"> The passwords you entered does not match</span>');
                submitOK = false;
            }
            // do not submit to php if there is any error
            if (!submitOK)
            {
                event.preventDefault();
                return false;
            }
            return true;

      
    }   

})