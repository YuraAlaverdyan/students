export interface Student {
    id:number
    name:string
    surname:string
    course:Course
}

export interface Course {
    id:number
    name:string
    subjects:string[]
}

export interface Group {
    id:number
    name:string
    students:Student[]
}
export interface GroupProps {
    item:Group
    text:string
}

// Ցանկացած ուսանող ունի հետևյալ դարշտերը՝  id, name, surname, course
