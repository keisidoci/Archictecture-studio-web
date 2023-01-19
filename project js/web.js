function reserve() {
    var email = document.getElementById("exampleFormControlInput1").value;
    var note = document.getElementById("exampleFormControlTextarea1").value;

    if (email == ""){
        document.getElementById("mesazh_email").innerHTML = "Please fill your email!";
        return false;
    }
    else {
        window.alert("Meeting reserved!");
        return true;
    }
}

function application (){
    var name = document.getElementById("name").value;
    var email = document.getElementById("exampleInputEmail1").value;

    if (!isNaN(name)) {
        document.getElementById("mesazh_name").innerHTML = "Please enter your full name!";
        return false;
}
    if (email == ""){
    document.getElementById("mesazh_email").innerHTML = "Please fill your email!";
        return false;

} 
else {
    window.alert("Application is sent!");
        return true;
}
}

const container = document.querySelector('.img');
const image = document.querySelector('.project');

container.addEventListener('mouseover', function(){
  image.requestFullscreen();
});

container.addEventListener('mouseout', function(){
  document.exitFullscreen();
});