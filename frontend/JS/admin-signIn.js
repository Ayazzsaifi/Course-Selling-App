const email = document.getElementById("admin-signIn-email");
const password = document.getElementById("admin-signIn-password");
const submitBtn = document.getElementById("admin-signIn-submit");

submitBtn.addEventListener("click", async function () {
    const emailValue = email.value;
    const passwordValue = password.value;
    const response = await axios.post("https://course-selling-app-w6b8.onrender.com/api/v1/admin/signin",{email:emailValue , password:passwordValue})

    if(response.data.token){
    localStorage.setItem("adminToken",response.data.token)
    window.location.href="admin-dashboard.html"}
}) 