<?php
header('Access-Control-Allow-Origin: *');  

$value = $_REQUEST['pw'];

if ($value === "jtsmith"){
	$arr = array('result'=>'success');
	echo json_encode($arr);
}
else{
	$arr = array('result'=>'fail');
	echo json_encode($arr);
}
?>