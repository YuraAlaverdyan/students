import React, { useContext} from "react";
import { GroupProps } from "../types";
import { StudentContext } from "../Context/StudentsContext";

export const Group: React.FC<GroupProps> = (props) => {
    const {item, text} = props
    const {handleDelete} = useContext(StudentContext)
    return <div className="table-wrapper">
        <h4>Group N{item.id} {item.name}</h4>
        <table className="fl-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Course</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {
                        item.students.filter((elm:any) => text ? elm.course.name === text : elm).map((elm,i) => {
                            return <tr key={i} >
                                <td>{elm.name}</td>
                                <td>{elm.surname}</td>
                                <td>
                                    <table>
                                        <thead>
                                            <tr>
                                            <th>Name</th>
                                            <th>Subjects</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{elm.course.name}</td>
                                                <td>{elm.course.subjects.map((sub,key) => {
                                                    return `${sub} `
                                                })}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>
                                    <button className="btn" onClick={() => handleDelete(elm.id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                </table>
            </div>
}