const courseList = document.getElementById("course-list");

async function ownCourses(){
    const response = await axios.get("https://course-selling-app-w6b8.onrender.com/api/v1/user/purchase",{headers:{token:localStorage.getItem("userToken")}})
    courseList.innerHTML=""
    response.data.ownCourses.forEach(function(course){
        courseList.innerHTML+=`<div>
         <img src="${course.courseId.imageUrl}" width="200">
        <h2>${course.courseId.title}</h2>
        <p>${course.courseId.description}</p>
        <p>${course.courseId.price}</p>
        </div>`
    });
}

ownCourses();