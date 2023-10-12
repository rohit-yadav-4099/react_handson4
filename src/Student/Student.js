import { useState } from "react"
import { Link } from "react-router-dom"


function Student(){
    const [datas] = useState([
        {name:'Roshini',age:'21',course:'MERN',Batch:'March',Change:'Edit',},
        {name:'Mitthu',age:'18',course:'MERN',Batch:'March',Change:'Edit', },
        {name:'Divya',age:'19',course:'MERN',Batch:'April',Change:'Edit',},
        {name:'Veer',age:'25',course:'MERN',Batch:'April',Change:'Edit', },
        {name:'Virat',age:'22',course:'MERN',Batch:'May',Change:'Edit', },
        {name:'Rani',age:'21',course:'MERN',Batch:'May',Change:'Edit',},
        {name:'Rahul',age:'23',course:'MERN',Batch:'June',Change:'Edit',},
        {name:'Mayank',age:'22',course:'MERN',Batch:'July',Change:'Edit'}
    ])
    return(
        <>
        <div className="parentbtn">
        <span className="Studentsdetail">Student Details</span>
        <button className="addbtn">Add new Student</button>
        </div>
        <table className="data">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.Batch}</td>
                            <td><Link to={`/Student/${index}`}>{item.Change}</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Student