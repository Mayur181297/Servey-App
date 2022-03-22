function myclick() {
    let nm = document.getElementById("nm").value;
    var em = document.getElementById("em").value;
    var ag = document.getElementById("ag").value;
    var cnm = document.getElementsByName("clgnm").value;

    if (nm == "") {
        document.getElementById("nme").innerHTML = "Please Enter Name..";
        return false;
    } else {
        document.getElementById("nme").innerHTML = "";
    }
    if (em == "") {
        document.getElementById("eml").innerHTML = "Please Enter Email..";
        return false;
    } else {
        document.getElementById("eml").innerHTML = "";
    }
    if (ag == "") {
        document.getElementById("ages").innerHTML = "Please Enter Age..";
        return false;
    } else {
        document.getElementById("ages").innerHTML = "";
    }
    if (cnm == "") {
        document.getElementById("clgnm").innerHTML = "Please Enter College Name..";
        return false;
    } else {
        document.getElementById("clgnm").innerHTML = "";
    }
    //document.getElementById("aler").innerHTML = "<div class='alert alert-info' role='alert'>Form Submitted Successfully</div>"

    return true;


}