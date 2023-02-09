import React, { useEffect, useState } from "react";
import { Group, Course } from "../types";
import { Student } from './../types';

interface ContextInterface {
    groups:Group[]
    courses:Course[]
    handleDelete:(id:number) => void
    handleAddStudent:(data:Student) => void
}

interface Props {
    children: React.ReactNode
}


export const StudentContext = React.createContext<ContextInterface | any>(null)

export const StudentContextProvider: React.FC<Props> = (props) => {
    const [courses, setCourses] = useState<Course[]>([
        { id: 1091, name: "WEb 0", subjects: ["HTML", "CSS"] },
        { id: 1092, name: "FRONTEND", subjects: ["JS", "React", "Angular"] },
        { id: 1093, name: "BACKEND", subjects: ["JS", "NODE"] },
        { id: 1094, name: "UI/UX", subjects: ["HTML", "CSS", "Bootstrap", "Taiwand CSS"] },
        { id: 1095, name: "FRONTEND 2", subjects: ["Vue.js", "Angular"] },
        { id: 1096, name: "FULL STACK", subjects: ["React", "Node.js", "Angular"] },
    ])

    const [groups, setGroups] = useState<Group[]>([
        {
            id: 101, name: "G1", students: [
                {id:1, name:"Gagik", surname:"Hakobyan", course:courses[4]},
                {id:2, name:"Norayr", surname:"Vazgenyan", course:courses[2]},
                {id:3, name:"Grish", surname:"Manukyan", course:courses[1]},
                {id:4, name:"Exishe", surname:"Charenc", course:courses[5]},
                {id:5, name:"Vrdo", surname:"Papoyan", course: courses[0]},
                {id:22, name:"Vrdo", surname:"Papoyan", course: courses[0]}
            ]
        },
        {
            id: 102, name: "G2", students: [
                {id:6, name:"Varo", surname:"Smboyan", course:courses[3]},
                {id:7, name:"Smbo", surname:"Varoyan", course:courses[5]},
                {id:8, name:"Lernik", surname:"Tsaturyan", course:courses[1]},
                {id:9, name:"Anush", surname:"Levonyan", course:courses[2]},
                {id:10, name:"Hripsime", surname:"Galstyan", course:courses[0]},
                {id:11, name:"Vrdo", surname:"Papoyan", course: courses[0]}
            ]
        }
    ])

    useEffect(() => {
        groups.map(elm => {
            if(!elm.students.length) {
                setGroups([...groups.filter(fil => fil.id != elm.id )])
            }
        })
    },[groups])

    
    const handleDelete = (id:number) => {
        setGroups([...groups.map(elm => {
            return {...elm, students: elm.students.filter(fil => fil.id !== id)}
        })])
    }
    

    const handleAddStudent = (data:Student) => {
        const group = groups.find(elm => elm.students.length < 6)
        if (group) {
            groups.map(elm => {
                if (elm.id === group.id) {
                    return group.students.push({...data, id: Date.now()})
                }
            })
        } else {
            setGroups([...groups, {id: Math.round(Math.random() * 2 + Date.now()), name: (Math.random() + 1).toString(36).substring(9), students: [{...data, id:Date.now()}]}])
        }
    }

    return <StudentContext.Provider value={{groups, courses, handleDelete, handleAddStudent}}>
        {props.children}
    </StudentContext.Provider>
}