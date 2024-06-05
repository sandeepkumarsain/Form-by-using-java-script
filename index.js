function myform(){
    let a = document.getElementById("user").value
        if (a=="") {
            alert("Plaese fill the blanks")
        }
    

    let b = document.getElementById("pass").value
    let c = document.getElementById("confirm").value
    if(b===""){
        alert("please fill the password")
        return false;
    }
    else if(b.length < 5){
        alert("Password length is too short")
        return false;
    }
    else if(b != c){
        alert(" Oops! password did not match")
        return false;
    }
    else{
        alert("Form submited succesfully")
    }

}

