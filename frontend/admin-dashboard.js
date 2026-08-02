const title = document.getElementById("dashboard-title");
const description = document.getElementById("dashboard-description");
const price = document.getElementById("dashboard-price");
const imageUrl = document.getElementById("dashboard-imageUrl");
const addCourseBtn = document.getElementById("add-course");
const courseList = document.getElementById("course-list")

addCourseBtn.addEventListener("click", async function () {
    const titleValue = title.value
    const priceValue = price.value
    const imageUrlValue = imageUrl.value
    const descriptionValue = description.value
    const response = await axios.post("http://localhost:3000/api/v1/admin/course",
        { title: titleValue, price: priceValue, description: descriptionValue, imageUrl: imageUrlValue },
        { headers: { token: localStorage.getItem("adminToken") } })
    if (response.data.message) {
        fetchCourses();
    }
})

async function fetchCourses() {
    const response = await axios.get("http://localhost:3000/api/v1/admin/course/bulk", { headers: { token: localStorage.getItem("adminToken") } })

    courseList.innerHTML = "";
    response.data.courses.forEach(function (course) {
        courseList.innerHTML += `<div>
         <img src="${course.imageUrl}" alt="${course.title}" width="200">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <p>${course.price}</p>
    </div>`
    });

}
fetchCourses();