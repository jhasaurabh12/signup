// function verifyBothPassword(e){
//     let pass=document.getElementById("password");
//     let cnfpass=document.getElementById("cnfPassword");

//     console.log(pass);
//     console.log(cnfpass);
//     console.log(e);
// }

var temp=document.getElementById("cnfPassword");
temp.addEventListener("change",(e)=>{
    let pass=document.getElementById("password");
    let cnfpass=document.getElementById("cnfPassword");

    var str=document.getElementById("match");
    if(pass.value===cnfpass.value){
        str.innerText="Both the passwords Match!";
        str.style.color="green";
    }    
    else{
        str.innerText="Passwords do not Match!";
        str.style.color="red";

    }
});