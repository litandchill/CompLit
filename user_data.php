<html>
<body>
<?php
// define variables and set to empty values
// $nameErr = $emailErr = $genderErr = $websiteErr = "";
// $name = $email = $gender = $comment = $website = "";
//

  if (empty($_POST['email'])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST['email']);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }


  if (empty($_POST['psw'])) {
    $psw = "asdf";
  } else {
    $psw = test_input($_POST['psw']);
  }

  if (empty($_POST['gender'])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST['gender']);
  }


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

print_r($_POST);

echo "<h2>Your Input:</h2>";
echo $email;

echo "<br>";
echo $psw;

echo "<br>";
echo $gender;


?>
<br>
<a type="button" href="https://litandchill.github.io/" class = ".btn-success" roll="button">Return Home</a>
</body>
</html>
