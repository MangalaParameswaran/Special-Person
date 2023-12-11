const form=document.querySelector("#form");
const email=document.querySelector("#email");
const password=document.querySelector("#password");

form.addEventListener("submit",(e)=>{
   if (!validateInputs()) {
    e.preventDefault();
   } 

})

function validateInputs() {
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    let success=true;

if (!validateEmail(emailVal)) {
    success=false;  
    setError(email,"Your Email is invalid")
}
else if(emailVal==""){
    success=false;  
 setError(email,"Email is Required")   
}
else{
    setSuccess(email);
}
if (passwordVal=="") {
    success=false;  
    setError(password,"Password is Required")
}
else if(passwordVal.length<6){
    success=false;  
    setError(password,"Password must have minimum 6 character")
}
else{
    setSuccess(password)
}
return success;
    
}
 function setError(elements,message) {
    const inputGroup=elements.parentElement;
    const errorElements=inputGroup.querySelector(".error");
    errorElements.innerText=message;

    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}
function setSuccess(elements) {
    const inputGroup=elements.parentElement;
    const errorElements=inputGroup.querySelector(".error");
    errorElements.innerText="";

    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  