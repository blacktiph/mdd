<?php

function imgUploadHelper(){

	//Array for errors
	$returnObject = [];

	//== Current time
	date_default_timezone_set('EST');
	$date = date("m-d-y");
	$time = date("H-i-s");

	//==Angler Name
	$anglerName = $_POST['anglerName'];

	//== Global Variables
	$fileType = $_FILES["fighting_file"]["type"];
	$fileSize = $_FILES["fighting_file"]["size"];
	$fileName = $_FILES["fighting_file"]["name"];
	$tempFile = $_FILES["fighting_file"]["tmp_name"];

	//== File Path (change this path to make it work)
	$filePath = "../uploads";

	//== Image Info
	$info_file_exts = array("jpg", "JPG", "jpeg", "JPEG");
	$info_upload_exts = end(explode(".", $fileName));

	//== Get Image size 
	$imgdata = getimagesize($tempFile);
	$imgWidth = $imgdata[0];

	//== Meta Data
	$exif = exif_read_data($tempFile, 'IFD0', 0);
	$cameraUnixTime = $exif["FileDateTime"];

	//TESTING purposes - set time
	$cameraUnixTime = 1391058100;

	//== File type, time, and size Logic
	if($fileType == "image/jpeg" && $fileSize < 20971520 && in_array($info_upload_exts, $info_file_exts)){

		//Image file type
		if($info_upload_exts == 'jpg' || $info_upload_exts == 'JPG' || $info_upload_exts == 'jpeg' || $info_upload_exts == 'JPEG') {
			$info_new_file_name = $anglerName . '__DATE-'. $date . '__TIME-'. $time . '.' . $info_upload_exts;
			$returnObject['success'] = 'Image file type accepted';
		}

		//Time image was taken with camera
		if($cameraUnixTime <= 1391058000 || $cameraUnixTime >= 1391317199) {
			$returnObject['error'] = 'Image was created outside of tournament dates';
			return $returnObject;
		}

		//Image size
		if($imgWidth < 2500) {
			$returnObject['error'] = 'Image is too small';
			return $returnObject;
		}

		//Change the name
		$info_old_file_path = $filePath . $fileName;
		$info_new_file_path = $filePath . $info_new_file_name;

		//Move the file
		move_uploaded_file($tempFile, $filePath . $fileName);
		$name = rename($info_old_file_path, $info_new_file_path);
	}

	else {
		$returnObject['error'] = 'Invalid file format';
		return $returnObject;
	}
}

$data = imgUploadHelper();

//if there are errors, return to submit page.
header('location:../index.html#/submit/file/error/' . $data['error']); 

?>
