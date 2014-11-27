$(function(){
	//Onclick listener for reports login form
	$('#form-report-login-btn').on('click',function(){
		var param = {'pw':$("#report-login-input").val()};
		console.log(param);
		$.ajax({
		  type: "POST",
		  dataType: "json",
		  url: "./php/test_login.php",
		  data: param,
		  success:function(response){
		  	console.log(response);
			if(response['result']==="success"){
				console.log("success");
				return true;
			}
		  	else{
		  		//Displays error message when login fails
		  		$("#reports-login-error").css('visibility','visible');
		  		//Adds keypress listener to hide error message when user re-enters login code.
		  		$("#report-login-input").on('keypress',function(){
		  			$("#reports-login-error").css('visibility','hidden');
		  		});
		  		return false;
		  	}
		  }
		});
	});

	//Onclick listener for employee login form
	$('#form-employee-login-btn').on('click',function(){
		$("#employee-login-error").css('visibility','visible');
  		//Adds keypress listener to hide error message when user re-enters login code.
  		$("#employee-email").on('keypress',function(){
  			$("#employee-login-error").css('visibility','hidden');
  		});

  		$("#employee-pw").on('keypress',function(){
  			$("#employee-login-error").css('visibility','hidden');
  		});
		var param = {'email':$("#employee-email").val(),'pw':$("#employee-pw").val()};
		console.log(param);
		$.ajax({
		  type: "POST",
		  dataType: "json",
		  url: "./php/test_login.php",
		  data: param,
		  success:function(response){
		  	console.log(response);
			if(response['result']==="success"){
				console.log("success");
				return true;
			}
		  	else{
		  		//Displays error message when login fails
		  		$("#employee-login-error").css('visibility','visible');
		  		//Adds keypress listener to email and password fields to hide error message when user re-enters login code.
		  		$("#employee-email").on('keypress',function(){
		  			$("#employee-login-error").css('visibility','hidden');
		  		});
		  		$("#employee-pw").on('keypress',function(){
		  			$("#employee-login-error").css('visibility','hidden');
		  		});
		  		return false;
		  	}
		  }
		});
	});
});