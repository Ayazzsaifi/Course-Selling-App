const firstName=document.getElementById("admin-signUp-firstName");
const lastName=document.getElementById("admin-signUp-lastName");
const email=document.getElementById("admin-signUp-email");
const password=document.getElementById("admin-signUp-password");
const submitBtn=document.getElementById("admin-signUp-submit");

submitBtn.addEventListener("click",async function(){
    const firstNameValue=firstName.value;
    const lastNameValue=lastName.value;
    const emailValue=email.value;
    const passwordValue=password.value
    const response=await axios.post("http://localhost:3000/api/v1/admin/signUp",{firstName:firstNameValue,lastName:lastNameValue,password:passwordValue,email:emailValue})

    if(response.data.message){
    window.location.href="admin-signIn.html"}
})