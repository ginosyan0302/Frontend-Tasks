import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/user-context";

export const AddUser = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { onAdd } = useContext(UserContext);

    const handleAdd = data => {
        onAdd(data);
        reset();
    }

    return (
        <div className="col-md-4">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit(handleAdd)}>
                <div>
                    <label>First Name</label>
                    <input
                        className="form-control"
                        {...register("name", { required: "Please fill the name" })}
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>} 
                </div>

                <div>
                    <label>Age</label>
                    <input
                        className="form-control"
                        type="number"
                        {...register("age", {
                            required: "Please fill the age",
                        })}
                    />
                    {errors.age && <p className="text-danger">{errors.age.message}</p>} 
                </div>

                <div>
                    <label>Level</label>
                    <select
                        className="form-control"
                        {...register("level", { required: "Please fill the level" })}
                    >
                        <option value="">Select level</option>
                        <option>lecturer</option>
                        <option>junior</option>
                        <option>middle</option>
                        <option>senior</option>
                    </select>
                    {errors.level && <p className="text-danger">{errors.level.message}</p>} 
                </div>

                <div>
                    <button className="btn btn-outline-success btn-sm my-2">Save</button>
                </div>
            </form>
        </div>
    )
}  
