import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { StudentContext } from "../Context/StudentsContext";
import { Course } from "../types";
// id, name, surname, course
export const AddStudent: React.FC = () => {
    const { courses, handleAddStudent } = useContext(StudentContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    return <div className="addStudent">
        <form className="form" onSubmit={handleSubmit(e => handleAddStudent(e))}>
            <div>
                <h4>Name</h4>
                <input {...register("name", { required: true })} />
            </div>
            {errors.name && <span>This field is required</span>}
            <div>
                <h4>Surname</h4>
                <input {...register("surname", { required: true })} />
            </div>
            {errors.surname && <span>This field is required</span>}
            <div>
                <h4>Course</h4>
                <select {...register("course", { required: true, setValueAs: v => courses.find((e:Course) => e.name === v)})}>
                    <option value=''>-</option>
                    {
                        courses.map((elm:Course,key:number) => {
                            return <option key={key} value={elm.name}>{elm.name}</option>
                        })
                    }
                </select>
            </div>
            {errors.course && <span>This field is required</span>}
            

            <input type="submit" />
        </form>
    </div>

}