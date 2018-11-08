function Read(){
    var name=document.getElementById("getName").value;
    var rollnumber=document.getElementById("getRoll").value;
    var age=document.getElementById("getage").value;
    if(age<18){
        window.alert("you are not eligible");

    }else{ window.alert("you are eligible");
    console.log(age);

        
    }
    var registernumber=document.getElementById("getreg").value;

    console.log(name);
    console.log(rollnumber);
    console.log(age);

}