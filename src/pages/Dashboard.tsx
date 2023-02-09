import React, { useContext, useState } from "react";
import { Group } from "../Components/Group";
import { StudentContext } from "../Context/StudentsContext";
import { wrap } from "module";
import { Course } from "../types";

export const Dashboard: React.FC = () => {
    const { groups, courses } = useContext(StudentContext)
    const [filter, setFilter] = useState<string>('')
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'spaceAround' }}>
        <h3 style={{ textAlign: 'center' }}>Dashboard</h3>
        <label>Courses</label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value=''>-</option>
            {
                courses.map((elm: Course, ind: number) => {
                    return <option key={ind} value={elm.name}>{elm.name}</option>
                })
            }
        </select>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {
                groups.map((elm:any, i: number) => {
                    return <Group key={i} item={elm} text={filter} />

                })
            }

        </div>

    </div>
}