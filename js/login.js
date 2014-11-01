$(function(){
	//on clicking the login button for report login
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
		  		//$("#reports-login").attr("novalidate","novalidate");
		  		$(".reports-login-wrapper").addClass("error");
		  		//$("#reports-login").trigger("invalid-fndtn.abide");
		  		return false;
		  	}
		  }
		
	});
	
	});

});

