import AddCourse from "./components/AddCourse";
import DisplayCourse from "./components/DisplayCourse";
import { useState } from "react";

let editCourseId;

function App() {

  const [courseData, setCourseData] = useState({
    course_name: "",
    trainer_name: ""
  });

  const emptyData = {
    course_name: "",
    trainer_name: ""
  }


  const [editButton, setEditButton] = useState(false)

  const handleChange = (e) => {
    // console.log(courseData,e.target.value);
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
    // console.log(courseData);
  }

  const [courseList, setCourseList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourseList([...courseList, courseData]);
    setCourseData(emptyData)
    // console.log(courseList)
  }

  const handleEdit = (id) => {
    let editData = courseList.filter((course, index) => index === id);
    editCourseId = id;
    console.log(editData);
    setCourseData(editData[0]);
    setEditButton(true)
  }

  const handleDelete = (id) => {
    let filetredList = courseList.filter((course, index) => index !== id);
    console.log(filetredList)
    setCourseList(filetredList)

  }

  const handleCancel = (e) => {
    e.preventDefault();
    setEditButton(false);
    setCourseData(emptyData)
  }

  const handleEditSave = (e) => {
    e.preventDefault();
    console.log(editCourseId)
     let filetredList = courseList.map((course, index) => {
      if(index == editCourseId){
        console.log(course);
        return courseData;
      }
      else{
        return course;
      }
     });
     setCourseList(filetredList);
     setCourseData(emptyData);
     setEditButton(false);
  }

  return (
    <div style={{width: "900px",backgroundColor: "#DEF2F1", padding: "0px", borderRadius: "18px"}}>
      <h1 style={{ textAlign: "center", color: "#155752" }}>Course Management</h1>
      <div className="sub-container">
        <>
          <AddCourse editButton={editButton} courseData={courseData} handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel} handleEditSave={handleEditSave}/>
        </>
        <>
          <DisplayCourse courseList={courseList} handleDelete={handleDelete} handleEdit={handleEdit} />
        </>
      </div>
    </div>
  )
}

export default App;