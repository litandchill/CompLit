// js for entire page
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav-fixed-top") {
        x.className += " responsive";
    } else {
        x.className = "topnav-fixed-top";
    }
}



var $prehashval = "";
function loop()
{
    if (location.hash.slice(1)!=$prehashval)
        hashChanged();

    $prehashval = location.hash.slice(1);
    setTimeout("loop()", 100);
}
function hashChanged()
{
    var $output;
    switch (location.hash.slice(1))
    {
        case "page1":
            document.getElementById('page1').style.display = "";
            document.getElementById('page2').style.display = "none";
            break;
        case "page2":
            document.getElementById('page1').style.display = "none";
            document.getElementById('page2').style.display = "";
            break;
        default:
            $output = location.hash.slice(1);
    }
}
loop();

// Slideshow background js
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
