const allCourses = document.getElementById("allCourses")

async function getAllCourses() {
    const response= await axios.get("http://localhost:3000/api/v1/course/preview")
    allCourses.innerHTML="";
    response.data.courses.forEach(function(course){
        allCourses.innerHTML+= `<div>
        <img src="${course.imageUrl}" alt="${course.title}" width="200">
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <p>${course.price}</p>
        <button onclick="buyCourse('${course._id}')">Buy</button>
        
        </div>`
    })
}
getAllCourses();

async function buyCourse(courseId){
    const response = await axios.post("http://localhost:3000/api/v1/course/purchase",{courseId:courseId},{headers:{token:localStorage.getItem("userToken")}}) 
    if(response.data.message){
    alert("Course purchased!")
}
}