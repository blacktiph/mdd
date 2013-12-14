<?php

// var_dump($_POST);

function killerFishSticks(){
	$returnObject = [];

	//== Current time
	date_default_timezone_set('EST');
	$date = date("m-d-y");
	$time = date("H-i-s");

	//==Angler Name
	$anglerName = $_POST['anglerName'];
	// echo $anglerName;

	//== Global Variables
	$fileType = $_FILES["fighting_file"]["type"];
	$fileSize = $_FILES["fighting_file"]["size"];
	$fileError = $_FILES["fighting_file"]["error"];
	$fileName = $_FILES["fighting_file"]["name"];
	$tempFile = $_FILES["fighting_file"]["tmp_name"];

	//== File Path
	$filePath = "/Applications/MAMP/htdocs/MDD/app/uploads/";

	//== Image Info
	$info_file_exts = array("jpg", "JPG", "jpeg", "JPEG");
	$info_upload_exts = end(explode(".", $fileName));

	// var_dump($_FILES);

	// echo '<br>';
	// echo '<br>';
	// echo 'TMP Name: ';
	// echo ($_FILES["fighting_file"]["tmp_name"]);

	//== Get Image size 
	$imgdata = getimagesize($tempFile);
	$imgWidth = $imgdata[0];
	// echo '<br>';
	// echo 'Image Size: ';
	// echo $imgWidth;

	if($imgWidth < 2500) {
		// echo '<h2>Image is too small</h2>';
		$returnObject['error'] = 'Image is too small';
		return $returnObject;
	} else {
		// echo '<h2>Image is over 6MP</h2>';
	}

	//== Read Meta Data
	// echo '<br>';
	// echo '<br>';
	// echo 'Meta Data (time photo was taken): ';
	$exif = exif_read_data($tempFile, 'IFD0', 0);

	$cameraUnixTime = $exif["FileDateTime"];
	// echo $cameraUnixTime;

	//testing purposes
	$cameraUnixTime = 1391058100;

	if($cameraUnixTime <= 1391058000 || $cameraUnixTime >= 1391317199) {
		//Create <div> to display the error below
		// echo '<h2>Shark was not caught during the tournament</h2>';

		$returnObject['error'] = 'Image was created outside of tournament dates';
		return $returnObject;
	}else {
		//Run the code
		// echo '<h2>Shark is legal</h2>';
	}

	//== Convert Unix time to readable time (for database purposes)
	$cameraConvertedTime = date('jS F Y h:i:s A (T)', $cameraUnixTime);
	// echo($cameraConvertedTime);

	if(
		($fileType == "image/jpeg") &&
		($fileSize < 20971520) && /*fileSize is 20mb*/
		in_array($info_upload_exts, $info_file_exts)
	){

		if ($fileError > 0) {
			// echo "Return Code: " . $fileError . "<br>";
		}

		else {

			if($info_upload_exts == 'jpg' || $info_upload_exts == 'JPG') {
				$ink = explode('.' . $info_upload_exts, $fileName);
				$info_new_file_name = $ink[0] . '_' . $anglerName . '_DATE-'. $date . '_TIME-'. $time . '.' . $info_upload_exts;
				$returnObject['success'] = 'Image file type accepted';
			}

			else if($info_upload_exts == 'jpeg' || $info_upload_exts == 'JPEG') {
				$ink = explode('.' . $info_upload_exts, $fileName);
				$info_new_file_name = $ink[0] . '_' . $anglerName . '_DATE-'. $date . '_TIME-'. $time . '.' . $info_upload_exts;
				$returnObject['success'] = 'Image file type accepted';
			}
		}

		$info_old_file_path = $filePath . $fileName;
		// echo '<br>';
		// echo '<br>';
		// echo 'Old File Path: ';
		// echo ($info_old_file_path);

		$info_new_file_path = $filePath . $info_new_file_name;
		// echo '<br>';
		// echo '<br>';
		// echo 'New File Path: ';
		// echo ($info_new_file_path);

		move_uploaded_file($tempFile, $filePath . $fileName);

		$name = rename($info_old_file_path, $info_new_file_path);

		// echo '<br>';
		// echo '<br>';
		// echo 'Name: ';
		// var_dump($name);

		// echo '<br>';
		// echo '<br>';
		// echo "the file was submitted";
	}

	else {
		// echo '<br>'."Invalid file";
		$returnObject['error'] = 'Invalid file';
		return $returnObject;
	}

	
}


$data = killerFishSticks();
//$json = json_encode($data);
// echo($json);
header('location:../index.html#/submit/file/error/' . $data['error']);

?>
