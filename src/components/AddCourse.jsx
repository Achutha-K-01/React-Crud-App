function AddCourse({courseData, handleChange, handleSubmit, editButton, handleCancel, handleEditSave}) {
    return (
        <div style={{width: "400px", backgroundColor: "rgb(120 183 180)", borderRadius: "20px 0px 0px 20px"}}>
            <h3 style={{textAlign: "center", color: "rgb(15, 68, 66)", marginTop: "90px"}}>Add New Course</h3>
            <div>
                <form style={{ width: "100%",display: "grid", justifyContent: "center", padding: "20px 0px" }}>
                    <div>
                        <p  style={{fontSize: "10px", fontWeight: "500",  marginTop: "0px",  marginBottom: "2px", color: "#0f4442"}}>Course Name</p>
                        <input name="course_name" value={courseData.course_name} onChange={handleChange} placeholder="Enter course name" style={{padding: "4px  6px", border: "none", borderRadius: "4px", fontSize: "11px"}}/>
                    </div>
                    <div style={{marginTop: "20px"}}>
                        <p style={{fontSize: "10px", fontWeight: "500", marginTop: "0px",  marginBottom: "2px", color: "#0f4442"}}>Trainer Name</p>
                        <input name="trainer_name" value={courseData.trainer_name} onChange={handleChange} placeholder="Enter trainer name" style={{padding: "4px 6px", border: "none", borderRadius: "4px", fontSize: "11px"}}/>
                    </div>
                    <div style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                        {editButton ? (<><button style={{backgroundColor: "rgb(31, 116, 111)", border:"none", color: "white", fontSize: "10px", fontWeight: "600", borderRadius: "4px", marginRight: "4px", padding: "4px"}} onClick={handleEditSave}>UPDATE</button> <button style={{backgroundColor: "rgb(31, 116, 111)", border:"none", color: "white", fontSize: "10px", fontWeight: "600", borderRadius: "4px", padding: "4px"}} onClick={handleCancel}>CANCEL</button></>) : (<button style={{backgroundColor: "rgb(31, 116, 111)", border:"none", color: "white", fontSize: "10px", fontWeight: "600", borderRadius: "4px", padding: "4px"}} onClick={handleSubmit}>SUBMIT</button>)}
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default AddCourse;