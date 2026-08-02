const email = document.getElementById("user-signIn-email");
const password = document.getElementById("user-signIn-password");
const submitBtn = document.getElementById("user-signIn-submit");

submitBtn.addEventListener("click", async function () {
    const emailValue = email.value;
    const passwordValue = password.value;
    const response = await axios.post("https://course-selling-app-w6b8.onrender.com/api/v1/user/signin",{email:emailValue , password:passwordValue})

    if(response.data.token){
    localStorage.setItem("userToken",response.data.token)
    window.location.href="user-dashboard.html"}
}) 