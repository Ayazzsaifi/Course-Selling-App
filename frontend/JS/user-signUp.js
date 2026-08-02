const firstName=document.getElementById("user-signUp-firstName");
const lastName=document.getElementById("user-signUp-lastName");
const email=document.getElementById("user-signUp-email");
const password=document.getElementById("user-signUp-password");
const submitBtn=document.getElementById("user-signUp-submit");

submitBtn.addEventListener("click",async function(){
    const firstNameValue=firstName.value;
    const lastNameValue=lastName.value;
    const emailValue=email.value;
    const passwordValue=password.value
    const response=await axios.post("https://course-selling-app-w6b8.onrender.com/api/v1/user/signup",{firstName:firstNameValue,lastName:lastNameValue,password:passwordValue,email:emailValue})

    if(response.data.message){
    window.location.href="user-signIn.html"}
})