function DisplayCourse({ courseList, handleDelete, handleEdit }) {
    return (
        <div style={{ width: "100%", height: "63vh", backgroundColor: "#1f746f", borderRadius: "0px 20px 20px 0px" }}>
            <h3 style={{ textAlign: "center", color: "white" }}>Course List</h3>
            <div className="table-container">
                <table>
                    <tr>
                        <th>Sl.No</th>
                        <th>Course Name</th>
                        <th>Trainer Name</th>
                        <th >action</th>
                    </tr>
                    <tbody>
                        {
                            courseList.length != 0 ? courseList.map((course, idx) => (
                                <tr key={idx}>
                                    <td style={{width: "50px"}}>{idx+1}</td>
                                    <td>{course.course_name}</td>
                                    <td>{course.trainer_name}</td>
                                    <td>
                                        <button style={{ backgroundColor: "#0e6862", border: "none", color: "white", fontSize: "10px", fontWeight: "500", borderRadius: "4px", padding: "4px", marginRight: "4px" }} onClick={() => handleEdit(idx)}>📝</button><button style={{ backgroundColor: "#0e6862", border: "none", color: "white", fontSize: "8px", fontWeight: "500", borderRadius: "4px", padding: "4px" }} onClick={() => handleDelete(idx)}>❌</button>
                                    </td>
                                </tr>
                            )) : <h6 style={{color: "white", textAlign: "center", position: "relative", left: "220px", top: "-10px"}}>No Data Found..</h6>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayCourse;