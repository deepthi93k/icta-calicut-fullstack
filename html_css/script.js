function Read(){
    var name=document.getElementById("getName").value;
    var rollnumber=document.getElementById("getRoll").value;
    var age=document.getElementById("getage").value;
    var dist=op.options[op.selectedIndex].value;
    console.log(dist);
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
    function  addition()
    {
var number1=document.getElementById("get_number1").value;
var number2=document.getElementById("get_number2").value;
var x=parseInt(number1);
var y=parseInt(number2);
var op=document.getElementById("get_operation");
var select=op.options[op.selectedIndex].value;
if(select== "addition")
{
    var result=x+y;
}else if(select=="subtraction"){
    var result=x-y;

}else if(select=="multiplication"){

var result=x*y;
}else{
    var result=x/y;
}

console.log(result);
window.alert(result);
    }
    
function  largest()
{
var num1=document.getElementById("get_num1").value;
var num2=document.getElementById("get_num2").value;
var num3=document.getElementById("get_num3").value;
var x=parseInt(num1);
var y=parseInt(num2);
var z=parseInt(num3);


if (x>y)
{
if(x>z)
{
console.log(x);}
else
{
console.log(z);
}
}

else
{
    if(y>z)
{
    console.log(y);
}
}
}
function  smallest()
{
var num1=document.getElementById("get_num1").value;
var num2=document.getElementById("get_num2").value;
var num3=document.getElementById("get_num3").value;
var x=parseInt(num1);
var y=parseInt(num2);
var z=parseInt(num3);


if (x<y)
{
if(x<z)
{
console.log(x);}
else
{
console.log(z);
}
}

else
{
    if(y<z)
{
    console.log(y);
}
}
}